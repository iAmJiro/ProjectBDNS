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
      <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6">
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
              <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800">
                My name is Emma
              </h1>
              <p className="w-full mt-6 text-base leading-6 text-gray-600 sm:w-96 text-justify">
                I’m Emma 26 years old, half Filipino, Mum of two awesome boys &
                Fiancé to Ben. I’m born and raised here in Masterton New Zealand
                and here is where we are also raising our family.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center mt-12 md:mt-14"
              variants={contentVariants}
            >
              <div
                className="w-20 h-20 flex items-center justify-center bg-white shadow rounded-full"
                role="img"
                aria-label="money"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.7333 8.99994C16.4918 8.58096 16.1409 8.23555 15.7181 8.00068C15.2954 7.76582 14.8167 7.65034 14.3333 7.66661H11.6667C10.9594 7.66661 10.2811 7.94756 9.78105 8.44766C9.28095 8.94776 9 9.62603 9 10.3333C9 11.0405 9.28095 11.7188 9.78105 12.2189C10.2811 12.719 10.9594 12.9999 11.6667 12.9999H14.3333C15.0406 12.9999 15.7189 13.2809 16.219 13.781C16.719 14.2811 17 14.9594 17 15.6666C17 16.3739 16.719 17.0521 16.219 17.5522C15.7189 18.0523 15.0406 18.3333 14.3333 18.3333H11.6667C11.1833 18.3495 10.7046 18.2341 10.2819 17.9992C9.85913 17.7643 9.5082 17.4189 9.26667 16.9999"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="w-full mt-6 text-base leading-6 text-gray-600 sm:w-96 text-justify">
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
                className="w-20 h-20 flex items-center justify-center bg-white shadow rounded-full"
                role="img"
                aria-label="phone"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.66667 2.33331H9L11.6667 8.99998L8.33333 11C9.76128 13.8954 12.1046 16.2387 15 17.6666L17 14.3333L23.6667 17V22.3333C23.6667 23.0406 23.3857 23.7188 22.8856 24.2189C22.3855 24.719 21.7072 25 21 25C15.799 24.6839 10.8935 22.4753 7.20911 18.7909C3.52467 15.1064 1.31607 10.201 1 4.99998C1 4.29274 1.28095 3.61446 1.78105 3.11436C2.28115 2.61426 2.95942 2.33331 3.66667 2.33331Z"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 6.33331C17.7072 6.33331 18.3855 6.61426 18.8856 7.11436C19.3857 7.61446 19.6667 8.29274 19.6667 8.99998"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 1C19.1217 1 21.1566 1.84286 22.6569 3.34315C24.1571 4.84344 25 6.87827 25 9"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="w-full mt-6 text-base leading-6 text-gray-600 sm:w-96 text-justify">
                A phrase is a short selection of words which when put together
                create a concept.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center mt-7"
              variants={contentVariants}
            >
              <div
                className="w-20 h-20 flex items-center justify-center bg-white shadow rounded-full"
                role="img"
                aria-label="bright ideas"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5333 4.46667L20.6 5.4M1 13H2.33333H1ZM13 1V2.33333V1ZM23.6667 13H25H23.6667ZM4.46667 4.46667L5.4 5.4L4.46667 4.46667Z"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99967 18.3334C7.8803 17.4938 7.05345 16.3234 6.63625 14.9878C6.21905 13.6523 6.23265 12.2193 6.67512 10.8919C7.11759 9.56444 7.9665 8.4099 9.10161 7.59176C10.2367 6.77362 11.6005 6.33337 12.9997 6.33337C14.3989 6.33337 15.7626 6.77362 16.8977 7.59176C18.0328 8.4099 18.8818 9.56444 19.3242 10.8919C19.7667 12.2193 19.7803 13.6523 19.3631 14.9878C18.9459 16.3234 18.119 17.4938 16.9997 18.3334C16.4791 18.8487 16.0871 19.4793 15.8555 20.1742C15.6239 20.8691 15.5591 21.6088 15.6663 22.3334C15.6663 23.0406 15.3854 23.7189 14.8853 24.219C14.3852 24.7191 13.7069 25 12.9997 25C12.2924 25 11.6142 24.7191 11.1141 24.219C10.614 23.7189 10.333 23.0406 10.333 22.3334C10.4403 21.6088 10.3755 20.8691 10.1438 20.1742C9.91221 19.4793 9.52025 18.8487 8.99967 18.3334"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.93359 19.6666H16.0669"
                    stroke="#4338CA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="w-full mt-6 text-base leading-6 text-gray-600 sm:w-96 text-justify">
                -I like travelling
                <br />
                -I like being out in nature
                <br />
                -I appreciate the simpler things in life now that I have a
                family
                <br />
                -I’ve got a massive sweet tooth
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
