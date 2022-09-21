import React from "react";
import "./navBar.css";
import CartWidget from "./CartWidget";
import LogoNavBar from "./LogoNavBar";

const NavBar = ({ counter }) => {
  return (
    <header>
      <div className="menu">
        <LogoNavBar />
        <div>
          <div className="menu-right">
            <ul className="navbar-list">
              <li>
                <a
                  href="https://linktr.ee/sos.tumagia"
                  className="menu-navbar-a"
                >
                  Quien soy
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sos.tumagia/?hl=es-la"
                  className="menu-navbar-a"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a href="#" className="menu-navbar-a">
                  Juegos
                </a>
              </li>
              <li>
                <a href="#" className="menu-navbar-a">
                  Material gratuito
                </a>
              </li>
              <li>
                <a href="#" className="menu-navbar-a">
                  Aprender a aprender
                </a>
              </li>
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
