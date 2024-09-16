import React, { useState } from "react";
import "../../App.css";
import "./Burger.css";
import BurgerItem from "./BurgerItem";

const BurgerList = ({ navbarItems }) => {
  const [toggleBurgerBtn, setToggleBurgerBtn] = useState(false);

  const toggleBurgerButton  = () => {
  
    toggleBurgerBtn ? setToggleBurgerBtn(false) : setToggleBurgerBtn(true);
  };

  return (
    <>
      <div
        className="burger_icon"
        onClick={() => toggleBurgerButton()}
        style={
          toggleBurgerBtn
            ? { color: "white", transform: "rotate(-90deg)" }
            : { color: "#191e1e", transform: "none" }
        }
      >
        <div
          className="burger_icon_line"
          style={
            toggleBurgerBtn
              ? {
                  top: "16px",
                  transform: "rotate(-45deg) translate(-4.93px, 4.93px)",
                }
              : { top: "16px", transform: "none" }
          }
        ></div>
        <div
          className="burger_icon_line"
          style={
            toggleBurgerBtn
              ? { top: "23px", transform: "scaleX(0)" }
              : { top: "23px", transform: "none" }
          }
        ></div>
        <div
          className="burger_icon_line"
          style={
            toggleBurgerBtn
              ? {
                  top: "30px",
                  transform: "rotate(45deg) translate(-4.93px, -4.93px)",
                }
              : { top: "30px", transform: "none" }
          }
        ></div>
      </div>
      <div
        className="burger"
        style={
          toggleBurgerBtn
            ? { visibility: "visible", top: "0" }
            : { visibility: "hidden", top: "-740px" }
        }
      >
        <ul className="burger_menu">
          {navbarItems.map((item) => (
            <BurgerItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BurgerList;
