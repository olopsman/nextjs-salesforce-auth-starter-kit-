"use client";
// Example: A button component that redirects to the OAuth2 flow
export default function Login() {
  const handleLogin = () => {
    window.location.href = "/api/oauth2/auth"; // Redirects to the auth API route
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Oauth2 Web Server Flow with Salesforce
      </button>
    </div>
  );
}
