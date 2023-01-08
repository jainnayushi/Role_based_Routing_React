import React, { useState } from "react";
import "../App.css";
import { USER_TYPE, CURRENT_USER_TYPE } from "../constants";
export let CURRENT_USER_TYPE1;

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const submit1 = (e) => {
    // e.preventDefault();
    console.log(name);
    if (name === "user") {
      localStorage.setItem("USER", USER_TYPE.NORMAL_USER);
    } else if (name === "admin") {
      localStorage.setItem("USER", USER_TYPE.ADMIN);
    } else {
      localStorage.setItem("USER", USER_TYPE.PUBLIC);
    }
    localStorage.setItem("isLogged", true);
  };
  return (
    <div>
      <div className="page">Login Page</div>
      <form className="container">
        <label>
          <b>Username</b>
        </label>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div>
          <label>
            <b>Password</b>
            <br />
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={submit1}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
