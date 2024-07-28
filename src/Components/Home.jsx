import React from "react";
import "../index.css";
import HomeNav from "./HomeNav";
function Home() {
  return (
    <div className="motherdivhome">
      <div className="grid-container">
        <header className="headercss">
          <nav className="navcss">
            <HomeNav />
          </nav>
          <h1 className="landingtext text-white text-center ">
            Where aesthetic is flavour
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
      <div className="homegallery py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              ></img>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
