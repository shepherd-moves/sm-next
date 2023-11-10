import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const services = [
  {
    name: "Offers comprehensive services for warehouse relocations of any size and distance",
  },
  {
    name: "Safe and secure transportation of warehouse belongings, using protective materials and proper loading techniques",
  },
  {
    name: "Specialized equipment and techniques for handling large and heavy items, such as pallet racks and industrial machinery",
  },
  // Addition
];

function Warehouse() {
  const [relatedServices, setRelatedServices] = useState([
    "Residential Homes and Apartments",
    "House Staging and Styling",
    "Office Relocations",
    "Interstate Relocations",
    "Racking Solutions",
  ]);

  return (
    <>
      <Head>
        <title>Warehouse Relocations</title>
        <meta property="og:title" content="Warehouse Relocations" />
        <meta
          name="description"
          content="Relocate your warehouse without the hassle with Shepherd Moves. Our Warehouse Relocation services ensure a seamless, organized move. Contact us to streamline your operation's transition."
        />
      </Head>
      <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col gap-10 lg:flex-row justify-between ">
          <div className="w-full lg:w-8/12 ">
            <Image
              className="object-contain md:w-[633px] h-[400px] md:object-cover md:rounded-lg"
              src="/warehouse-hero.jpg"
              alt="Man standing beside a truck"
            />
          </div>
          <div className="w-full lg:w-8/12 flex flex-col ">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
              Warehouse Relocations
            </h1>
            <p className="font-normal text-base leading-6 text-black ">
              Shepherd Moves has the equipment, expertise and vehicles necessary
              to move any type of warehouse in full. Our team specialises in
              moving heavy machinery, car hoists, racking and all types of tools
              and furniture to make sure your inventory is relocated safely.
              With our knowledge of warehouse moves, we can help you relocate
              with very little disruption to your business. For more information
              please don’t hesitate to contact one of our amazing staff to help
              you with your next office move.
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

export default Warehouse;
