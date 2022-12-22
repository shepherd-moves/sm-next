import React from "react";
import Image from "next/image";

function ContactUs() {
  return (
    <>
      <div className=" p-8 sm:bg-white flex-col container max-w-xl mx-auto  justify-center max-h[100vh]">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="text-sm text-center mt-4 mb-4">
          We are always happy to hear from you. Please feel free to contact us
          with any questions or queries you may have.
        </p>

        <div className="flex-col">
          <h1 className="text-lg font-bold">Address</h1>
          <p className="text-sm">
            11 Carroll Crescent, Glen Iris, 3146 Victoria, Australia
          </p>
        </div>
        <div className="flex-col">
          <h1 className="text-lg font-bold">Phone</h1>
          <p className="text-sm">+61 428 439 182</p>
        </div>
        <div className="flex-col">
          <h1 className="text-lg font-bold">Email</h1>
          <p className="text-sm">bookings@shepherdmoves.com.au</p>
        </div>
        <Image
          src="/sm_maps.png"
          width={600}
          height={400}
          className="rounded-lg mt-8"
          alt="Image of Shepherd Moves office location on Google Maps"
        ></Image>
      </div>
    </>
  );
}

export default ContactUs;
