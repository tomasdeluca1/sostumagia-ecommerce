import React, { useState } from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCategories } from "../../services/firebase/firestore";
import { useAsync } from "../../Hooks/useAsync";

const NavBar = () => {
  const isActive = ({ isActive }) =>
    isActive ? "activeOption" : "navBarOption";

  const [isMenuDisplayBlock, setIsMenuDisplayBlock] = useState(false);

  const { data: categories } = useAsync(() => getCategories());

  return (
    <header>
      <div
        className="menu"
        style={
          isMenuDisplayBlock ? { marginLeft: "0" } : { marginLeft: "-50%" }
        }
      >
        <Link to="/">
          <LogoNavBar />
        </Link>
        <div>
          <div className="menu-right">
            <ul className="navbar-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <NavLink
                    to={`/category/${cat.categoryId}`}
                    className={isActive}
                  >
                    {cat.categoryTitle}
                  </NavLink>
                </li>
              ))}
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
        <Link to="/" className="fotoAgus">
          <img
            src="./../../img/fotoAgustinillis.jpg"
            className="agusJpg"
            alt=""
          />
        </Link>

        <div className="barsIconBox">
          <button
            className={isMenuDisplayBlock ? "xIcon" : "barsIcon"}
            onClick={() => {
              setIsMenuDisplayBlock(!isMenuDisplayBlock);
            }}
          >
            {isMenuDisplayBlock ? (
              "X"
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
