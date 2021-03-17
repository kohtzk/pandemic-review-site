import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../services/login";

const axios = require('axios');

// axios.post('http://localhost:3000/testrequest', {"message": "success"}).then(resp => {
//     console.log(resp.data);
// });

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [accType, setAccType] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({
      username: username,
      password: password,
    }).then((response) => console.log(response));
  };
  return (
    <div className="outerForm">
      <h1 className="formItem">Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <p className="formItem"> Account type: </p>

        <div className="accTypeSelect">
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
        </div>

        <div className="formItem">
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="formItem">
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <p className="formItem">
          <button type="submit" className="submit-button">
            {" "}
            Log in{" "}
          </button>
        </p>
      </form>

      <a
        href="https://reactjs.org/docs/hello-world.html"
        target="_blank"
        className="formItem"
      >
        Forgot password?
      </a>

      <div className="formItem">
        <p>Don't have an account yet?</p>
        <a href="https://reactjs.org/docs/hello-world.html" target="_blank">
          Create account
        </a>
      </div>
    </div>
  );
}

export default Login;
