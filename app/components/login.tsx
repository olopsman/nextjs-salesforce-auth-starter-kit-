"use client";
// Example: A button component that redirects to the OAuth2 flow
export default function Login() {
  const handleLogin = () => {
    window.location.href = "/api/oauth2/auth"; // Redirects to the auth API route
  };

  return <button onClick={handleLogin}>Login with Salesforce</button>;
}
