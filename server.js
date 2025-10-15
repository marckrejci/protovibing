/**
 * Simple Express server to proxy Loops API requests
 * This keeps your API key secure on the server side
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Loops API proxy endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  // Validate email
  if (!email || !email.trim()) {
    return res.status(400).json({
      success: false,
      error: 'Email is required'
    });
  }

  // Check for API key
  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error('LOOPS_API_KEY is not set. Unable to submit email to Loops.');
    return res.status(500).json({
      success: false,
      error: 'Server misconfiguration. Please contact support.'
    });
  }

  try {
    const mailingListId = process.env.LOOPS_MAILING_LIST_ID || 'cmgr7n37r0go00izkhwno7xi3';
    const payload = {
      email: email.trim(),
    };

    if (mailingListId) {
      // Subscribe the contact to the requested mailing list
      payload.mailingLists = { [mailingListId]: true };
    }

    const loopsResponse = await forwardToLoops(payload, apiKey);

    if (loopsResponse.ok) {
      res.json({
        success: true,
        message: loopsResponse.body.message || 'Successfully subscribed!'
      });
    } else {
      res.status(loopsResponse.status).json({
        success: false,
        error: loopsResponse.body.message || loopsResponse.body.error || 'Failed to subscribe'
      });
    }
  } catch (error) {
    console.error('Error forwarding to Loops API:', error);

    res.status(500).json({
      success: false,
      error: 'Network error while contacting Loops. Please try again.'
    });
  }
});

async function forwardToLoops(payload, apiKey) {
  const requestBody = JSON.stringify(payload);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'Content-Length': Buffer.byteLength(requestBody)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request('https://app.loops.so/api/v1/contacts/create', options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        let parsedBody = {};
        if (responseData) {
          try {
            parsedBody = JSON.parse(responseData);
          } catch (parseError) {
            return reject(new Error('Invalid JSON response from Loops API'));
          }
        }

        resolve({
          ok: res.statusCode >= 200 && res.statusCode < 300,
          status: res.statusCode,
          body: parsedBody
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(requestBody);
    req.end();
  });
}

app.listen(PORT, () => {
  console.log(`\n🚀 Server running at http://localhost:${PORT}`);
  console.log(`📧 Loops API proxy ready at http://localhost:${PORT}/api/subscribe\n`);

  if (!process.env.LOOPS_API_KEY) {
    console.warn('⚠️  WARNING: LOOPS_API_KEY not found in .env file!');
    console.warn('   Create a .env file with your Loops API key to enable form submissions.\n');
  }
});

// Export the Express app for Vercel serverless functions
module.exports = app;
