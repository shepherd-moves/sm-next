import React from "react";
import Link from "next/link";

const packingMaterials = [
  {
    title: "Book Wine Boxes",
    size: "406x298x431",
    used: false,
    image: "packing-materials/book-wine.png",
    price: "$3.00",
  },
  {
    title: "Tea Chest Boxes",
    size: "431x406x596",
    used: false,
    image: "packing-materials/tea-chest.png",
    price: "$5.00",
  },
  {
    title: "Book Wine Boxes",
    size: "406x298x431",
    used: true,
    image: "packing-materials/book-wine.png",
    price: "$1.90",
  },
  {
    title: "Tea Chest Boxes",
    size: "431x406x596",
    used: true,
    image: "packing-materials/tea-chest.png",
    price: "$2.90",
  },
  {
    title: "Port-a-Robe Boxes and Metal Rail",
    size: "",
    used: false,
    image: "packing-materials/port-a-robe.png",
    price: "$18.80",
  },
  {
    title: "Bubble Wrap - 10mm thick",
    size: "1500x100",
    used: false,
    image: "packing-materials/bubble-wrap.jpg",
    price: "$2.60 p/meter",
  },
  {
    title: "Kraft Bubble (for canvas artwork) ",
    size: "",
    used: false,
    image: "packing-materials/kraft-bubble.png",
    price: "$4.20 p/meter",
  },
  {
    title: "Tape",
    size: "",
    used: false,
    image: "packing-materials/tape.png",
    price: "$3.20 each",
  },
  {
    title: "Butchers Paper (15kg Ream)",
    size: "",
    used: false,
    image: "packing-materials/butcher-paper.png",
    price: "$65.00 each",
  },
  {
    title: "Single Bed Mattress Cover",
    size: "",
    used: false,
    image: "packing-materials/single-mattress-cover.png",
    price: "$5.00 each",
  },
  {
    title: "Queen Bed Mattress Cover",
    size: "",
    used: false,
    image: "packing-materials/single-mattress-cover.png",
    price: "$7.00 each",
  },
  {
    title: "King Bed Mattress Cover",
    size: "",
    used: false,
    image: "packing-materials/single-mattress-cover.png",
    price: "$16.20 Each",
  },
  {
    title: "Floor Protection – Ram Board",
    size: "915 x 1000",
    used: false,
    image: "packing-materials/ram-board.png",
    price: "$5.50 p/meter",
  },
  {
    title: "Permanent Markers",
    size: "",
    used: false,
    image: "packing-materials/sharpie.jpg",
    price: "$3.50 each",
  },
  {
    title: "Tape Gun",
    size: "",
    used: false,
    image: "packing-materials/tape-gun.png",
    price: "$25.00 Each",
  },
  {
    title: "Quilted Removalist Blanket",
    size: "",
    used: false,
    image: "packing-materials/blanket.png",
    price: "$17.00 each",
  },
  {
    title: "Stretch Wrap (100mm x 300m x 20um)",
    size: "",
    used: false,
    image: "packing-materials/stretch-wrap-500-400-25.png",
    price: "$15.00 each",
  },
  {
    title: "Stretch Wrap (500mm x 400m x 25um)",
    size: "",
    used: false,
    image: "packing-materials/stretch-wrap-100.png",
    price: "$40.00 each",
  },
  {
    title: "Floor Protection Round Felt for Chairs - 50 Pack",
    size: "",
    used: false,
    image: "packing-materials/chair-pad.jpg",
    price: "$15.00",
  },
  {
    title: "Felt Plate Drawer Liners",
    size: "",
    used: false,
    image: "packing-materials/drawer-liner.jpg",
    price: "$18.00 Each",
  },
];

const PackingMaterials = () => {
  return (
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto pb-4 mb-10">
      <div className="mb-10 mt-10 md:mb-16">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Packing Materials
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          We have a range of packing materials available for purchase. Please
          <Link href="/contact-us" className="font-bold">
            {" "}
            contact
          </Link>{" "}
          our office for more information or to place an order.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
        {packingMaterials.map((item) => (
          <div>
            <a
              href="#"
              className="group h-80 block bg-white rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
            >
              <img
                src={item.image}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="w-full h-full object-cover scale-50 object-center group-hover:scale-110 transition duration-500 ease-in-out"
              />

              <div className="flex gap-2 absolute left-0 bottom-2">
                {item.used && (
                  <span className="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
                    Used
                  </span>
                )}
                <span className="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5"></span>
              </div>
            </a>

            <div className="flex justify-between items-start gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >
                  {item.title}
                </a>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-gray-600 lg:text-lg font-bold">
                  {item.price}
                </span>
                {/* <span className="text-red-500 text-sm line-through">
                  $39.99
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackingMaterials;
