import React, { useState } from "react";
import "../../App.css";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import NavbarItem from "./NavbarItem";
import { navbarItems } from "../../db";
import BurgerList from "../Burger/BurgerList";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunkCreator } from "../../redux/ActionCreators/AuthActionCreator";

const NavbarItemList = () => {
  const dispatch = useDispatch();
  const [navbarList, setNavbarList] = useState(navbarItems);
  const isAuth = useSelector((state) => state.authPage.isAuth);

  const logout = ()=>{
    dispatch(logoutThunkCreator());
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="navbar-wrapper">
          <img alt="logo" className="logo" src={logo} />

          <ul className="nav-list">
            {navbarList?.map((navitem) => (
              <NavbarItem key={navitem.id} navitem={navitem} />
            ))}
          </ul>
          {
            isAuth ? <IoIosLogOut className="logout_btn" size="2em" onClick={()=>logout()}/> :<></>
          }
          
          <BurgerList navbarItems={navbarList} />
       
        </div>
      </div>
    </nav>
  );
};

export default NavbarItemList;
