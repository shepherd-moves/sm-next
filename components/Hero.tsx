import React from "react";

function Hero() {
  return (
    <>
      <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg  relative py-16 md:py-16 xl:py-30">
        <img
          src="/sm-hero-bg.jpg"
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="w-full h-full object-cover object-center absolute inset-0"
        />

        <div className="bg-white mix-blend-normal opacity-75 absolute inset-0"></div>
        <div className="sm:max-w-2xl flex flex-col items-center relative p-4 ">
          <img src="/sm-logo-black.svg" className="w-[80%] mb-4"></img>
          <h3 className=" text-center md:text-2xl font-bold mb-4">
            Your Leading Moving Providers in Victoria, Australia
          </h3>
          <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <a
              href="#"
              className="inline-block bg-black hover:bg-white hover:text-black focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get a Quote
            </a>

            <a
              href="#"
              className="inline-block bg-white hover:bg-black hover:text-white focus-visible:ring ring-indigo-300 text-blac text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
