import jsforce from "jsforce";

export default async function Page() {
  console.log(process.env.PASSWORD!);
  /* SOAP LOGIN */
  const conn = new jsforce.Connection({
    loginUrl: process.env.SALESFORCE_LOGIN_URL,
  });
  await conn.login(process.env.USERNAME!, process.env.PASSWORD!);

  const result = await conn.query("SELECT Id, Name FROM Account LIMIT 10");
  return (
    <div className="p-1">
      <h1 className="text-lg font-bold">Username Password Flow</h1>
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
