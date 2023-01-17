"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About Us", to: "/about", id: 2 },
  { name: "Services", to: "/#services", id: 3 },
  { name: "Contact", to: "/contact-us", id: 4 },
  { name: "Terms of Service", to: "/terms", id: 5 },
  { name: "Packing Materials", to: "/packing-materials", id: 6 },
  { name: "Careers", to: "https://forms.gle/TznAnNDDNkqhscCn8", id: 7 },
  { name: "Quote", to: "/quote", id: 8 },
];
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = submenuRef.current;
    if (node) {
      node.addEventListener("mouseenter", () => setShowSubmenu(true));
      node.addEventListener("mouseleave", () => setShowSubmenu(false));
    }
    return () => {
      if (node) {
        node.removeEventListener("mouseenter", () => setShowSubmenu(true));
        node.removeEventListener("mouseleave", () => setShowSubmenu(false));
      }
    };
  }, []);

  return (
    <>
      {showBanner && (
        <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-white relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
          <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-black text-sm md:text-base mb-2 sm:mb-0">
            <p className="text-center">
              Beginning in mid February, we will be offering storage services
              for your convenience in our new store and warehouse in Glen
              Huntley!
            </p>
          </div>
          {/* The button to open modal */}
          <label
            htmlFor="my-modal"
            className="storage-btn order-last sm:order-none w-full sm:w-auto inline-block bg-black focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2"
          >
            Find out more!
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Shepherd Moves Storage Services 📦
              </h3>
              <p className="py-4">
                From mid February, we will be offering storage services for your
                convenience. We will be able to store your items in a secure
                facility managed by our team. Rest assured that your items will
                be safe and secure with us.
                <br />
                <br />
                You will also be able to buy{" "}
                <Link href="/packing-materials" className="font-bold">
                  packing supplies
                </Link>{" "}
                from our store located in the same facility!
              </p>
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  className="storage-btn order-last sm:order-none w-full sm:w-auto inline-block bg-black focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2"
                >
                  Got it.
                </label>
              </div>
            </div>
          </div>

          <div className="order-2 sm:order-none w-1/12 sm:w-auto flex justify-end items-start sm:absolute sm:right-0 sm:mr-1 xl:mr-3">
            <button
              type="button"
              className="text-black hover:text-indigo-100 active:text-indigo-200 transition duration-100"
              onClick={() => setShowBanner(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 md:w-6 h-5 md:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <nav className="bg-black">
        <div className="flex justify-between items-center h-24 max-w-5xl mx-auto px-4">
          <Link href="/">
            <img
              src="/sm-logo-white.svg"
              className="h-[150px] w-[100px]"
              alt="Tuckshop"
            />
          </Link>
          <ul className="main-nav hidden md:flex gap-2 text-l font-semibold text-inter text-white capitalize items-center">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li className="relative">
              <Link
                className=""
                onMouseEnter={() => setShowSubmenu(true)}
                href="/#service"
              >
                <button disabled={showSubmenu}>Services</button>
              </Link>
              {showSubmenu && (
                <div
                  ref={submenuRef}
                  className="absolute z-10 bg-white rounded-md py-2 shadow-md"
                  onMouseEnter={() => setShowSubmenu(true)}
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  <Link
                    className="block w-[250px] px-4 py-2 text-black hover:bg-gray-200"
                    href="/our-services/residential-homes-and-apartments"
                  >
                    Residential Homes and Apartments
                  </Link>
                  <Link
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    href="/our-services/house-staging-and-styling"
                  >
                    House Staging and Styling
                  </Link>
                  <Link
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    href="/our-services/office-relocations"
                  >
                    Office Relocations
                  </Link>
                  <Link
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    href="/our-services/warehouse-relocations"
                  >
                    Warehouse Relocations
                  </Link>
                  <Link
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    href="/our-services/interstate-relocations"
                  >
                    Interstate Relocations
                  </Link>
                  <Link
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    href="/our-services/racking-solutions"
                  >
                    Racking Solutions
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/packing-materials">Packing Materials</Link>
            </li>

            <Link
              href="/quote"
              className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out"
            >
              Get a Quote
            </Link>
          </ul>
          <button className="md:hidden">
            {isOpen ? (
              <AiOutlineClose
                className="fill-white"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <FaBars
                className="fill-white"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </button>
        </div>
        <div className="flex md:hidden">
          <AnimatePresence>
            {isOpen && (
              <motion.aside
                initial={{ width: 0 }}
                animate={{
                  width: 300,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
                }}
                className="bg-white w-[auto] h-[100vh]"
              >
                <motion.div
                  className="container mt-[4.5rem] mb-[4.5rem] ml-[1.4rem] mr-[1.4rem]"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  {links.map(({ name, to, id }) => (
                    <motion.a
                      key={id}
                      href={to}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      className="text-black decoration-none text-[1.75rem] font-bold block m-[20px]"
                    >
                      {name}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
