import React, { useState } from "react";
import "./Login.css";
import { apiErrorActionCreator, loginActionCreator } from "../../redux/ActionCreators/AuthActionCreator";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errorMsg = useSelector((state) => state.authPage.errorMessage);
 
  const handleUsername = (e) => {
    dispatch(apiErrorActionCreator(""));
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    dispatch(apiErrorActionCreator(""));
    setPassword(e.target.value);
  };

  const login = (e) => {
    if (username !== "" && password !== "") {
      dispatch(loginActionCreator(username, password));
    } else {
      dispatch(apiErrorActionCreator("Inputs should not be empty"));
    }
    e.preventDefault();
  };

  return (
    <>
      <div className="login-wrapper">
        <h1>Login</h1>
        <form className="login-form">
          <div className="input-block">
            <p>Username </p>
            <input
              type="text"
              className="login-input"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => handleUsername(e)}
            ></input>
          </div>
          <div className="input-block">
            <p>Password</p>
            <input
              type="password"
              className="login-input"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => handlePassword(e)}
            ></input>
          </div>
          <b style={{ color: "red" }}>{errorMsg}</b>
          <button className="login-button" onClick={(e) => login(e)}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
