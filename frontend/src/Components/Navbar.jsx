import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../index.css";

export default function Navbar() {
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
    <>
      <nav className="navbar v">
        <div className="navbarfile max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="./logo-removebg-preview.png"
              className="md:h-20 h-14"
              alt="Flowbite Logo"
            />
            <span className="heading2text self-center md:text-2xl font-semibold whitespace-nowrap text-black dark:text-white ml-2">
              Rainbirds Cakes
            </span>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
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

          {/* Desktop Menu */}
          <div className="hidden md:flex md:flex-1 md:justify-end space-x-8 ">
            <Link
              to="/"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="/Forms"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Orders
            </Link>
            <Link
              to="/Gallery"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Products
            </Link>
            <Link
              to="/FAQ2"
              className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-24 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-fuchsia-300 bg-opacity-100 transition-transform duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center pl-10 items-center h-[calc(100vh-5rem)] space-y-8">
            <ul className="text-center text-3xl font-semibold text-white space-y-8">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="hover:text-gray-400 transition duration-300 block py-4 text-xl"
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
    </>
  );
}
