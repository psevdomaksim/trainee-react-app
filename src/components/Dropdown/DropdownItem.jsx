import React from "react";
import "../../App.css";
import "./Dropdown.css";

const DropdownItem = ({ header, href }) => {
  return (
    <li>
      <a href={href}>{header}</a>
    </li>
  );
};

export default DropdownItem;
