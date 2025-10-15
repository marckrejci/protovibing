# Deployment Guide for Vercel

## Required Environment Variables

Make sure the following environment variables are set in your Vercel project settings:

1. **LOOPS_API_KEY** (required)
   - Get your API key from: https://app.loops.so/settings?page=api
   - This is required for the email subscription to work

2. **LOOPS_MAILING_LIST_ID** (optional)
   - Default: `cmgr7n37r0go00izkhwno7xi3`
   - The ID of the mailing list to add subscribers to

## Setting Environment Variables in Vercel

### Via Vercel Dashboard:
1. Go to your project settings: https://vercel.com/[your-username]/protovibing/settings/environment-variables
2. Add each variable:
   - Name: `LOOPS_API_KEY`
   - Value: Your Loops API key
   - Environment: Production, Preview, Development (check all that apply)
3. Click "Save"

### Via Vercel CLI:
```bash
vercel env add LOOPS_API_KEY
# Paste your API key when prompted
```

## Deployment

The project is configured to deploy automatically on push to the main branch.

### Manual Deployment:
```bash
vercel --prod
```

## How It Works

1. User submits email via form on [index.html](index.html)
2. Frontend sends POST request to `/api/subscribe`
3. Vercel routes request to serverless function at [api/subscribe.js](api/subscribe.js)
4. Serverless function validates email and forwards to Loops API
5. Response is sent back to user

## Testing the Production Endpoint

After deployment, test the endpoint:

```bash
curl -X POST https://protovibing.vercel.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Expected response on success:
```json
{
  "success": true,
  "message": "Successfully subscribed!"
}
```

## Troubleshooting

### "Server misconfiguration" error
- Check that `LOOPS_API_KEY` is set in Vercel environment variables
- Redeploy after setting environment variables

### "Failed to subscribe" error
- Verify your Loops API key is valid
- Check Vercel function logs for detailed error messages

### CORS errors
- The serverless function includes proper CORS headers
- Should work from any domain
