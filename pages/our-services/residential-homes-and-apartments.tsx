import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const FIRST_IMAGE = {
  imageUrl: "/about-hero.png",
};
const SECOND_IMAGE = {
  imageUrl: "/sm-hero-bg.jpg",
};

const delimiterIconStyles = {
  width: "50px",
  height: "50px",
  backgroundSize: "cover",
  borderRadius: "none",
  backgroundImage: "url(<some-path-here>)",
};

function Residential() {
  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-[633px] h-[400px] object-cover rounded-lg"
            src="/truck-with-logo.jpg"
            alt="Man standing beside a truck"
          />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
            Residential Moves
          </h1>
          <p className="font-normal text-base leading-6 text-black ">
            Shepherd Moves started out with residential moves. Our team has
            built the skills and equipment to ensure your valuable possessions
            are delivered carefully and in a timely manner. At shepherd moves we
            always go above and beyond and promise to go the extra mile to
            ensure our customers are satisfied. We pride ourselves on making
            moving as stress free and easy as possible! Weather you’re moving
            from an apartment or a home we have you covered. With many different
            services available we have you covered
          </p>
        </div>
      </div>
    </div>
  );
}

export default Residential;
