import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/routes_consts";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup/Signup";
import { clearApiErrorActionCreator } from "../redux/ActionCreators/AuthActionCreator";

const AppRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authPage.isAuth);

  useEffect(()=>{
    dispatch(clearApiErrorActionCreator());
  },[location.pathname])

  if (location.pathname === LOGIN_ROUTE && isAuth) {
    return <Navigate to={HOME_ROUTE} />;
  }

  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path={LOGIN_ROUTE} element={<Login />} exact />
          <Route path={SIGNUP_ROUTE} element={<Signup />} exact />
        </>
      ) : (
        <Route path={HOME_ROUTE} element={<Home />} exact />
      )}

      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
export default AppRoutes;
