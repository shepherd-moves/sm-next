import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const services = [
  {
    name: "Experienced team members who are familiar with the logistics and regulations of interstate travel",
  },
  {
    name: "Safe and secure transportation of belongings, including the use of protective materials and proper loading techniques",
  },
  {
    name: "Provides specialized services for interstate moves within Australia",
  },
  // Additional services...
];

function Interstate() {
  const [relatedServices, setRelatedServices] = useState([
    "Residential Homes and Apartments",
    "House Staging and Styling",
    "Office Relocations",
    "Warehouse Relocations",
    "Racking Solutions",
  ]);

  return (
    <>
      <div>
        <Head>
          <title>Interstate Relocations</title>
          <meta property="og:title" content="Interstate Relocations" />
          <meta
            name="description"
            content="Seamlessly move across borders with Shepherd Moves' Interstate Relocation services. Experience stress-free long-distance moves with our expert team. Get a quote today!"
          />
        </Head>
      </div>
      <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col gap-10 lg:flex-row justify-between ">
          <div className="w-full lg:w-8/12 ">
            <Image
              className="object-contain  md:w-[633px] h-[400px] md:object-cover md:rounded-lg"
              src="/interstate-hero.jpg"
              alt="Man standing beside a truck"
            />
          </div>
          <div className="w-full lg:w-8/12 flex flex-col ">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
              Interstate Relocations
            </h1>
            <p className="font-normal text-base leading-6 text-black ">
              Shepherd Moves can accommodate moving to most areas of the
              country. We have completed numerous moves to SA, NSW and QL in the
              past and can ensure your possessions are transported safely and
              with care when travelling across states. Let us take the stress
              out of your interstate moves. For more information please don’t
              hesitate to contact one of our amazing staff to help you with your
              next office move.
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
                        aria-label={`Go to ${service
                          .replace(/\s/g, "-")
                          .toLowerCase()} page`}
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

export default Interstate;
