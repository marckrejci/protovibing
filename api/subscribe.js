/**
 * Vercel Serverless Function for Loops API integration
 * This handles email subscription requests from the frontend
 */

const https = require('https');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

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
      res.status(200).json({
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
};

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
