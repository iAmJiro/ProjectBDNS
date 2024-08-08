import React from "react";
import "../index.css";
import HomeNav from "./HomeNav";
import GalleryHome from "./GalleryHome";
import OrderInstructions from "./OrderInstructions";
import HomeAbout from "./HomeAbout";

function Home() {
  return (
    <div className="motherdivhome">
      <div className="grid-container">
        <header className="headercss">
          <nav className="navcss">
            <HomeNav />
          </nav>
          <h1 className="landingtext text-white text-center ">
            Beauty meets flavour
          </h1>
          <div className="cakediv">
            <img className="cakepicture" src="cakepicture.png" alt="" />
          </div>
          <div className="cupcakediv">
            <img className="cupcakepicture" src="cupcakes.png" alt="" />
          </div>
          <div className="cookiediv">
            <img className="cookiepicture" src="cakepicture2.png" alt="" />
          </div>
        </header>
      </div>
      <GalleryHome />
      <div className="homepart3">
        <OrderInstructions />
      </div>
      <div className="homepart4">
        <HomeAbout />
      </div>
      <div className="homepart5"></div>
    </div>
  );
}

export default Home;
