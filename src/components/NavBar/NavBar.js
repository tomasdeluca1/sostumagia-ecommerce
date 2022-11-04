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
          isMenuDisplayBlock ? { marginLeft: "0" } : { marginLeft: "-76%" }
        }
      >
        <Link
          to="/"
          onClick={() => {
            setIsMenuDisplayBlock(false);
          }}
        >
          <img
            src="./../../img/fotoAgustinillis.jpg"
            className="agusJpgMobile"
            alt=""
          />
          <LogoNavBar className={"logo-img-header"} />
        </Link>
        <div>
          <div className="menu-right">
            <ul className="navbar-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <NavLink
                    to={`/category/${cat.categoryId}`}
                    className={isActive}
                    onClick={() => {
                      setIsMenuDisplayBlock(false);
                    }}
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
            <CartWidget className={"cart-icon"} />
          </Link>
        </div>
      </div>
      <div className="menuMobile">
        <Link to="/" className="logoBoxMobile">
          <LogoNavBar className={"logoMobile"} />
        </Link>

        <div className="cartBarsFlex">
          <Link to="/cart" className="barsIconBox">
            <CartWidget className={"cartIconMobile"} />
          </Link>

          <div className="barsIconBox">
            <button
              className={isMenuDisplayBlock ? "xIcon" : "barsIcon"}
              onClick={() => {
                setIsMenuDisplayBlock(!isMenuDisplayBlock);
              }}
            >
              {isMenuDisplayBlock ? (
                "x"
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
