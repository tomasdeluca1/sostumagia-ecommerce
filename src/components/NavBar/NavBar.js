import React from "react";
import "./navBar.css";
import CartWidget from "./CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({}) => {
  return (
    <header>
      <div className="menu">
        <Link to="/">
          <LogoNavBar />
        </Link>
        <div>
          <div className="menu-right">
            <ul className="navbar-list">
              <li>
                <NavLink to="/category/1" className="menu-navbar-a">
                  Cursos presenciales
                </NavLink>
              </li>
              <li>
                <NavLink to="/category/2" className="menu-navbar-a">
                  Cursos online
                </NavLink>
              </li>
              <li>
                <NavLink to="/category/3" className="menu-navbar-a">
                  Cursos grabados
                </NavLink>
              </li>
              {/* <li>
                <a href="#" className="menu-navbar-a">
                  Material gratuito
                </a>
              </li>
              <li>
                <a href="#" className="menu-navbar-a">
                  Aprender a aprender
                </a> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
        <div>
          <Link to="/cart" className="cart-box">
            <CartWidget />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
