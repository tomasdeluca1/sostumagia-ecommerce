import React, { useState, useEffect } from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const isActive = ({ isActive }) =>
    isActive ? "activeOption" : "menu-navbar-a";

  const [isMenuDisplayBlock, setIsMenuDisplayBlock] = useState(false);

  return (
    <header>
      <div className={isMenuDisplayBlock ? "displayNone" : "menu"}>
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
              {/* <li>
                <NavLink
                to="/checkout"
                className={({ isActive }) =>
                isActive ? "activeOption" : "navBarOption"
              }
              >
              Checkout
              </NavLink>
            </li> */}
            </ul>
          </div>
        </div>
        <div>
          <Link to="/cart" className="cart-box">
            <CartWidget />
          </Link>
        </div>
      </div>
      <div className="menuMobile">
        <div className="fotoAgus">
          <img
            src="./../../img/fotoAgusSosTuMagia.jpg"
            className="agusJpg"
            alt=""
          />
        </div>

        <div className="barsIconBox">
          <button
            className={isMenuDisplayBlock ? "barsIcon" : "xIcon"}
            onClick={() => {
              setIsMenuDisplayBlock(!isMenuDisplayBlock);
            }}
          >
            {isMenuDisplayBlock ? (
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            ) : (
              "X"
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
