import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";
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
function HomeAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="homeaboutdiv container mx-auto px-4"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={textVariants}
    >
      <h1 className="text-5xl text-center f-m-w text-black font-bold pt-0">
        About Me
      </h1>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-1/2">
            <img
              src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png"
              className="w-full"
              alt="Kitchen"
            />
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                Here is my kitchen
              </h1>
              <p className="text-base f-m-m leading-loose mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="lg:flex items-start mb-8">
              <img
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                className="w-full"
                alt="Emma Lee-Rainbrid"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  I'm Emma Lee-Rainbrid
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4"></div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png"
                className="w-full"
                alt="Baking"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  I Love Baking!
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-16 w-full">
        <Link
          onClick={scrollToTop}
          to="/About"
          className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          <motion.button
            className="hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4"
            whileHover={{ scale: 1.05 }}
          >
            Browse More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default HomeAbout;
