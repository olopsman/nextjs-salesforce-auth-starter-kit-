import { NextResponse } from 'next/server';
import { OAuth2 } from 'jsforce';

const oauth2 = new OAuth2({
  loginUrl: process.env.SALESFORCE_LOGIN_URL,
  clientId: process.env.SALESFORCE_CLIENT_ID, // Store sensitive data in environment variables
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
  redirectUri: process.env.SALESFORCE_REDIRECT_URI,
});

export async function GET() {
  // Generate Salesforce OAuth2 authorization URL
  const authUrl = oauth2.getAuthorizationUrl({ scope: 'api id web' });
  
  // Redirect the user to Salesforce's OAuth authorization page
  return NextResponse.redirect(authUrl);
}
