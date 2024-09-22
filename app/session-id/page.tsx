import jsforce from "jsforce";

export default async function Page() {
  const conn = new jsforce.Connection({
    instanceUrl: process.env.INSTANCE_URL,
    serverUrl: process.env.SERVER_URL,
    sessionId: process.env.SESSION_ID,
  });

  //system.debug(userInfo.getSessionId());
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
