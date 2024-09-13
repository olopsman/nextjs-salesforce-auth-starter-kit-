import { OAuth2 } from "jsforce";
import Salesforce from "./components/salesforce";

export default async function Home() {
  /* SOAP LOGIN */
  // const conn = new jsforce.Connection({
  //   loginUrl: "https://test.salesforce.com",
  // });
  // await conn.login(
  //    process.env.USERNAME,
  //    process.env.PASSWORD
  // );

  // const result = await conn.query("SELECT Id, Name FROM Account");
  // console.log(result);

  /* Username password flow */
  // const conn = new jsforce.Connection({
  //   oauth2: {
  //     // you can change loginUrl to connect to sandbox or prerelease env.
  //     loginUrl: "https://test.salesforce.com",
  //     clientId: process.env.CLIENT_ID,
  //     clientSecret: process.env.CLIENT_SECRET,
  //     redirectUri: "http://localhost:3000/callback",
  //   },
  // });
  // const userInfo = await conn.login(
  //    process.env.USERNAME,
  //   process.env.PASSWORD
  // );
  // console.log("Userinfo: ", userInfo);
  // console.log("User ID: " + userInfo.id);
  // console.log("Org ID: " + userInfo.organizationId);
  // const result = await conn.query("SELECT Id, Name FROM Account");
  // console.log(result);

  /* OAuth2.0 */
  const oauth2 = new OAuth2({
    loginUrl: "https://test.salesforce.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: "http://localhost:3000/callback",
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
