import React from "react";
import Navbar from "./Navbar";
function Testimonials() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="motherdiv">
      <Navbar />
      <div className="testimonials1">
        <div>
          <div className="lg:px-20 md:px-6 px-4 py-12">
            <div className="flex flex-col items-center justify-center">
              <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800 dark:text-white">
                Hear from our clients
              </h1>
              <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 dark:text-white">
                Here is why you should trust us with your work achievements
              </p>
            </div>
            <div className="w-full lg:flex items-center gap-6 mt-10">
              <div className="lg:w-1/2">
                <div className="bg-white border rounded-md border-gray-200 relative sm:p-10">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                      alt="commas"
                    />
                  </div>
                  <p className="text-base leading-6 text-gray-600 mt-4">
                    Emma created my beautiful dream wedding cake and cupcakes
                    for me. It was great having a cupcake tester box to try all
                    the flavours. We loved the carrot cake and lemon cake and
                    they were an absolute hit with all our guests. Emma was very
                    efficient and made the process so easy for us, I would
                    highliy recommend her to anyone who is need of a special
                    sweet treat, her talent is next level! ~Ellen
                  </p>
                  {/* <div className="absolute bottom-0 -mb-4 ml-10">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                      alt="sharp"
                    />
                  </div> */}
                </div>
                <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                      alt="commas"
                    />
                  </div>
                  <p className="text-base leading-6 text-gray-600 mt-4">
                    I first discovered Emma at Rainbird's Cakes in July 2023. My
                    twin daughters were turning 10 and I wanted something
                    special to mark the milestone. My usual cake maker was
                    unfortunately not operating anymore, so I was recommended
                    Emma by my sister, who borught up her page. As we looked at
                    all of Emma's GORGEOUS creations, I knew I had to have
                    her!!!
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:mt-0 mt-16">
                <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                      alt="commas"
                    />
                  </div>
                  <p className="text-base leading-6 text-gray-600 mt-4">
                    I've ordered from Rainbird's cakes a couple times and
                    already have her panned for future dates! I absolutely love
                    the amount of care and detail that goes into each of her
                    cakes, and she's so good at making them fit the vision you
                    had planned but making it even better. Her cakes look
                    absolutely beautiful, and also taste incredible. I will
                    always recommend Rainbird's Cakes to anyone!
                  </p>
                </div>
                <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                  <div>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                      alt="commas"
                    />
                  </div>
                  <p className="text-base leading-6 text-gray-600 mt-4">
                    Ever since, I have continued to go back to Emma to make our
                    celebrations that are a bit more speical. Her cakes and
                    cupcakes are always fluffy and sooo moist. ALL of her
                    flavours are delicious and her buttercream is utterly
                    divine. Emma takes much pride and special care with all of
                    her creations which is evident in the finished product you
                    receive. And it's ALWAYS an absolute pleasure to deal with
                    Emma, she is such a lovely person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
