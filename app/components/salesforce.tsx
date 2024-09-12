"use client";

import { useRouter } from "next/navigation";

export default function Salesforce(props: { url: string }) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push(props.url)}>
      Salesforce
    </button>
  );
}
