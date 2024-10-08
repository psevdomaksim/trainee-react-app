import React, { useState } from "react";
import "./Signup.css";
import {
  apiErrorActionCreator,
  signupThunkCreator,
} from "../../redux/ActionCreators/AuthActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ROUTE } from "../../utils/routes_consts";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatedPassword: "",
    firstname: "",
    lastname: "",
    age: "",
  });
  const errors = useSelector((state) => state.authPage.errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signup = (e) => {
    e.preventDefault();
    dispatch(
      signupThunkCreator(
        formData.username,
        formData.password,
        formData.repeatedPassword,
        formData.firstname,
        formData.lastname,
        +formData.age
      )
    );
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="repeatedPassword">Repeat Password</label>
          <input
            type="password"
            name="repeatedPassword"
            value={formData.repeatedPassword}
            onChange={handleChange}
            placeholder="Repeat password"
          />
          {errors.repeatedPassword && (
            <span className="error">{errors.repeatedPassword}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter first name"
          />
          {errors.firstname && (
            <span className="error">{errors.firstname}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter last name"
          />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <span>
          {" "}
          Have an account?
          <Link to={LOGIN_ROUTE}>Log in!</Link>
        </span>

        <button
          type="submit"
          className="signup-button"
          onClick={(e) => signup(e)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
