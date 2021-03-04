import React, { useState } from "react";
import { loginUser } from "../services/login";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [accType, setAccType] = useState();
  const handleSubmit = async (e) => {
    await loginUser({
      username: username,
      password: password,
    }).then((response) => console.log(response));
  };
  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <p> Account type: </p>
        <p> Business </p>
        <input
          type="radio"
          value="business"
          name="accType"
          onChange={(e) => setAccType(e.target.value)}
        />
        <p> Personal </p>
        <input
          type="radio"
          value="personal"
          name="accType"
          onChange={(e) => setAccType(e.target.value)}
        />

        <p>
          Username:
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </p>
        <p>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit"> Log in </button>
        </p>
      </form>

      <a href="https://reactjs.org/docs/hello-world.html" target="_blank">
        Forgot password?
      </a>

      <p>Don't have an account yet?</p>
      <a href="https://reactjs.org/docs/hello-world.html" target="_blank">
        Create account
      </a>
    </div>
  );
}

export default Login;
