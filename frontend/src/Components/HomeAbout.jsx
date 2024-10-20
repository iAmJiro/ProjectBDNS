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
              src="423583268_18382431028078691_1448467962359117041_n.jpg"
              className="w-full"
              alt="Kitchen"
            />
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                Here is my kitchen
              </h1>
              <p className="text-base f-m-m leading-loose mt-2 text-justify">
                Hey, I’m Emma, the gal behind Rainbird’s Cakes. I’m 25, mum of 2
                boys, fiancé to Ben, baker by trade with over 5 years in the
                industry. Lover of all things food, and now caker from home.
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="lg:flex items-start mb-8">
              <img
                src="359810853_107861709046065_8427786647157348048_n (1).jpg"
                className="w-full"
                alt="Emma Lee-Rainbrid"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  I'm Emma Lee-Rainbrid
                </h1>
                <p className="text-base f-m-m leading-loose mt-2 text-justify">
                Growing up in the heart of Masterton, New Zealand, I’ve always been surrounded by the vibrant 
                energy of family and community. As a mother of two amazing boys, I’ve learned to appreciate 
                the simple joys in life, from our outdoor adventures to our shared love of sweet treats. 
                When I’m not busy baking, I’m exploring new flavors, discovering the beauty of nature, or 
                simply enjoying a quiet moment with a cup of tea. My journey with Rainbird’s Cakes is more 
                than just a business; it’s a way for me to share a piece of my heart with each cake I create.
                </p>
                <div className="mt-4"></div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                src="366211000_125649100600659_435747763610050943_n (1).jpg"
                className="w-full"
                alt="Baking"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  I Love Baking!
                </h1>
                <p className="text-base f-m-m leading-loose mt-2 text-justify">
                  Baking has always been something that I’ve enjoyed ever since
                  a young age! I’ve got over 6 years experience in the bakery
                  industry where I currently still specialise in making
                  pastries, cakes & chocolate. Rainbird’s cakes is my
                  progression of that passion & I love where it’s taking me!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-16 w-full">
        <Link
          onClick={scrollToTop}
          to="/About"
          className="block py-2 px-3 text-white rounded dark:text-white "
        >
          <motion.button
            className=" border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4"
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
