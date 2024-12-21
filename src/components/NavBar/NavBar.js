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
      <nav className="hidden lg:flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-[90rem] mx-auto">
        <Link to="/" className="flex-shrink-0">
          <LogoNavBar className="w-24 sm:w-28 lg:w-32 h-auto" />
        </Link>

        <ul className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat) => (
            <li key={cat.id}>
              <NavLink
                to={`/${cat.category}`}
                className={({ isActive }) =>
                  `px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#fed5d5] text-[#cd5c5c] font-semibold"
                      : "text-[#fed5d5] hover:bg-[#fed5d5]/10"
                  }`
                }
              >
                <span dangerouslySetInnerHTML={{ __html: cat.categoryTitle }} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <div className="flex justify-between items-center px-4 py-2 sm:py-3">
          <Link to="/" className="flex-shrink-0">
            <LogoNavBar className="w-24 sm:w-28 lg:w-32 h-auto" />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* <Link to="/cart" className="text-[#fed5d5]">
              <CartWidget />
            </Link> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#fed5d5] p-1.5 sm:p-2 hover:bg-[#fed5d5]/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? "times" : "bars"}
                className="text-xl sm:text-2xl"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-[85%] sm:w-[75%] bg-[#cd5c5c] transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4 sm:p-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block mb-6 sm:mb-8"
            >
              <LogoNavBar className="w-24 sm:w-32 h-auto mx-auto" />
            </Link>

            <ul className="space-y-3 sm:space-y-4">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <NavLink
                    to={`/${cat.category}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-md text-center text-sm sm:text-base transition-colors duration-200 ${
                        isActive
                          ? "bg-[#fed5d5] text-[#cd5c5c] font-semibold"
                          : "text-[#fed5d5] hover:bg-[#fed5d5]/10"
                      }`
                    }
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: cat.categoryTitle }}
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
