import React, { useState } from "react";
import Link from "next/link";
import "react-before-after-slider-component/dist/build.css";
import { FaCheck } from "react-icons/fa";

const services = [
  {
    name: "Experienced and reliable team members who are trained in the proper handling of household items",
  },
  {
    name: "Flexible scheduling and competitive pricing for residential removals",
  },
  {
    name: "Provides a wide range of services to make the moving process stress-free and efficient",
  },
  {
    name: "We can supply all the packing materials you need to ensure your items are packed safely and securely",
  },
  // Additional services...
];

function Residential() {
  const [relatedServices, setRelatedServices] = useState([
    "House Staging and Styling",
    "Office Relocations",
    "Warehouse Relocations",
    "Interstate Relocations",
    "Racking Solutions",
  ]);

  return (
    <>
      <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col gap-10 lg:flex-row justify-between ">
          <div className="w-full lg:w-8/12 ">
            <img
              className="object-contain  md:w-[633px] h-[400px] md:object-cover md:rounded-lg"
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
              are delivered carefully and in a timely manner. At shepherd moves
              we always go above and beyond and promise to go the extra mile to
              ensure our customers are satisfied. We pride ourselves on making
              moving as stress free and easy as possible! Weather you’re moving
              from an apartment or a home we have you covered. With many
              different services available we have you covered
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
    </>
  );
}

export default Residential;
