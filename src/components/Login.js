import React from "react";
function Login({ setLoggedIn, loggedIn }) {
  return (
    <>
      <p>login</p>
      <button onClick={() => setLoggedIn((cur) => !cur)}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </>
  );
}
export default Login;