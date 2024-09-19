import React from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useState } from "react";
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
        "service_ujmuuix", // Service ID
        "template_vcro2nj", // Template ID
        templateParams,
        "WpHr0gPNNC_GAl9Bk" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          setEmail(""); // Reset email input
          setQuestion(""); // Reset question input
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };
  //used jiro54265@gmail.com
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        <div className="flex flex-col flex-shrink-0">
          <div className="text-2xl font-bold">Rainbird Cakes</div>
          <p className="text-sm leading-none text-gray-800 mt-4">
            Copyright © 2024 Rainbird Cakes
          </p>
          <p className="text-sm leading-none text-gray-800 mt-4">
            All rights reserved
          </p>
          <div className="flex items-center gap-x-4 mt-12">
            <div className="w-8 h-8 flex-shrink-0">
              <SocialIcon
                className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mr-5"
                url="https://www.instagram.com/rainbirdscakes/"
                href="https://www.instagram.com/rainbirdscakes/"
                rel="noopener noreferrer"
              />
            </div>
            <div className="w-8 h-8 flex-shrink-0">
              <SocialIcon
                className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mx-4"
                url="https://www.facebook.com/emmalee.rainbird"
                href="https://www.facebook.com/emmalee.rainbird"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>

        <div className="sm:ml-0 ml-8 flex-col flex">
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            What's here?
          </h2>
          <Link
            onClick={scrollToTop}
            to="/"
            className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"
          >
            Home
          </Link>
          <Link
            onClick={scrollToTop}
            to="/Forms"
            className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"
          >
            Order Here!
          </Link>
          <Link
            onClick={scrollToTop}
            to="/Gallery"
            className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"
          >
            Gallery
          </Link>

          <Link
            onClick={scrollToTop}
            to="/Testimonials"
            className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"
          >
            Testimonials
          </Link>
        </div>

        <div>
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            Support
          </h2>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Privacy policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Terms of service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
