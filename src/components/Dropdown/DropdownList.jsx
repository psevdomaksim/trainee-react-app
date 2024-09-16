import React from "react";
import "../../App.css";
import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

const DropdownList = ({ dropdownItems }) => {
  return (
    <ul className="dropdown-content">
      {dropdownItems.map((item) => (
        <DropdownItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default DropdownList;
