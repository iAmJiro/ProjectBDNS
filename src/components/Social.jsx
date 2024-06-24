import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Social() {
  return (
    <div className="relative bg-black pt-3 pb-16 sm:py-12 md:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-center sm:mb-10 lg:mb-0 md:mb-0 sm:overscroll-none">
        <img
          className="h-12 w-17 object-contain opacity-0 sm:opacity-100 sm:h-30 sm:w-32 md:order-1 md:mr-10"
          src="./images/"
          alt="Logo"
        />
        <div className="text-center text-lg font-semibold leading-8 text-white lg:items-center mb-2 md:ml-44 lg:mt-5 md:order-2">
          <h2>Here are some of my social media accounts</h2>
          <div className="justify-center float-start gap-x-6 mt-10 sm:items-center sm:justify-center lg:items-center sm:ml-10">
            <SocialIcon
              className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mx-4 md:mr-14"
              url="www.instagram.com/jiro.bryyyant"
              href="https://www.instagram.com/jiro.bryyyant/"
              rel="noopener noreferrer"
            />
            <SocialIcon
              className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mx-4 md:mr-14"
              url="https://www.facebook.com/bryantjei.cavinta.7/"
              href="https://www.facebook.com/bryantjei.cavinta.7/"
              rel="noopener noreferrer"
            />
            <SocialIcon
              className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mx-4 md:mr-14"
              url="https://www.discord.com/"
              href="https://www.discordapp.com/users/560529551386476550"
              rel="noopener noreferrer"
            />
            <SocialIcon
              className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mx-4 md:mr-14"
              url="https://www.github.com/"
              href="https://github.com/iAmJiro"
              rel="noopener noreferrer"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white flex justify-around py-4 md:relative md:flex-col md:items-center md:w-50% md:bg-transparent md:text-black md:mr-0 md:ml-auto md:order-3">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            Contact
          </Link>
          <Link
            to="/Projects"
            className="text-white hover:text-gray-300 transition duration-150 ease-in-out mt-2"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
