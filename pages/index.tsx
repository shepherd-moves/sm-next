import Hero from "../components/Hero";
import Link from "next/link";
import Reviews from "../components/Reviews";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWarehouse, FaMapMarkedAlt } from "react-icons/fa";
import { GiBedLamp } from "react-icons/gi";
import { BsBookshelf } from "react-icons/bs";
import { motion } from "framer-motion";

const features = [
  {
    name: "Residential Homes and Apartments",
    aria_text: "Read more about Residential Homes and Apartments",
    description:
      "Shepherd Moves started out with residential moves. Our team has built the skills and equipment to ensure your valuable possessions are delivered carefully and in a timely manner. At shepherd moves we always go above and beyond and promise to go the extra mile to ensure our customers are satisfied. We pride ourselves on making moving as stress free and easy as possible! Weather you’re moving from an apartment or a home we have you covered. With many different services available we have you covered",
    icon: AiFillHome,
  },
  {
    name: "House Staging and Styling",
    aria_text: "Read more about House Staging and Styling",
    description:
      "We have worked with multiple staging companies since our inception. We pride ourselves on the extra care we take to ensure the staged properties are utterly perfect.",
    icon: GiBedLamp,
  },
  {
    name: "Office Relocations",
    aria_text: "Read more about Office Relocations",
    description:
      "Our team has performed many office relocations in Melbourne and surrounding Victoria. We handle everything from dismantling, assembly, permits and all other logistical issues with both building sites. We are here to help you relocate offices with ease and have you moved and ready to operate in your new workspace as quickly and safely as possible. For more information please don’t hesitate to contact one of our amazing staff to help you with your next office move.",
    icon: HiOfficeBuilding,
  },
  {
    name: "Warehouse Relocations",
    aria_text: "Read more about Warehouse Relocations",
    description:
      "Shepherd Moves has the equipment, skills and vehicles necessary to move any type of warehouse in full. Our team specialises in moving heavy machinery, car hoists, racking and all types of tools and furniture to make sure your inventory is relocated safely.",
    icon: FaWarehouse,
  },
  {
    name: "Interstate Relocations",
    aria_text: "Read more about Interstate Relocations",
    description:
      "Shepherd Moves has the equipment, expertise and vehicles necessary to move any type of warehouse in full. Our team specialises in moving heavy machinery, car hoists, racking and all types of tools and furniture to make sure your inventory is relocated safely. With our knowledge of warehouse moves, we can help you relocate with very little disruption to your business. For more information please don’t hesitate to contact one of our amazing staff to help you with your next office move.",
    icon: FaMapMarkedAlt,
  },
  {
    name: "Racking Solutions",
    aria_text: "Read more about Racking Solutions",
    description:
      "Our team can install all types of racking for any storage purposes. With our tenure in the logistics and storage space, we also offeradvise on what the best options for your storage needs are, and can provide and install racking to your specifications. For more information please don’t hesitate to contact one of our amazing staff to help you with your next office move.",
    icon: BsBookshelf,
  },
];

const GOOGLE_API_KEY = "AIzaSyDt9aFzrMucATh-hCzgmkkDjRQJ-U0MJ0M";
const PLACE_ID = "ChIJW8oShdlD1moRrA7T7ruG9Yg";

export async function getStaticProps() {
  const config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,formatted_address,review&key=${GOOGLE_API_KEY}&sort=recent`,
    headers: {},
  };
  const res = await axios(config);
  // console.log(res);
  return {
    props: {
      reviews: res.data,
    },
  };
}

export default function Home({ reviews }: any) {
  return (
    <div>
      <Hero />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto ">
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

          <div
            id="services"
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16"
          >
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center">
                <feature.icon className="text-4xl text-black mb-4" />
                <p className=" text-black text-lg md:text-xl font-semibold text-center mb-2">
                  {feature.name}
                </p>
                <p className="text-black text-center mb-2 line-clamp-2">
                  {feature.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    aria-labelledby={feature.aria_text}
                    href={`our-services/${feature.name
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                    className="text-black font-bold"
                  >
                    More
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
