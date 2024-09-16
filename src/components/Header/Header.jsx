import React from "react";
import "../../App.css";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1 className="header-h1">Projects</h1>
        <p className="header-description">
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
      </div>
    </header>
  );
};

export default Header;
