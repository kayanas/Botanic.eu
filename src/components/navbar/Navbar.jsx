import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatBotanic">What is Botanic?</a>
    </p>
    <p>
      <a href="#products">Products</a>
    </p>
    <p>
      <a href="#blogs">Blogs</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="botanic__navbar">
      <div className="botanic__navbar-links">
        <div className="botanic__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="botanic__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="botanic__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="botanic__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="botanic__navbar-menu_container scale-up-center">
            <div className="botanic__navbar-menu_container-links">
              <Menu />
              <div className="botanic__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
