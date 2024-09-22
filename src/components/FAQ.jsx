import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Navbar />
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
      <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 font-semibold text-gray-800 dark:text-white">
          FAQ's
        </h1>
        <div className="lg:w-8/12 w-full mx-auto">
          {/* <!-- Question 1 --> */}
          <motion.hr
            className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q1.
                  </span>
                  Do you deliver cakes?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className={"transform " + (open ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    Currently, we offer pick-up only for all orders. Our cakes
                    can be picked up from our Wairarapa location.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <!-- Question 2 --> */}
          <motion.hr
            className="w-full lg:mt-10 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q2.
                  </span>
                  Can I customize the flavor of my cake?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen2(!open2)}
              >
                <svg
                  className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open2 && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    Yes, you can customize the flavor of your cake. However, we
                    only offer flavors that are available on our menu.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <!-- Question 3 --> */}
          <motion.hr
            className="w-full lg:mt-10 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q3.
                  </span>
                  How long does it take to complete an order?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen3(!open3)}
              >
                <svg
                  className={"transform " + (open3 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open3 && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    It usually takes 2-3 weeks to complete a custom cake order.
                    We recommend placing your order well in advance to ensure
                    availability.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <!-- Question 4 --> */}
          <motion.hr
            className="w-full lg:mt-10 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q4.
                  </span>
                  Can I choose my own cake design?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen4(!open4)}
              >
                <svg
                  className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open4 && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    Yes, you can choose your own cake design. We work with you
                    to create a cake that fits your vision.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <!-- Question 5 --> */}
          <motion.hr
            className="w-full lg:mt-10 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q5.
                  </span>
                  How do I place an order?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen5(!open5)}
              >
                <svg
                  className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open5 && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    You can place an order by contacting us through our website
                    or by giving us a call. We'll guide you through the process
                    and help you with all the details.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <!-- Question 6 --> */}
          <motion.hr
            className="w-full lg:mt-10 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q6.
                  </span>
                  Do you offer cake tastings?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen6(!open6)}
              >
                <svg
                  className={"transform " + (open6 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open6 && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    Yes, we offer cake tastings by appointment. Please contact
                    us to schedule a tasting session to try out our available
                    flavors.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <!-- Question 7 --> */}
          <motion.hr
            className="w-full lg:mt-10 my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.div
            className="w-full md:px-6"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800 dark:text-white">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800 dark:text-white">
                    Q7.
                  </span>
                  Can I make changes to my order after it has been placed?
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white rounded-xl"
                onClick={() => setOpen7(!open7)}
              >
                <svg
                  className={"transform " + (open7 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AnimatePresence>
              {open7 && (
                <motion.div
                  id="menu"
                  className="mt-6 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-6 text-gray-800 dark:text-white font-normal">
                    Changes to orders can be made within 48 hours of placing the
                    order. After that, we may not be able to accommodate changes
                    due to the preparation process.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
