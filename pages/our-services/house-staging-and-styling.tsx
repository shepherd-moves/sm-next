import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    name: "Experience working with multiple home staging and styling companies",
  },
  {
    name: "Careful packing and unpacking to prevent damage to furniture",
  },
  {
    name: "Customized solutions for every project, from single pieces to entire homes",
  },
  // Additional services...
];

function Staging() {
  const [relatedServices, setRelatedServices] = useState([
    "Residential Homes and Apartments",
    "Office Relocations",
    "Warehouse Relocations",
    "Interstate Relocations",
    "Racking Solutions",
  ]);

  return (
    <>
      <div>
        <Head>
          <title>House Staging and Styling</title>
          <meta property="og:title" content="House Staging and Styling" />
          <meta
            name="description"
            content="Elevate your property's appeal with our House Staging and Styling services at Shepherd Moves. Transform your space and captivate potential buyers. Contact us to get started!"
          />
        </Head>
      </div>
      <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col gap-10 lg:flex-row justify-between ">
          <div className="w-full lg:w-8/12 ">
            <Image
              className="object-contain  md:w-[633px] h-[400px] md:object-cover md:rounded-lg"
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
              and we pride ourselves on our work and take extra care to ensure
              the staged properties are utterly perfect. Your property can be
              staged and styled to appeal to a broad market. We are here to help
              you with your moving needs. From warehouse management to pickup
              and staging, we are your one stop shop for your staging needs.
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

export default Staging;
