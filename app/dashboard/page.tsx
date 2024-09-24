import React from "react";
import { cookies } from "next/headers";
import jsforce from "jsforce";

export default async function Page() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("salesforce_access_token")?.value;
  const instanceUrl = cookieStore.get("salesforce_instance_url")?.value;
  let result;
  try {
    const conn = new jsforce.Connection({
      accessToken: accessToken,
      instanceUrl: instanceUrl,
    });
    result = await conn.query("SELECT Id, Name FROM Account LIMIT 10");
  } catch (err) {
    console.error(err);
    return <div>Failed to connect to Salesforce</div>;
  }

  return (
    <div className="p-1">
      <h1 className="text-lg font-bold">Session Flow</h1>
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
