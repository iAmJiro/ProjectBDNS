import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { SocialIcon } from "react-social-icons";

const Social = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      fname: email,
      lname: question,
    };

    emailjs
      .send(
        "service_ujmuuix",
        "template_vcro2nj",
        templateParams,
        "WpHr0gPNNC_GAl9Bk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          setEmail("");
          setQuestion("");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-full mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        <div className="flex flex-col flex-shrink-0">
          <div className="text-2xl font-bold">Rainbird Cakes</div>
          <p className="text-sm leading-none mt-4">
            Copyright © 2024 Rainbird Cakes
          </p>
          <p className="text-sm leading-none mt-4">All rights reserved</p>
          <div className="flex items-center gap-x-4 mt-12">
            <div className="w-8 h-8 flex-shrink-0">
              <SocialIcon
                className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mr-5"
                url="https://www.instagram.com/rainbirdscakes/"
                rel="noopener noreferrer"
              />
            </div>
            <div className="w-8 h-8 flex-shrink-0">
              <SocialIcon
                className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mx-4"
                url="https://www.facebook.com/emmalee.rainbird"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>

        <div className="sm:ml-0 ml-8 flex-col flex">
          <h2 className="text-base font-semibold leading-4">What's here?</h2>
          <Link
            onClick={scrollToTop}
            to="/"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            Home
          </Link>
          <Link
            onClick={scrollToTop}
            to="/Forms"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            Order Here!
          </Link>
          <Link
            onClick={scrollToTop}
            to="/Gallery"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            Gallery
          </Link>

          <Link
            onClick={scrollToTop}
            to="/FAQ2"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            FAQ
          </Link>
          <Link
            onClick={scrollToTop}
            to="/Testimonials"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            Testimonials
          </Link>
        </div>

        <div className="sm:ml-0 ml-8 flex-col flex">
          <h2 className="text-base font-semibold leading-4">Support</h2>
          <Link
            onClick={scrollToTop}
            to="/Privacy"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            Privacy policy
          </Link>

          {/* <Link
            onClick={scrollToTop}
            to="/terms"
            className="hover:text-gray-500 dark:hover:text-gray-300 text-base leading-4 mt-6 cursor-pointer"
          >
            Terms of service
          </Link> */}
        </div>

        <div>
          <img
            src="./logo-removebg-preview.png"
            className="websitelogo h-48"
            alt="Rainbird Cakes Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
