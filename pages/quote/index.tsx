import React from "react";
import Head from "next/head";
import Iframe from "react-iframe";

function Quote() {
  return (
    <>
      <Head>
        <title>Get a Quote | Shepherd Moves</title>
        <meta
          name="description"
          content="Ready for your next move? Get a personalized quote from Shepherd Moves today. Quick, easy, and tailored to your moving needs. Start your free estimate now!"
        />
      </Head>

      <div className=" p-4 sm:flex-col container max-w-xl mx-auto  justify-center max-h[100vh]">
        <h2 className="text-black text-2xl lg:text-3xl mt-8 font-bold text-center mb-4 md:mb-6">
          Get an Estimate Today!
        </h2>
        <div>
          <p className="max-w-screen-md text-black md:text-lg text-left mx-auto">
            Follow the steps in the form below by filling out as much detailed
            information as possible. Once we receive your information, we will
            reach out with the next steps to help get you moving. If you have
            any questions regarding this, feel free to contact us during
            business hours and we'll be happy to answer them!
          </p>
        </div>
        <Iframe
          url="https://app.onexfort.com/quote/230/210"
          className="w-full h-[70vh]"
          display="block"
          position="relative"
        />
      </div>
    </>
  );
}

export default Quote;
