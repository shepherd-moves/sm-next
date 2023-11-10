import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden   relative py-16 md:py-16 xl:py-30">
        <motion.img
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          style={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          src="/sm-hero-bg.jpg"
          alt="Photo by Fakurian Design"
          className="w-full h-full object-cover object-center absolute inset-0"
        />

        <div className="bg-white mix-blend-normal opacity-75 absolute inset-0"></div>
        <div className="sm:max-w-2xl flex flex-col items-center relative p-4 ">
          <motion.img
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src="/sm-logo-black.svg"
            className="w-[440px] h-[250px] mb-4"
          ></motion.img>

          <motion.h3
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            style={{
              opacity: 0,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="text-black text-center md:text-2xl font-bold mb-4"
          >
            Your Leading Moving Providers in Victoria, Australia
          </motion.h3>

          <div className=" flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <motion.div
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              style={{
                opacity: 0,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Link
                href="/quote"
                className=" items-center inline-block bg-black hover:bg-white hover:text-black focus-visible:ring  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Get an Estimate!
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
