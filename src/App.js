import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavbarItemList from "./components/Navbar/NavbarItemList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarItemList />
        <hr/>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
