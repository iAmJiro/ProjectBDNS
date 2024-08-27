import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import HomeNav from "./HomeNav";
import GalleryHome from "./GalleryHome";
import OrderInstructions from "./OrderInstructions";
import HomeAbout from "./HomeAbout";

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Home() {
  return (
    <motion.div className="motherdivhome" initial="hidden" animate="visible">
      <motion.div className="grid-container">
        <motion.header className="headercss" variants={headerVariants}>
          <nav className="navcss">
            <HomeNav />
          </nav>
          <h1 className="landingtext text-white text-center">
            Beauty meets flavour
          </h1>
          <motion.div className="cakediv" variants={imageVariants}>
            <img className="cakepicture" src="cakepicture.png" alt="" />
          </motion.div>
          <motion.div className="cupcakediv" variants={imageVariants}>
            <img className="cupcakepicture" src="cupcakes.png" alt="" />
          </motion.div>
          <motion.div className="cookiediv" variants={imageVariants}>
            <img className="cookiepicture" src="cakepicture2.png" alt="" />
          </motion.div>
        </motion.header>
      </motion.div>
      <GalleryHome />
      <div className="homepart3">
        <OrderInstructions />
      </div>

      <div className="homepart5"></div>
    </motion.div>
  );
}

export default Home;
