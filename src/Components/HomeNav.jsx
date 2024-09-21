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
      // Disable scrolling by setting overflow to hidden
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect when the component unmounts
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
            alt="Flowbite Logo"
          />
          <span className="websitename self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">
            Rainbird Cakes
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

        <div className="hidden md:flex md:flex-1 md:justify-center space-x-8">
          <Link
            to="/"
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/Forms"
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Orders
          </Link>
          <Link
            to="/Gallery"
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Gallery
          </Link>
          <Link
            to="/FAQ"
            className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } w-full bg-gray-700`}
      >
        <ul className="flex flex-col font-medium p-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Forms"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Forms
            </Link>
          </li>
          <li>
            <Link
              to="/Gallery"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/FAQ"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNav;
