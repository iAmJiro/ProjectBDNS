import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // cant scroll
      document.body.style.overflow = "hidden";
    } else {
      // can scroll
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="navbar bg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img
            src="./logo-removebg-preview.png"
            className="websitelogo h-20"
            alt="Rainbird Cakes Logo"
          />
          <span className="websitename self-center text-2xl font-semibold whitespace-nowrap text-white ml-2">
            Rainbirds Cakes
          </span>
        </div>

        <button
          className="md:hidden ml-auto text-white focus:outline-none hamburger-menu"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* desktop nav */}
        <div className="hidden md:flex md:flex-1 md:justify-center space-x-8">
          <Link
            to="/"
            className="block py-2 px-3 text-white rounded hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-3 text-white rounded hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/Forms"
            className="block py-2 px-3 text-white rounded hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Orders
          </Link>
          <Link
            to="/Gallery"
            className="block py-2 px-3 text-white rounded hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Products
          </Link>
          <Link
            to="/FAQ2"
            className="block py-2 px-3 text-white rounded hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`fixed top-24 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-fuchsia-300 bg-opacity-100 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row pl-10 items-center justify-start h-[calc(100vh-5rem)] space-y-8">
          <ul className="text-center text-3xl font-semibold text-white space-y-8">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition duration-300 block py-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition duration-300 block py-4"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Forms"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition duration-300 block py-4"
              >
                Forms
              </Link>
            </li>
            <li>
              <Link
                to="/Gallery"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition duration-300 block py-4"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/FAQ2"
                onClick={toggleMenu}
                className="hover:text-gray-400 transition duration-300 block py-4"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
