import React, { useContext, useState } from "react";
import "./Login.css";
import { StoreContext } from "../..";
import { loginAC } from "../../redux/Action Creators/AuthAC";
const Login = (props) => {
  const store = useContext(StoreContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setErrorMsg("");
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const login = (e) => {
    if (username !== "" && password !== "") {
      store.dispatch(loginAC(username, password));
    } else {
      setErrorMsg(true);
    }
    e.preventDefault();
  };

  store.subscribe(() => {
    setErrorMsg(store.getState().authPage.errorMessage);
  });

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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
