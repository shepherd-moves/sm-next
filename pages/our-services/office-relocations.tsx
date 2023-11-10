import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const services = [
  {
    name: "Provides specialized services for office moves of any size and distance",
  },
  {
    name: "Specialized equipment and techniques for handling fragile and bulky items, such as computers and filing cabinets",
  },
  {
    name: "Flexible scheduling and competitive pricing to minimize disruption to the workplace",
  },
  // Additional services...
];

function Office() {
  const [relatedServices, setRelatedServices] = useState([
    "Residential Homes and Apartments",
    "House Staging and Styling",
    "Warehouse Relocations",
    "Interstate Relocations",
    "Racking Solutions",
  ]);

  return (
    <>
      <div>
        <Head>
          <title>Office Relocations</title>
          <meta property="og:title" content="Office Relocations" />
          <meta
            name="description"
            content="Relocate your business effortlessly with Shepherd Moves' Office Relocation services. Minimize downtime and ensure a smooth transition for your office. Contact us for a quote."
          />
        </Head>
      </div>
      <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col gap-10 lg:flex-row justify-between ">
          <div className="w-full lg:w-8/12 ">
            <Image
              className="object-contain  md:w-[633px] h-[400px] md:object-cover md:rounded-lg"
              src="/office-hero.jpg"
              alt="Man standing beside a truck"
            />
          </div>
          <div className="w-full lg:w-8/12 flex flex-col ">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
              Office Relocations
            </h1>
            <p className="font-normal text-base leading-6 text-black ">
              Our team has performed many office relocations in Melbourne and
              surrounding Victoria. We handle everything from dismantling,
              assembly, permits and all other logistical issues with both
              building sites. We are here to help you relocate offices with ease
              and have you moved and ready to operate in your new workspace as
              quickly and safely as possible. For more information please don’t
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

export default Office;
