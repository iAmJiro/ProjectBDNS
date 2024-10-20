import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

// Helper function for class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Forms() {
  const [agreed, setAgreed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to control the visibility of the confirmation message

  const sendEmail = (e) => {
    e.preventDefault();
    // email used is bryantcavinta24@gmail.com
    emailjs
      .sendForm(
        "service_xkswua9",
        "template_cukpgi4",
        e.target,
        "go5Pq4Cfcv3H503_h"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true); // Set the formSubmitted state to true
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="isolate bg-white">
      <div
        className="mt-96 absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-10">
          Event Cake Order Form
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please fill out the form below to request a cake for your event.
        </p>
      </motion.div>

      <motion.form
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        encType="multipart/form-data"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label
              htmlFor="fname"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fname"
                id="fname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Emma"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label
              htmlFor="lname"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lname"
                id="lname"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Rainbird"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                placeholder="Emma@email.com"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label
              htmlFor="contact"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Contact number
            </label>
            <div className="mt-2.5">
              <input
                placeholder="0220202123"
                type="tel"
                name="contact"
                id="contact"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Full address
            </label>
            <div className="mt-2.5">
              <input
                placeholder="123 Cake Street"
                type="text"
                name="address"
                id="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <label
              htmlFor="eventt"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Event type
            </label>
            <div className="mt-2.5">
              <select
                name="eventt"
                id="eventt"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding</option>
                <option>Baby Shower</option>
                <option>Gender Reveal</option>
                <option>Christening</option>
                <option>Stag / Hen Do</option>
                <option>Corporate</option>
                <option>Special Occasion</option>
                <option>Just Because</option>
                <option>Other</option>
              </select>
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <label
              htmlFor="eventd"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Event date
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                name="eventd"
                id="eventd"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <label
              htmlFor="eventth"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Event Theme
            </label>
            <div className="mt-2.5">
              <input
                placeholder="Red Everywhere!"
                type="text"
                name="eventth"
                id="eventth"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <label
              htmlFor="flavour"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Cake Flavour
            </label>
            <div className="mt-2.5">
              <input
                placeholder="Red Velvet"
                type="text"
                name="flavour"
                id="flavour"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <label
              htmlFor="tier"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Number of Tiers
            </label>
            <div className="mt-2.5">
              <input
                placeholder="3"
                type="text"
                name="tier"
                id="tier"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Additional information
            </label>
            <div className="mt-2.5">
              <textarea
                placeholder="I want a dinosaur at the top!"
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cake photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a5 5 0 00-5 5v1.757a.75.75 0 01-.22.53l-4.5 4.5a.75.75 0 001.06 1.06L8 10.561V19a3 3 0 003 3h7a3 3 0 003-3V9a5 5 0 00-5-5h-1a.75.75 0 010-1.5h1a6.5 6.5 0 016.5 6.5v10a4.5 4.5 0 01-4.5 4.5h-7A4.5 4.5 0 017 19v-8.439l-4.72 4.719a2.25 2.25 0 01-3.182-3.182l4.5-4.5a2.25 2.25 0 01.659-1.415V7a6.5 6.5 0 1113 0h-1a.75.75 0 010 1.5h1a5 5 0 00-5-5zm-2.72 8.72a.75.75 0 011.06 0L11 10.439V15a.75.75 0 01-1.5 0v-3.56l-2.22 2.22a.75.75 0 01-1.06-1.06l4-4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="attachment"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="attachment"
                      name="image"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request a quote
          </button>
        </motion.div>
      </motion.form>

      {formSubmitted && alert("Your form has been successfully submitted!")}
    </div>
  );
}

export default Forms;
