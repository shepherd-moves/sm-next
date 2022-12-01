"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About Us", to: "/about", id: 2 },
  { name: "Terms of Service", to: "/terms", id: 3 },
  { name: "Quote", to: "/quote", id: 4 },
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
  return (
    <nav className="bg-black">
      <div className="flex justify-between items-center h-24 max-w-5xl mx-auto px-4">
        <img
          src="/sm-logo-white.svg"
          className="h-[150px] w-[100px]"
          alt="Tuckshop"
        />
        <ul className=" hidden md:flex gap-2 text-l font-semibold text-inter text-white capitalize items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/terms">Terms of Service</Link>
          </li>
          <Link
            href="/quote"
            className="bg-white text-black font-semibold px-4 py-2 rounded-lg"
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
            <FaBars className="fill-white" onClick={() => setIsOpen(!isOpen)} />
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
  );
}

export default Navbar;
