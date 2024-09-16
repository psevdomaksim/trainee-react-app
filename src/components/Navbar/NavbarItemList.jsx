import React, { useState } from "react";
import "../../App.css";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import NavbarItem from "./NavbarItem";
import { navbarItems } from "../../db";
import BurgerList from "../Burger/BurgerList";

const NavbarItemList = () => {
  const [navbarList, setNavbarList] = useState(navbarItems);

  return (
    <nav>
      <div className="wrapper">
        <div className="navbar-wrapper">
          <img className="logo" src={logo} />

          <ul className="nav-list">
            {navbarList?.map((navitem) => (
              <NavbarItem key={navitem.id} navitem={navitem} />
            ))}
          </ul>
          <BurgerList navbarItems={navbarItems} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarItemList;
