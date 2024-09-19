import jsforce from "jsforce";

export default async function Page() {
  /* Username password flow */
  const conn = new jsforce.Connection({
    oauth2: {
      // you can change loginUrl to connect to sandbox or prerelease env.
      loginUrl: "https://test.salesforce.com",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: "http://localhost:3000/callback",
    },
  });
  const userInfo = await conn.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
  );
  console.log("Userinfo: ", userInfo);
  const result = await conn.query("SELECT Id, Name FROM Account LIMIT 10");
  return (
    <div className="p-1">
      <h1 className="text-lg font-bold">Username Password OAuth2 Flow</h1>
      <div>
        <h2 className="font-semibold">Accounts</h2>
        <ul className="list-disc list-inside">
          {result.records.map((record) => (
            <li key={record.Id}>{record.Name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}