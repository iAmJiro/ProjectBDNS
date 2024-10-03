import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";
import Navbar from "./Navbar";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TermsOfService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="motherdiv bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <motion.div
        className="termsofservicediv container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center f-m-w font-bold">Terms of Service</h1>
        </div>

        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full flex flex-col gap-8 items-center justify-center"> {/* 垂直居中 */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="f-m-m text-2xl font-semibold leading-7 text-center">1. Introduction</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                Welcome to Rainbird Cakes! These terms and conditions outline the rules and regulations for the use of [ ], located at [ ].
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8 text-center">2. Account Responsibility</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                When you create an account with us, you must provide accurate, complete, and current information at all times.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="f-m-m text-2xl font-semibold leading-7 text-center">3. Services Provided</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We are committed to providing our services as described, but we reserve the right to modify or discontinue the service at any time.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8 text-center">4. User Conduct</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                You agree not to misuse or interfere with the service. Any illegal activities may result in account termination.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TermsOfService;
