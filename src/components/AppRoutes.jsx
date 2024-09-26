import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/routes_consts";
import { useSelector } from "react-redux";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";

const AppRoutes = () => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.authPage.isAuth);

  if (location.pathname === LOGIN_ROUTE && isAuth) {
    return <Navigate to={HOME_ROUTE} />;
  }

  return (
    <Routes>
      {!isAuth ? (
        <Route path={LOGIN_ROUTE} element={<Login />} exact />
      ) : (
        <Route path={HOME_ROUTE} element={<Home />} exact />
      )}

      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
export default AppRoutes;
