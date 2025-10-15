/**
 * Simple Express server to proxy Loops API requests
 * This keeps your API key secure on the server side
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');

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
    console.error('LOOPS_API_KEY is not set in .env file');
    return res.status(500).json({
      success: false,
      error: 'Server configuration error. Please contact support.'
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

    // Forward request to Loops API
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    // Forward Loops response to client
    if (response.ok) {
      res.json({
        success: true,
        message: data.message || 'Successfully subscribed!'
      });
    } else {
      res.status(response.status).json({
        success: false,
        error: data.message || data.error || 'Failed to subscribe'
      });
    }
  } catch (error) {
    console.error('Error forwarding to Loops API:', error);
    res.status(500).json({
      success: false,
      error: 'Network error. Please try again.'
    });
  }
});

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
