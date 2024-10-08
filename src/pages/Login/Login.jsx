import React, { useState } from "react";
import "./Login.css";
import {
  apiErrorActionCreator,
  loginThunkCreator,
} from "../../redux/ActionCreators/AuthActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SIGNUP_ROUTE } from "../../utils/routes_consts";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((state) => state.authPage.errors || {});

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(loginThunkCreator(username, password));
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => handleUsername(e)}
            placeholder="Enter your username"
            data-testid="username-input"
            required
          />
            {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => handlePassword(e)}
            placeholder="Enter your password"
            data-testid="password-input"
            required
          />
           {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <span>
          {" "}
          Have no account?
          <Link to={SIGNUP_ROUTE}>Sign up!</Link>
        </span>
        <button
          type="submit"
          className="login-button"
          data-testid="login-button"
          onClick={(e) => login(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
