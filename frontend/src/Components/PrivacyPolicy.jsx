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
    <div className=" text-gray-800 dark:text-white min-h-screen flex flex-col items-center justify-center relative">
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

      <motion.div
        className="privacyPolicyDiv container mx-auto px-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center f-m-w font-bold">Privacy Policy</h1>
        </div>

        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full flex flex-col gap-8 items-center justify-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="f-m-m text-2xl font-semibold leading-7 text-center">1. Introduction</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                Welcome to Rainbird Cakes! This privacy policy explains how we
                collect, use, and protect your personal information.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8 text-center">2. Information We Collect</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We collect information that you provide directly to us, such as
                when you create an account, place an order, or contact us for
                customer support.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="f-m-m text-2xl font-semibold leading-7 text-center">3. How We Use Your Information</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We use your information to provide and improve our services,
                process transactions, and communicate with you regarding your
                orders.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8 text-center">4. Data Security</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We take reasonable measures to protect your information from
                unauthorized access, disclosure, alteration, or destruction.
              </p>

              <h2 className="f-m-m text-2xl font-semibold leading-7 mt-8 text-center">5. Changes to This Policy</h2>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PrivacyPolicy;
