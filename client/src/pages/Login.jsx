import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../action/auth";

import "./Login.css";
import "../App.css";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth({ username, password }, navigate);
  };

  return (
    <div className="Login">
      <h2 style={{ margin: "2rem 0" }}>News Letter Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <center>
          <button
            type="submit"
            className="btn-1"
            style={{ padding: "0.5rem 2rem" }}
          >
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
