import { NextResponse } from 'next/server';
import {OAuth2, Connection} from 'jsforce';
import { cookies } from 'next/headers';

const oauth2 = new OAuth2({
    loginUrl: process.env.SALESFORCE_LOGIN_URL,
    clientId: process.env.SALESFORCE_CLIENT_ID,
    clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
    redirectUri: process.env.SALESFORCE_REDIRECT_URI,
  });

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
        return NextResponse.json({ error: 'Salesforce OAuth Error: ' + error });
      }
    
      if (!code) {
        return NextResponse.json({ error: 'Authorization code not found' });
      }

      try {
        // Use the OAuth2 object to exchange the authorization code for an access token
        const conn = new Connection({ oauth2 });
        

        await conn.authorize(code)
        
        console.log(conn.accessToken);
            // Set the access token in an HTTP-only, secure cookie
        cookies().set({
            name: 'salesforce_access_token',
            value: conn.accessToken || '',  // the access token
            httpOnly: true,  // for security, the cookie is accessible only by the server
            secure: process.env.NODE_ENV === 'production',  // send cookie over HTTPS only in production
            path: '/',  // cookie is available on every route
            maxAge: 60 * 60 * 24 * 7,  // 1 week
        });
  
      // Optionally, you can store the instance URL in a cookie if needed
      cookies().set({
          name: 'salesforce_instance_url',
          value: conn.instanceUrl || '',
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          path: '/',
          maxAge: 60 * 60 * 24 * 7,  // 1 week
      });


    //   return NextResponse.json({ code });
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } catch (err) {
        return NextResponse.json({ error: 'Failed to authorize with Salesforce: ' + err });
      }
}