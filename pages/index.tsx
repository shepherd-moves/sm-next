import Hero from "../components/Hero";
import Link from "next/link";
import Head from "next/head";
import Reviews from "../components/Reviews";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWarehouse, FaMapMarkedAlt } from "react-icons/fa";
import { GiBedLamp } from "react-icons/gi";
import { BsBookshelf } from "react-icons/bs";
import BiLogoFacebook from "react-icons/bi";
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
    <>
      <Head>
        <title>Shepherd Moves | Home</title>
        <meta
          name="description"
          content="Shepherd Moves offers professional moving services to ensure a smooth transition for your home or business. Discover our reliable and efficient solutions."
        />
        <meta
          property="og:title"
          content="Shepherd Moves | Your Trusted Moving Partner"
        />
        <meta
          property="og:description"
          content="Shepherd Moves offers professional moving services to ensure a smooth transition for your home or business. Discover our reliable and efficient solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shepherdmoves.com.au/" />
        <meta property="og:image" content="/sm-logo-black.svg" />
        <link rel="icon" href="/sm-logo-black.svg" />
        {/* Add additional tags as needed for fonts, styles, etc. */}
      </Head>
      <div>
        <Hero />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto ">
            <div className="flex items-center justify-center mb-2 ">
              {/* <h2 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Our Socials
              </h2> */}
              <div className="flex flex-col lg:flex-row gap-2">
                <Link
                  type="button"
                  href="https://www.facebook.com/shepherdmoves/"
                  target="_blank"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Check us out on Facebook
                </Link>
                <Link
                  type="button"
                  href="https://www.instagram.com/shepherdmoves/"
                  target="_blank"
                  className="text-white bg-[#C13584] hover:bg-[#C13584]/90 focus:ring-4 focus:outline-none focus:ring-[#C13584]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#C13584]/55 me-2 mb-2"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    fill="white"
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram icon</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                  Check us out on Instagram
                </Link>

                <Link
                  type="button"
                  href="https://maps.app.goo.gl/cAzTVtFfZUXBt2MP8"
                  target="_blank"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  View our Google profile
                </Link>
              </div>
            </div>
            <div className="mb-10 md:mb-16">
              <h2 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Our Services
              </h2>

              <p className="max-w-screen-md text-black md:text-lg text-center mx-auto">
                Shepherd Moves offers a wide range of moving services for every
                time of move including Residential Homes and Apartments, House
                Staging and Styling, Office Relocations, Warehouse Relocations
                and Interstate Relocations
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
    </>
  );
}
