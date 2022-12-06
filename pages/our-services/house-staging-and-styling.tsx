import React from "react";

function Staging() {
  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-[633px] h-[400px] object-cover rounded-lg"
            src="/home-stage-hero.jpg"
            alt="Man standing beside a truck"
          />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
            Home Staging and Styling
          </h1>
          <p className="font-normal text-base leading-6 text-black ">
            We have worked with multiple staging companies since our inception
            and we pride ourselves on our work and take extra care to ensure the
            staged properties are utterly perfect. Your property can be staged
            and styled to appeal to a broad market. We are here to help you with
            your moving needs. From warehouse management to pickup and staging,
            we are your one stop shop for your staging needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Staging;
