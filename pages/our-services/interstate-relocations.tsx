import React from "react";

function Interstate() {
  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-[633px] h-[400px] object-cover rounded-lg"
            src="/interstate-hero.jpg"
            alt="Man standing beside a truck"
          />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
            Interstate Relocations
          </h1>
          <p className="font-normal text-base leading-6 text-black ">
            Shepherd Moves can accommodate moving to most areas of the country.
            We have completed numerous moves to SA, NSW and QL in the past and
            can ensure your possessions are transported safely and with care
            when travelling across states. Let us take the stress out of your
            interstate moves. For more information please don’t hesitate to
            contact one of our amazing staff to help you with your next office
            move.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interstate;
