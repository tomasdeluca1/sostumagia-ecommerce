import React from "react";
import "./navBar.css";
import CartWidget from "./CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link } from "react-router-dom";

const NavBar = ({ counter }) => {
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
                <Link to="/category/1" className="menu-navbar-a">
                  Cursos presenciales
                </Link>
              </li>
              <li>
                <Link to="/category/2" className="menu-navbar-a">
                  Cursos online
                </Link>
              </li>
              <li>
                <Link to="/category/3" className="menu-navbar-a">
                  Cursos grabados
                </Link>
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
          <CartWidget contador={counter} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
