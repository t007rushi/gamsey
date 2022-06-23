import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../context/auth-context";

export const LoginPage = () => {
  const { logInHandler } = useAuth();
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });
  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  return (
    <div className="flex-row center-it">
      <div className="form-wrap">
        <form
          className="flex-col center-it form-block"
          onSubmit={(e) => {
            e.preventDefault();
            logInHandler(logUser);
          }}
        >
          <h2 className="form-title">LOGIN</h2>
          <label htmlFor="email" className="flex-col gap-btwn form-input-txt">
            UserID/Email
            <input
              type="email"
              required
              className="form-input-box"
              placeholder="monkstar@neog.camp"
              onChange={(e) =>
                setLogUser({ ...logUser, email: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="password"
            className="flex-col gap-btwn form-input-txt"
          >
            Password
            <input
              type="password"
              placeholder="Enter password"
              required
              className="form-input-box"
              onChange={(e) =>
                setLogUser({ ...logUser, password: e.target.value })
              }
            />
          </label>
          <div className="flex-row center-it form-mid">
            <input type="checkbox" className="acc-color" id="remember-me" />
            <h3>Remember me</h3>
            <p className="form-cond">Forgot your Password?</p>
          </div>
          <button type="submit" className="btn primary-btn">
            LOGIN
          </button>
          <button
            className="btn card-btn guest-log-btn"
            onClick={(e) => {
              e.preventDefault();
              logInHandler(guestUser);
            }}
          >
            LOGIN as GUEST
          </button>
          <Link to="/signup" className="newAcc">
            <h2>Create New Account</h2>
          </Link>
        </form>
      </div>
    </div>
  );
};
