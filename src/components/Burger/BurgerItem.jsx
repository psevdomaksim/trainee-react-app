import React, { useState } from "react";
import "../../App.css";
import "./Burger.css";
import DropdownItem from "../Dropdown/DropdownItem";

const BurgerItem = ({ header, href, dropdownItems }) => {
  const [toggleBurgerDropdown, setToggleBurgerDropdown] = useState(false);

  const toggleBurger = () => {
    toggleBurgerDropdown
      ? setToggleBurgerDropdown(false)
      : setToggleBurgerDropdown(true);
  };

  return (
    <li>
      <span className="burger-navlink" onClick={() => toggleBurger()}>
        {header}
        <span
          className="burger-arrow"
          style={
            toggleBurgerDropdown
              ? { transform: "rotate(45deg) translate(-5px,5px) scale(1)" }
              : { transform: "rotate(45deg) translate(5px, 15px) scale(-1)" }
          }
        ></span>
      </span>
      <ul
        className="burger-dropdown"
        style={
          toggleBurgerDropdown ? { display: "block" } : { display: "none" }
        }
      >
        {dropdownItems.map((item) => (
          <DropdownItem key={item.id} {...item} />
        ))}
      </ul>
    </li>
  );
};

export default BurgerItem;
