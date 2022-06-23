import React from "react";
import PropTypes from "prop-types";
import Dashboard from "../dashboard";
import App from "../../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Login({ setToken }) {
  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-logo">
          {/* <img
            src="signum-logo.png"
            height="100px"
            width="130px"
            alt="logo-here"
          ></img> */}
          <h2 className="system-name">Bill of Costs</h2>
        </div>
        <div className="username-section">
          <input
            type={"text"}
            placeholder="Username"
            className="username-field"
          ></input>
        </div>
        <div className="password-section">
          <input
            type={"password"}
            placeholder="Password"
            className="password-field"
          ></input>
        </div>
        <div className="button-section">
          <button
            className="login-button"
            onClick={() => {
              setToken("dkjfngkdsfjngj878435kjnbsf984");
              <App />;
            }}
          >
            Login
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
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
