import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css"; // 使用你的全局样式
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

function TermsOfService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="termsofservicediv container mx-auto px-4"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={textVariants}
    >
      <h1 className="text-5xl text-center f-m-w text-black font-bold pt-0">
        Terms of Service
      </h1>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-1/2">
            <h2 className="f-m-m text-2xl font-semibold leading-7">1. Introduction</h2>
            <p className="text-base f-m-m leading-loose mt-2 text-justify">
              Welcome to Rainbird Cakes! These terms and conditions outline the rules and
              regulations for the use of [              ], located at [         ].
            </p>
            <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8">2. Account Responsibility</h2>
            <p className="text-base f-m-m leading-loose mt-2 text-justify">
              When you create an account with us, you must provide accurate, complete, and current information at all times.
            </p>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8">3. Services Provided</h2>
            <p className="text-base f-m-m leading-loose mt-2 text-justify">
              We are committed to providing our services as described, but we reserve the right to modify or discontinue the service at any time.
            </p>
            <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8">4. User Conduct</h2>
            <p className="text-base f-m-m leading-loose mt-2 text-justify">
              You agree not to misuse or interfere with the service. Any illegal activities may result in account termination.
            </p>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
}

export default TermsOfService;
