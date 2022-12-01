import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import { AiFillHome } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWarehouse, FaMapMarkedAlt } from "react-icons/fa";
import { GiBedLamp } from "react-icons/gi";
import { BsBookshelf } from "react-icons/bs";

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
      "We have worked with multiple staging companies since our inception. We pride ourselves on the extra care we take to ensure the staged properties are utterly perfect.",
    icon: GiBedLamp,
  },
  {
    name: "Office Relocations",
    description:
      "Our team has performed many office relocations in Melbourne and surrounding Victoria. We handle everything from dismantling, assembly, permits and all other logistical issues with both building sites. We will have you moved and ready to operate in your new workspace as quickly and safely as possible",
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
    icon: BsBookshelf,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our Services
            </h2>

            <p className="max-w-screen-md text-black md:text-lg text-center mx-auto">
              Shepherd Moves offers a wide range of moving services for every
              time of move including Residential Homes and Apartments, House
              Staging and Styling, Office Relocations, Warehouse Relocations and
              Interstate Relocations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center">
                <feature.icon className="text-4xl text-black mb-4" />
                <p className="text-lg md:text-xl font-semibold text-center mb-2">
                  {feature.name}
                </p>
                <p className="text-black text-center mb-2 line-clamp-2">
                  {feature.description}
                </p>
                <a href="#" className="text-black font-bold">
                  More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
