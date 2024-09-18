import { HOME_ROUTE, LOGIN_ROUTE } from "./utils/routes_consts";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];
