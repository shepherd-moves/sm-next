import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { AiFillHome } from "react-icons/ai";
import { GiBedLamp } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWarehouse, FaMapMarkedAlt } from "react-icons/fa";
import { BsBookshelf } from "react-icons/bs";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";

const handleOpenOutlook = () => {
  const emailAddress = "bookings@shepherdmoves.com.au";
  const subject = "Booking Request";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  // Open the default email client with the pre-filled email.
  window.location.href = mailtoLink;
};

const handleOpenPhone = () => {
  const phoneNumber = "0391128572"; // Replace with the phone number you want to call.
  const telLink = `tel:${phoneNumber}`;

  // Open the phone app with the specified phone number.
  window.location.href = telLink;
};

const features = [
  {
    name: "Residential Homes and Apartments",
    aria_text: "Read more about Residential Homes and Apartments",
    href: "/our-services/residential-homes-and-apartments",
    description:
      "Sales and rentals of a variety of residential homes and apartments.",
    icon: AiFillHome,
  },
  {
    name: "House Staging and Styling",
    aria_text: "Read more about House Staging and Styling",
    href: "/our-services/house-staging-and-styling",
    description:
      "Enhance property appeal for buyers with professional staging and styling.",
    icon: GiBedLamp,
  },
  {
    name: "Office Relocations",
    aria_text: "Read more about Office Relocations",
    href: "/our-services/office-relocations",
    description: "Smooth and efficient office relocation services.",
    icon: HiOfficeBuilding,
  },
  {
    name: "Warehouse Relocations",
    aria_text: "Read more about Warehouse Relocations",
    href: "/our-services/warehouse-relocations",
    description:
      "Comprehensive logistics for large-scale warehouse relocations.",
    icon: FaWarehouse,
  },
  {
    name: "Interstate Relocations",
    aria_text: "Read more about Interstate Relocations",
    href: "/our-services/interstate-relocations",
    description: "Safe and timely interstate relocation services.",
    icon: FaMapMarkedAlt,
  },
  {
    name: "Racking Solutions",
    aria_text: "Read more about Racking Solutions",
    href: "/our-services/racking-solutions",
    description:
      "Optimized storage and organization with innovative racking solutions.",
    icon: BsBookshelf,
  },
];

const callsToAction = [
  { name: "Email", href: "#", icon: MdEmail, onClick: handleOpenOutlook },
  { name: "Call Us", href: "#", icon: PhoneIcon, onClick: handleOpenPhone },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link aria-label="Shepherd Moves logo in white" href="/">
            <Image
              src="/sm-logo-white.svg"
              width={150}
              height={100}
              alt="Tuckshop"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Our Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {features.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2  bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      onClick={item.onClick}
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-white"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="text-sm font-semibold leading-6 text-white"
          >
            Terms of Service
          </Link>
          <a
            href="/packing-materials"
            className="text-sm font-semibold leading-6 text-white"
          >
            Packing Materials
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <Link href="/quote">Get an Estimate</Link>
          </button>
          <button
            type="button"
            onClick={handleOpenPhone}
            className=" flex items-center  gap-1 text-black bg-white hover:bg-black hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <MdPhone /> {/* Icon */}
            <Link href="/quote">Call Us</Link>
          </button>
          <button
            type="button"
            onClick={handleOpenOutlook}
            className=" flex items-center  gap-1 text-black bg-white hover:bg-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <MdEmail /> {/* Icon */}
            <Link href="/quote">Email Us</Link>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/sm-logo-black.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Our Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...features, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
                <Link
                  href="/terms"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/packing-materials"
                  className="-mx-3 block rounded-lg px-3  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Packing Materials
                </Link>
                <div className="grid grid-cols-2  bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      onClick={item.onClick}
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
