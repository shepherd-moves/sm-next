import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWarehouse, FaMapMarkedAlt } from "react-icons/fa";
import { GiBedLamp } from "react-icons/gi";
import { RackIcon } from "../icons/RackIcon";

const features = [
  {
    name: "Residental Homes and Apartments",
    description:
      "Shepherd Moves started with residential moves. Our team has the skills and equipment to ensure your possessions are delivered carefully and in a timely manner.",
    icon: AiFillHome,
  },
  {
    name: "House Staging and Styling",
    description:
      "We offer a wide range of tours in Donegal and along the wild Atlantic way and throughout Ireland. For many years we have welcomed visitors from around the country and from most countries across the world. We are happy to create a bespoke tour for your group. And we are happy to talk through the options with you to determine where are you would like to visit during the time that you have available.",
    icon: GiBedLamp,
  },
  {
    name: "Office Relocations",
    description:
      "We have a range of vehicles to suit all needs. We have a wheelchair accessible bus and a minibus with a wheelchair lift. We also have a range of vehicles with seatbelts for children.",
    icon: HiOfficeBuilding,
  },
  {
    name: "Warehouse Relocations",
    description:
      "Shepherd Moves has the equipment, skills and vehicles necessary to move any type of warehouse in full. Our team specialises in moving heavy machinery, car hoists, racking and all types of tools and furniture to make sure your inventory is relocated safely.",
    icon: FaWarehouse,
  },
  {
    name: "Interstate Relocations",
    description:
      "Shepherd Moves can accommodate moving to most areas of the country. We have completed numerous moves to SA, NSW and QL and can ensure your possessions are transported safely when travelling across states.",
    icon: FaMapMarkedAlt,
  },
  {
    name: "Racking Solutions",
    description:
      "Our team can install all types of racking for any storage purposes. With our tenure in the logistics and storage space, we also offer advise on what the best options for your storage needs are, and can provide and install racking to your specifications.",
    icon: RackIcon,
  },
];

function ServiceBlock() {
  return (
    <>
      {/* Our Services Section */}
      <div className="bg-white py-12 flex" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-col">
          <div className="lg:text-center">
            <h2 className=" text-black text-2xl font-semibold text-body_primary text-center">
              Our Services
            </h2>

            <p className="text-black mt-4 max-w-2xl text-xl text-body_primary text-center md:mx-auto">
              Shepherd Moves offers a wide range of moving services for every
              time of move including Residential Homes and Apartments, House
              Staging and Styling, Office Relocations, Warehouse Relocations and
              Interstate Relocations
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-body_primary text-white">
                      <feature.icon
                        className="h-6 w-6 fill-black"
                        aria-hidden="true"
                      />
                    </div>
                    <p className=" text-black ml-16 text-lg font-medium leading-6 text-nav_primary">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="text-black mt-2 ml-16 text-base text-nav_primary">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceBlock;
