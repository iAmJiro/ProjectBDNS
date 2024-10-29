import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function OrderInstructions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="motherdivorderinstructions bg-slate-200">
      <motion.div
        className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <div className="flex flex-col lg:flex-row justify-center mx-8 items-center space-y-6 lg:space-y-0">
          <div className="w-80 sm:w-auto  flex flex-col justify-start items-start">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                How to order
              </p>
            </div>
            <div className="mt-4 lg:w-4/5 xl:w-3/5">
              <p className="text-base leading-6 text-gray-600">
                Click here to start ordering! Fill out the form with all the
                information you would want me to know to create the perfect cake
                for the perfect event.
              </p>
            </div>
            <div className="mt-16 w-full">
              <Link onClick={scrollToTop} to="/Forms">
                <motion.button
                  className="px-4 bg-purple-600 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-purple-900"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-xl font-medium leading-5">
                    Click to order
                  </p>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66663 16H25.3333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 21.3333L25.3333 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 10.6667L25.3333 16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
            <div>
              <img
                className="hidden lg:block"
                src="453015123_18415746832078691_5862190502815762232_n (1) (1).jpg"
                alt="sofa"
              />
              <img
                className=" w-60 sm:w-auto lg:hidden"
                src="453015123_18415746832078691_5862190502815762232_n (1) (1).jpg"
                alt="sofa"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img
                  className="hidden lg:block"
                  src="381160396_155502677615301_1802941123642081612_n (1).jpg"
                  alt="chairs"
                />
                {/* <img
                  className="w-80 sm:w-auto lg:hidden"
                  src="381160396_155502677615301_1802941123642081612_n (1).jpg"
                  alt="chairs"
                /> */}
              </div>
              <div>
                <img
                  className="hidden lg:block"
                  src="369094230_134746813024221_1337004492530768028_n (1).jpg"
                  alt="chairs"
                />
                {/* <img
                  className="w-80 sm:w-auto lg:hidden"
                  src="369094230_134746813024221_1337004492530768028_n (1).jpg"
                  alt="chairs"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OrderInstructions;
