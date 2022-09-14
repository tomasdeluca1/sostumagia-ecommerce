import React from "react";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

// class NavBar extends component {}
const NavBar = () => {
  return (
    <header>
      <div className="menu">
        <div>
          <a href="#">
            <img src="../../sos-tu-magia.png" className="logo-img-header"></img>
          </a>
        </div>
        <div>
          <ItemListContainer />
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
