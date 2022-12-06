import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function Racking() {
  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="w-full lg:w-8/12 ">
          <ReactCompareSlider
            className="w-[633px] h-[400px] object-cover rounded-lg"
            itemOne={
              <ReactCompareSliderImage src="/warehouse-before.jpg" alt="one" />
            }
            itemTwo={
              <ReactCompareSliderImage src="/warehouse-after.jpg" alt="two" />
            }
            style={{
              display: "flex",
              width: "100%",
              height: "50vh",
            }}
          />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
            Racking Solutions
          </h1>
          <p className="font-normal text-base leading-6 text-black ">
            Our team can install all types of racking for any storage purposes.
            With our tenure in the logistics and storage space, we also offer
            advise on what the best options for your storage needs are, and can
            provide and install racking to your specifications. For more
            information please don’t hesitate to contact one of our amazing
            staff to help you with your next office move.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Racking;
