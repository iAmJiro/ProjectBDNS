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
      user_email: email,
      message: question,
    };
    // email used is jiro54265@gmail.com
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
            <div className=" w-8 h-8 flex-shrink-0">
              <SocialIcon
                className="transform hover:scale-110 scale-90 focus:outline-none transition duration-150 ease-in-out mr-5"
                url="https://www.instagram.com/rainbirdscakes/"
                href="https://www.instagram.com/rainbirdscakes/"
                rel="noopener noreferrer"
              />
            </div>
            <div className=" w-8 h-8 flex-shrink-0 ">
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
            What's here?{" "}
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
            Legal policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Status policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Privacy policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Terms of service
          </p>
        </div>
        <div className="mt-10 lg:mt-0">
          <label className="text-xl font-medium leading-5 text-gray-800">
            Have a question?
          </label>
          <form onSubmit={sendEmail} className="mt-4">
            <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
              <input
                type="email"
                name="user_email"
                id="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
              <input
                type="text"
                name="message"
                id="message"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800"
                placeholder="Question here"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Social;
