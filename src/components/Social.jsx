import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Social() {
  return (
    <div className="relative bg-violet-200 pb-12 pt-4 sm:pb-12 md:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-center sm:mb-10 lg:mb-0 md:mb-0 sm:overscroll-none">
        <img
          className="h-30 w-32 object-contain"
          src="./cake.png"
          alt="Image"
        />
        <div className="text-center text-lg font-semibold leading-8 text-white md:mx-auto lg:ml-48 mt-5">
          <h2>Follow us on our social media platforms</h2>
          <div className="flex justify-center items-center gap-x-8 mt-2">
            <a
              href="https://www.instagram.com/rainbirdscakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 focus:outline-none transition duration-150 ease-in-out"
            >
              <img
                className="ml-auto items-center flex-row col-span-2 max-h-10 w-50% object-contain lg:col-span-1"
                src="./Instagram_logo.png"
                alt="Instagram"
                width={158}
                height={48}
              />
            </a>
            <div className="flex justify-center items-center flex-col">
              <img
                className="h-20 w-none mr-2 object-contain"
                src="./logo-removebg-preview.png"
                alt="Logo"
              />
              <div className="text-white text-sm mt-2">
                ©2024 Rainbird Cakes
              </div>
            </div>
            <a
              href="https://www.facebook.com/groups/1522565807903275/user/100094667072997/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 focus:outline-none transition duration-150 ease-in-out"
            >
              <img
                className="items-center flex-row col-span-2 max-h-12 w-50% object-contain lg:col-span-1"
                src="./facebook_logo.png"
                alt="Facebook"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white flex justify-around py-4 md:relative md:flex-col md:items-center md:w-50% md:bg-transparent md:text-black md:mr-0 md:ml-auto ">
          <Link
            to="/ProjectBDNS"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            Home
          </Link>
          <Link
            to="/ProjectBDNS/Privacy"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            Privacy
          </Link>
          <Link
            to="/ProjectBDNS/TermsAndCondition"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            T&C
          </Link>
        </div>
      </div>
    </div>
  );
}
