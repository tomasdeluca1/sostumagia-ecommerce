import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({}) => {
  const isActive = ({ isActive }) =>
    isActive ? "activeOption" : "menu-navbar-a";

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
                <NavLink
                  to="/category/presenciales"
                  className={({ isActive }) =>
                    isActive ? "activeOption" : "navBarOption"
                  }
                >
                  Cursos presenciales
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/online"
                  className={({ isActive }) =>
                    isActive ? "activeOption" : "navBarOption"
                  }
                >
                  Cursos online
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/grabados"
                  className={({ isActive }) =>
                    isActive ? "activeOption" : "navBarOption"
                  }
                >
                  Cursos grabados
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/checkout"
                  className={({ isActive }) =>
                    isActive ? "activeOption" : "navBarOption"
                  }
                >
                  Checkout
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
