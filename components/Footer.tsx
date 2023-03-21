import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerRef = useRef<HTMLInputElement>(null);
  const [showButton, setShowButton] = useState(false);

  function handleScroll() {
    const element = footerRef.current;
    if (element) {
      const isVisible =
        element.getBoundingClientRect().top < window.innerHeight;
      setShowButton(isVisible);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]);

  return (
    <>
      {showButton && (
        <Link className="back-to-top-button" href="#" scroll={true}>
          Back to top
        </Link>
      )}
      <footer ref={footerRef} className=" px-4 md:px-8 mx-auto bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
            <Link
              href="/about"
              className="text-white hover:text-gray-300 active:text-indigo-600 transition duration-100"
            >
              About Us
            </Link>
            <Link
              href="/#services"
              className="text-white hover:text-gray-300 active:text-indigo-600 transition duration-100"
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:text-gray-300 active:text-indigo-600 transition duration-100"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-white hover:text-gray-300 active:text-indigo-600 transition duration-100"
            >
              Terms of Service
            </Link>
            <Link
              href="/packing-materials"
              className="text-white hover:text-gray-300 active:text-indigo-600 transition duration-100"
            >
              Packing Materials
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 active:text-indigo-600 transition duration-100"
            ></Link>
          </nav>
          <div className="flex gap-4">
            <Link className="" href={"https://www.facebook.com/shepherdmoves/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white hover:fill-[#4267B2] "
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            <Link href={"https://www.tiktok.com/@shepherdmoves"}>
              <FaTiktok className=" fill-white tiktok-btn w-[24px] h-[24px]" />
            </Link>
            <Link href={"https://www.instagram.com/shepherdmoves/"}>
              <FaInstagram className="fill-white insta-btn w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
        <div className="flex-col mt-4">
          <div className="text-white text-md text-center mb-4">
            <Link href={"https://jordyn.vercel.app/"}>
              Website created with ❤️ by Jordan Nelson
            </Link>
          </div>
          <div className="flex justify-center mt-[-30px]">
            <Link href="https://greenfleet.net/">
              <Image
                src="/gf-supporting-logo.png"
                width={200}
                height={200}
                alt="Greenfleet Logo"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
