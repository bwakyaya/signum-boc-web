import React from "react";
import App from "../../App";
import axios from "axios";

export default function Login(props) {
  async function handleLogin(userName, password) {
    const url = "http://localhost:5000/authenticate";
    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return await axios
      .post(url, formData, config)
      .then((data) => data)
      .then((Data) => {
        if (Data.data === "Incorrect Username or Password") {
          alert("Incorrect Username or Password");
        } else if (Data.data === "Success!!!") {
          props.setToken(Data.data);
        }
      });
  }
  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-logo">
          <img
            className="logo"
            src="signum-logo.png"
            height="100px"
            width="130px"
            alt="logo-here"
          ></img>
        </div>
        <div className="login-options">
          <h2 className="system-name">Bill of Costs</h2>
          <div className="username-section">
            <input
              type={"text"}
              placeholder="Username"
              className="login-field"
              id="usernameField"
            ></input>
          </div>
          <div className="password-section">
            <input
              type={"password"}
              placeholder="Password"
              className="login-field"
              id="passwordField"
            ></input>
          </div>
          <div className="button-section">
            <button
              className="login-button"
              onClick={() => {
                const userName = document.getElementById("usernameField").value;
                const passWord = document.getElementById("passwordField").value;
                handleLogin(userName, passWord);
                props.setToken("dkjfngkdsfjngj878435kjnbsf984");
                <App />;
              }}
            >
              LOGIN
            </button>
          </div>
          <div className="account-options">
            <a
              className="sign-up-label"
              href="https://www.signumadvocates.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up
            </a>
            <a
              className="forgot-password-label"
              href="https://www.signumadvocates.com/"
              target="_blank"
              rel="noreferrer"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
