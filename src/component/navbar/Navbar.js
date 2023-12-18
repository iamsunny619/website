import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Logo</div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "text-white"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "text-white"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "text-white"
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "text-white"
            }
            onClick={closeMenu}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold text-white" : "text-white"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-white"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-white"
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-white"
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-white"
              }
              onClick={closeMenu}
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold text-white" : "text-white"
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
