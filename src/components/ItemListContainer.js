import React from "react";

const ItemListContainer = () => {
  return (
    <div>
      <nav>
        <div className="menu-right">
          <ul className="navbar-list">
            <li>
              <a href="https://linktr.ee/sos.tumagia" className="menu-navbar-a">
                Linktree
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sos.tumagia/?hl=es-la"
                className="menu-navbar-a"
              >
                instagram
              </a>
            </li>
            <li>
              <a href="#" className="menu-navbar-a">
                Cursos
              </a>
            </li>
            <li>
              <a href="#" className="menu-navbar-a">
                Quien soy
              </a>
            </li>
            <li>
              <a href="#" className="menu-navbar-a">
                Material gratuito
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ItemListContainer;
