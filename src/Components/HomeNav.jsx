import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <>
      <nav className="navbar bg">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto ">
          {/* Logo and text */}
          <div className="flex items-center">
            <img
              src="./logo-removebg-preview.png"
              className="h-20"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">
              Rainbird Cakes
            </span>
          </div>

          {/* Navigation links */}
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
              to="/Menu"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Menu
            </Link>
            <Link
              to="/FAQ"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className="items-center justify-between hidden w-full md:hidden"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/ProjectBDNS/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ProjectBDNS/Forms"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Forms
              </Link>
            </li>
            <li>
              <Link
                to="/ProjectBDNS/Gallery"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/ProjectBDNS/FAQ"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default HomeNav;
