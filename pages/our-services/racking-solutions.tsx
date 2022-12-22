import Link from "next/link";
import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import { FaCheck } from "react-icons/fa";

const services = [
  {
    name: "Provides a wide range of racking solutions for warehouses, distribution centers, and other commercial spaces",
  },
  {
    name: "Customizable racking options to accommodate any size and type of space",
  },
  {
    name: "High-quality racking materials and designs to ensure durability and safety",
  },
  // Additional services...
];

function Racking() {
  const [relatedServices, setRelatedServices] = useState([
    "Residential Homes and Apartments",
    "House Staging and Styling",
    "Office Relocations",
    "Warehouse Relocations",
    "Interstate Relocations",
  ]);

  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col gap-10 lg:flex-row justify-between ">
        <div className="w-full lg:w-8/12 ">
          <ReactCompareSlider
            className="w-[633px] h-[400px] object-cover rounded-lg"
            itemOne={
              <ReactCompareSliderImage src="/wh-before.jpeg" alt="one" />
            }
            itemTwo={<ReactCompareSliderImage src="/wh-after.jpeg" alt="two" />}
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
          <ul className="list-none mt-4 leading-tight">
            {services.map((service) => (
              <li key={service.name} className="mb-6">
                <h3 className="font-semibold text-lg text-black">
                  <span className="text-black inline-block">
                    <FaCheck></FaCheck>
                  </span>{" "}
                  {service.name}
                </h3>
              </li>
            ))}
          </ul>
          <div className="flex">
            <div className="">
              {" "}
              <h4>Related Services:</h4>
              <ul className="flex">
                {relatedServices.map((service) => (
                  <li key={service}>
                    <Link
                      href={`${service.replace(/\s/g, "-").toLowerCase()}`}
                      className="text-black font-semibold text-sm line-height-2.5 mr-4 hover:text-gray-500"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Racking;
