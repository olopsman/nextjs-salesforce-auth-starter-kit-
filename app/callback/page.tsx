"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

async function callbackHandler(code: string) {
  try {
    const req = await fetch("http://localhost:3000/api/callback", {
      method: "POST",
      body: JSON.stringify({ code: code }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (req && req.status === 200) {
      return redirect("/dashboard/host");
    } else {
      console.log("req not 200", req);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

export default function Page() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      callbackHandler(code);
    }
  }, [code]);

  return <div>Callback</div>;
}
