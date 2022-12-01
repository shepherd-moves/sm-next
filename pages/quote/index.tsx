import React from "react";
import Iframe from "react-iframe";

function Quote() {
  return (
    <>
      <div className=" flex-col container max-w-xl mx-auto  justify-center max-h[100vh]">
        <h2 className="text-black text-2xl lg:text-3xl mt-8 font-bold text-center mb-4 md:mb-6">
          Get a Quote
        </h2>
        <div>
          <p className="max-w-screen-md text-black md:text-lg text-left mx-auto">
            Follow the steps in the form below by filling out as much detailed
            information as possible. A quote will then be generated and sent to
            you via e-mail. If you have any quetions regarding this, feel free
            to contact us during business hours and we'll be happy to answer
            them!
          </p>
        </div>
        <Iframe
          url="https://app.onexfort.com/quote/230/210"
          id=""
          className="w-full h-[70vh]"
          display="block"
          position="relative"
        />
      </div>
    </>
  );
}

export default Quote;
