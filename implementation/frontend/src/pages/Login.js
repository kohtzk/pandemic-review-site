import React, { useState } from "react";
import "./Login.css";
import loginService from "../services/login";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [accType, setAccType] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginService
      .loginUser({
        username: username,
        password: password,
        accType: accType,
      })
      .then((_) => props.history.replace("/"));
  };
  return (
    <>
      <Navbar />
      <div className="creation-inner">
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

        <div className="formItem">
          <p>Don't have an account yet?</p>
          <p>
            <Link to="/c-account-creation">Create personal account</Link>
          </p>
          <p>
            <Link to="/b-account-creation">Create business account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
