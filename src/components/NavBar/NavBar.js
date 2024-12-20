import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    {
      id: "1",
      categoryTitle: "Tratamiento Psicopedagógico",
      category: "tratamiento-psicopedagogico",
    },
    {
      id: "2",
      categoryTitle: "Supervisiones",
      category: "supervisiones",
    },
    {
      id: "3",
      categoryTitle: "Cursos",
      category: "cursos",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#cd5c5c] shadow-lg">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex-shrink-0">
          <LogoNavBar className="w-32 h-auto" />
        </Link>

        <ul className="flex items-center space-x-8">
          {categories.map((cat) => (
            <li key={cat.id}>
              <NavLink
                to={`/${cat.category}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-[#fed5d5] text-[#cd5c5c] font-semibold"
                      : "text-[#fed5d5] hover:bg-[#fed5d5]/10"
                  }`
                }
              >
                {cat.categoryTitle}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <Link
          to="/cart"
          className="flex items-center px-4 py-2 rounded-md border border-[#fed5d5] text-[#fed5d5] hover:bg-[#fed5d5]/10 transition-colors duration-200"
        >
          <CartWidget />
        </Link> */}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <Link to="/" className="flex-shrink-0">
            <LogoNavBar className="w-20 h-auto" />
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-[#fed5d5]">
              <CartWidget />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#fed5d5] p-2"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? "times" : "bars"}
                className="text-2xl"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-4/5 bg-[#cd5c5c] transition duration-200 ease-in-out z-50`}
        >
          <div className="p-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block mb-8"
            >
              <LogoNavBar className="w-32 h-auto mx-auto" />
            </Link>

            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <NavLink
                    to={`/${cat.category}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md text-center transition-colors duration-200 ${
                        isActive
                          ? "bg-[#fed5d5] text-[#cd5c5c] font-semibold"
                          : "text-[#fed5d5] hover:bg-[#fed5d5]/10"
                      }`
                    }
                  >
                    {cat.categoryTitle}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
