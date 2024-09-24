import Login from "./components/login";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* login to Salesfor */}
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-3xl font-bold text-center">Login to Salesforce</h1>
        <p className="text-center">
          You are about to login to Salesforce. Click the button below to
          continue.
        </p>
        <Login />
      </div>
    </div>
  );
}
