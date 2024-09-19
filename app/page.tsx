import jsforce, { OAuth2 } from "jsforce";
import Salesforce from "./components/salesforce";

export default async function Home() {
  /* OAuth2.0 */
  const oauth2 = new OAuth2({
    loginUrl: "https://test.salesforce.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: "http://localhost:3001/api/callback",
  });

  const url = oauth2.getAuthorizationUrl({
    scope: "api full web",
  });

  console.log("URL: ", url);

  return (
    <div>
      <Salesforce url={url} />
    </div>
  );
}
