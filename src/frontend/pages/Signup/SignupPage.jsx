import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./signup.css";

export const SignupPage = () => {
  const { signUpHandler } = useAuth();
  const [signUser, setSignUser] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex-row center-it">
      <div className=" form-wrap">
        <form
          className="flex-col center-it form-block"
          onSubmit={(e) => {
            e.preventDefault();
            signUpHandler(signUser);
          }}
        >
          <h2 className="form-title">SIGN UP</h2>
          <label htmlFor="Name" className="flex-col gap-btwn form-input-txt">
            First Name
            <input
              type="text"
              className="form-input-box"
              required
              onChange={(e) =>
                setSignUser({ ...signUser, first: e.target.value })
              }
            />
          </label>
          <label htmlFor="Name" className="flex-col gap-btwn form-input-txt">
            Last Name
            <input
              type="text"
              className="form-input-box"
              required
              onChange={(e) =>
                setSignUser({ ...signUser, last: e.target.value })
              }
            />
          </label>
          <label htmlFor="email" className="flex-col gap-btwn form-input-txt">
            Email
            <input
              type="email"
              className="form-input-box"
              required
              placeholder="test@gmail.com"
              onChange={(e) =>
                setSignUser({ ...signUser, email: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="password"
            required
            className="flex-col gap-btwn form-input-txt"
          >
            Password
            <input
              type="password"
              required
              className="form-input-box"
              onChange={(e) =>
                setSignUser({ ...signUser, password: e.target.value })
              }
            />
          </label>
          <div className="flex-row center-it form-mid">
            <input
              type="checkbox"
              className="acc-color"
              id="remember-me"
              required
            />
            <p className="form-text">
              By continuing, you agree to Swift-UI <br></br>
              <span className="form-cond"> Terms of Use </span> and
              <span className="form-cond"> Privacy Policy </span>
            </p>
          </div>
          <button type="submit" className="btn primary-btn">
            SIGN-UP
          </button>
          <div className="flex-row">
            <p>Already have an account?</p>
            <Link to="/login" className="form-cond">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
