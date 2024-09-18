import React, { useContext, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/routes_consts";
import { StoreContext } from "..";
import { authRoutes, publicRoutes } from "../routes";

const AppRoutes = () => {
  const store = useContext(StoreContext);
  const [isAuth, setIsAuth] = useState();

  const location = useLocation();

  store.subscribe(() => {
    setIsAuth(store.getState().authPage.isAuth);
  });

  if (location.pathname === LOGIN_ROUTE && isAuth) {
    return <Navigate to={HOME_ROUTE} />;
  }

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
export default AppRoutes;
