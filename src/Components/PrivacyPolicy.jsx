import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";
import Navbar from "./Navbar";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function PrivacyPolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <motion.div
        className="privacyPolicyDiv container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center f-m-w font-bold">
            Privacy Policy
          </h1>
        </div>

        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full lg:flex gap-8">
            <div className="lg:w-1/2">
              <h2 className="f-m-m text-2xl font-semibold leading-7">
                1. Introduction
              </h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                Welcome to Rainbird Cakes! This privacy policy explains how we collect, use, and protect your personal information.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8">
                2. Information We Collect
              </h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We collect information that you provide directly to us, such as when you create an account, place an order, or contact us for customer support.
              </p>
            </div>

            <div className="lg:w-1/2 lg:ml-8">
              <h2 className="f-m-m text-2xl font-semibold leading-7">
                3. How We Use Your Information
              </h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We use your information to provide and improve our services, process transactions, and communicate with you regarding your orders.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8">
                4. Data Security
              </h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8">
                5. Changes to This Policy
              </h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PrivacyPolicy;
