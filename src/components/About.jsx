import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="">
      <nav className="navcss">
        <Navbar />
      </nav>
      <div
        className="absolute inset-x-0 top-[-10rem] sm:top-[-20rem] -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <motion.div
            className="flex flex-col items-center md:items-end justify-center md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 xl:mr-28"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={contentVariants}
            >
              <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
                Who am I?
              </h1>
              <p className="w-full mt-6 text-base leading-6 text-gray-800 dark:text-white sm:w-96 text-justify">
                I’m Emma-Lee Rainbird. 26 years old, half Filipino, Mum of two
                awesome boys & Fiancé to Ben. I was born and raised here in
                Masterton New Zealand and here is where we are also raising our
                family.
              </p>
            </motion.div>
            <img
              src="emma.jpg"
              alt="image of a woman studying"
              className=" block w-60 mt-8 md:hidden "
            />

            <motion.div
              className="flex flex-col items-center mt-12 md:mt-14"
              variants={contentVariants}
            >
              <div
                className="w-16 h-16 flex items-center  justify-center bg-purple-300 shadow rounded-full"
                role="img"
                aria-label="money"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black " className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg>


              </div>
              <p className="w-full mt-6 text-base leading-6 text-gray-800 dark:text-white sm:w-96 text-justify">
                Baking has always been something that I’ve enjoyed ever since a
                young age! I’ve got over 6 years experience in the bakery
                industry where I currently still specialise in making pastries,
                cakes & chocolate. Rainbird’s cakes is my progression of that
                passion & I love where it’s taking me!
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center mt-7"
              variants={contentVariants}
            >
              <div
                className="w-16 h-16 flex items-center  justify-center bg-purple-300 shadow rounded-full"
                role="img"
                aria-label="phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

              </div>
              <p className="w-full mt-6 text-base leading-6 text-gray-800 dark:text-white sm:w-96 text-justify">
                I am keen on creating the wildest cakes! It will meet your
                expectation in both visual and flavour
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center mt-7"
              variants={contentVariants}
            >
              <div
                className="w-16 h-16 flex items-center  justify-center bg-purple-300 shadow rounded-full"
                role="img"
                aria-label="bright ideas"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

              </div>
              <p className="w-full mt-6 mb-8 text-base leading-6 text-gray-800 dark:text-white sm:w-96 text-justify">
                Some things I enjoy are travelling and being out in nature. I
                have been appreciating the simpler things in life now that I
                have a family. I have also got a massive sweet tooth!
              </p>
            </motion.div>
          </motion.div>
          <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
            <img
              src="emma.jpg"
              alt="image of a woman studying"
              className="hidden md:block h-full rounded-md object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
