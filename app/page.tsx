import Link from "next/link";
import Login from "./components/login";
export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* login to Salesfor */}
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-3xl font-bold text-center">
          jsforce Authentication Connection
        </h1>
        <p className="text-center">
          This is a simple example of how to authenticate with Salesforce using
          jsforce.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <Link href="https://jsforce.github.io/document/">
              Documentation
            </Link>
          </li>
          <li>
            <Link href="/username-password">Username Password Login</Link>
          </li>
          <li>
            <Link href="/username-password">
              Username and Password Login (OAuth2 Resource Owner Password
              Credential)
            </Link>
          </li>
          <li>
            {" "}
            <Login />
          </li>
        </ul>
      </div>
    </div>
  );
}
