import React from "react";
import "../../App.css";
import "./Navbar.css";
import DropdownList from "../Dropdown/DropdownList";

const NavbarItem = ({ navitem }) => {
  return (
    <li>
      <span className="nav-link"> {navitem.header}</span>
      <DropdownList dropdownItems={navitem.dropdownItems} />
    </li>
  );
};

export default NavbarItem;
