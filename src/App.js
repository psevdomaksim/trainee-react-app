import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavbarItemList from "./components/Navbar/NavbarItemList";
import { useDispatch, useSelector } from "react-redux";
import { setLoginThunkCreator } from "./redux/ActionCreators/AuthActionCreator";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoginThunkCreator());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarItemList />
        <hr />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
