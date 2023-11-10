import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { send } from "emailjs-com";

function ContactUs() {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: any) => {
    try {
      e.preventDefault();
      send("service_f7oe4rl", "template_hwubheh", toSend, "gRnK3AGwVX7bWtekX")
        .then((response) => {
          setSubmitted(true);
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <Head>
          <title>Contact</title>
          <meta property="og:title" content="Contact" />
          <meta
            name="description"
            content="Reach out to us for any queries or support. Contact Shepherd Moves via email at bookings@shepherdmoves.com.au, phone at 0391128572, or fill out our online form. We're here to help with your moving needs in Melbourne."
          />
        </Head>
      </div>
      {submitted ? (
        <div className=" p-8 sm:bg-white flex-col  container max-w-xl mx-auto  justify-center h-auto">
          <h1 className="text-4xl font-bold text-center">Thank you!</h1>
          <p className="text-sm text-center mt-4 mb-4">
            Thank you for your enquiry, one of our staff members will get back
            to you within 1 to 2 working days.
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
        </div>
      ) : (
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

          <form
            onSubmit={onSubmit}
            className="mt-8 max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          >
            <div>
              <label
                htmlFor="first-name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                First name*
              </label>
              <input
                type={"text"}
                name="first_name"
                value={toSend.first_name}
                onChange={handleChange}
                required
                placeholder="John"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Last name*
              </label>
              <input
                type={"text"}
                name="last_name"
                value={toSend.last_name}
                onChange={handleChange}
                required
                placeholder="Doe"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email*
              </label>
              <input
                type={"text"}
                name="email"
                value={toSend.email}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="johndoe@gmail.com"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Subject*
              </label>
              <input
                type={"text"}
                name="subject"
                value={toSend.subject}
                onChange={handleChange}
                placeholder="Moving House"
                required
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Message*
              </label>
              <textarea
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required
                placeholder="I would like to enquire about moving house."
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button
                type="submit"
                className="inline-block bg-black hover:bg-gray-600 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Send
              </button>

              <span className="text-gray-500 text-sm">*Required</span>
            </div>
          </form>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src="/sm_maps.png"
          className=" w-[95%] mb-8 rounded-lg mt-8"
          alt="Image of Shepherd Moves office location on Google Maps"
        ></img>
      </div>
    </>
  );
}

export default ContactUs;
