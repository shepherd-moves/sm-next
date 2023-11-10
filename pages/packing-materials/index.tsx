import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const packingMaterials = [
  {
    title: "Book Wine Boxes",
    size: "406x298x431",
    used: false,
    image: "packing-materials/book-wine.png",
    price: "$3.00",
    description:
      "Perfect to move your smaller items safely and securely. Great for books, wine and everything in between.",
  },
  {
    title: "Tea Chest Boxes",
    size: "431x406x596",
    used: false,
    image: "packing-materials/tea-chest.png",
    price: "$5.00",
    description:
      "Perfect to move your larger items safely and securely. We recommend these boxes to move all of your larger items safely and securely.",
  },
  {
    title: "Book Wine Boxes",
    size: "406x298x431",
    used: true,
    image: "packing-materials/book-wine.png",
    price: "$1.90",
    description:
      "Perfect to move your smaller items safely and securely, used condition. ",
  },
  {
    title: "Tea Chest Boxes",
    size: "431x406x596",
    used: true,
    image: "packing-materials/tea-chest.png",
    price: "$2.90",
    description:
      "Perfect to move your larger items safely and securely. used condition.",
  },
  {
    title: "Port-a-Robe Boxes and Metal Rail",
    size: "",
    used: false,
    image: "packing-materials/port-a-robe.png",
    price: "$18.80",
    description:
      "Perfect for moving clothing and fabric items in a safe and secure manner. They can keep items clean and organised during transport and are the perfect solution for transporting clothes. ",
  },
  {
    title: "Bubble Wrap - 10mm thick",
    size: "1500x100",
    used: false,
    image: "packing-materials/bubble-wrap.jpg",
    price: "$2.80 p/meter",
    description:
      "Economic, versatile and effective way of protecting and cushioning your goods against shock and vibration during transit and warehousing",
  },
  {
    title: "Kraft Bubble (for canvas artwork) ",
    size: "",
    used: false,
    image: "packing-materials/kraft-bubble.png",
    price: "$4.20 p/meter",
    description:
      "Kraft backed bubble is a great way for packing canvas art work, prevents products from sweating.",
  },
  {
    title: "Tape",
    size: "",
    used: false,
    image: "packing-materials/tape.png",
    price: "$3.20 each",
    description:
      "We use only the highest quality tape to ensure your boxes are secure and safe for transit and storage.",
  },
  {
    title: "Butchers Paper (15kg Ream)",
    size: "",
    used: false,
    image: "packing-materials/butcher-paper.png",
    price: "$65.00 each",
    description:
      "Butchers paper is great for protecting your fragile items such as glasses, plates, bowls, and all other fragile household items. ",
  },
  {
    title: "Single Bed Mattress Cover",
    size: "",
    used: false,
    image: "packing-materials/single-mattress-cover.png",
    price: "$5.00 each",
    description:
      "This is the perfect solution to protect your single beds from dust and dirt while being transported and stored. ",
  },
  {
    title: "Queen Bed Mattress Cover",
    size: "",
    used: false,
    image: "packing-materials/single-mattress-cover.png",
    price: "$9.00 each",
    description:
      "This is the perfect solution to protect your queen beds from dust and dirt while being transported and stored. ",
  },
  {
    title: "King Bed Mattress Cover",
    size: "",
    used: false,
    image: "packing-materials/single-mattress-cover.png",
    price: "$16.20 each",
    description:
      "This is the perfect solution to protect your king beds from dust and dirt while being transported and stored. ",
  },
  {
    title: "Floor Protection – Ram Board",
    size: "915 x 1000",
    used: false,
    image: "packing-materials/ram-board.png",
    price: "$5.50 p/meter",
    description:
      "This is the perfect option for protecting your floors from scratches and dirt while moving and is completely recyclable.",
  },
  {
    title: "Permanent Markers",
    size: "",
    used: false,
    image: "packing-materials/sharpie.jpg",
    price: "$3.50 each",
    description:
      "Our markers are perfect for labelling your boxes to ensure that your items are easily accessible when packing and unpacking.",
  },
  {
    title: "Tape Gun",
    size: "",
    used: false,
    image: "packing-materials/tape-gun.png",
    price: "$25.00 each",
    description:
      "Tape guns are the perfect solution for ensuring an easy application for tape for all of your boxes.",
  },
  {
    title: "Quilted Removalist Blanket",
    size: "",
    used: false,
    image: "packing-materials/blanket.png",
    price: "$20.00 each",
    description:
      "Our quilted removalist blankets are of the highest quality and are the perfect solution to protect your items either while moving or in storage. ",
  },
  {
    title: "Stretch Wrap (100mm x 300m x 20um)",
    size: "",
    used: false,
    image: "packing-materials/stretch-wrap-500-400-25.png",
    price: "$15.00 each",
    description:
      "The small rolls of Stretch Wrap are perfect to protect sharp edges on all your fragile items.",
  },
  {
    title: "Stretch Wrap (500mm x 400m x 25um)",
    size: "",
    used: false,
    image: "packing-materials/stretch-wrap-100.png",
    price: "$40.00 each",
    description:
      "These large rolls of Stretch Wrap are perfect to protect all your larger furniture items.",
  },
  {
    title: "Floor Protection Round Felt for Chairs - 50 Pack",
    size: "",
    used: false,
    image: "packing-materials/chair-pad.jpg",
    price: "$15.00",
    description:
      "These felt patches are perfect to protect your floors from your furniture by creating a seamless smooth surface for the feet of your furniture. ",
  },
  {
    title: "Felt Plate Drawer Liners",
    size: "",
    used: false,
    image: "packing-materials/drawer-liner.jpg",
    price: "$18.00 each",
    description:
      "This soft felt mat fits in almost any drawer that exists - with a little help of a pair of scissors. Cut it into the right size and just like that you have a smooth protection of both drawers and the things you store.",
  },
  {
    title: "Fragile Tape",
    size: "",
    used: false,
    image: "packing-materials/fragile-tape.avif",
    price: "$4.00 each",
    description:
      "The perfect solution for securing your delicate and fragile items during shipping or transportation to let the recipient know that they need to be handled with care. ",
  },
];

const movingPacks = [
  {
    title: "1 Bed",
    contents: [
      {
        title: "5 x Book Wine Boxes",
      },
      {
        title: "5 x Tea Chest Boxes",
      },
      {
        title: "1 x Port-a-Robe",
      },
      {
        title: "1 x 5KG Butchers Paper",
      },
      {
        title: "2 x Packing Tape",
      },
      {
        title: "1 x Tape Gun",
      },
      {
        title: "1 x Queen/King Mattress",
      },
      {
        title: "1 x Marker Pen",
      },
    ],
  },
  {
    title: "2 Bed",
    contents: [
      {
        title: "10 x Book Wine Boxes",
      },
      {
        title: "10 x Tea Chest Boxes",
      },
      {
        title: "2 x Port-a-Robe",
      },
      {
        title: "1 x 10KG Butchers Paper",
      },
      {
        title: "4 x Packing Tape",
      },
      {
        title: "1 x Tape Gun",
      },
      {
        title: "2 x Queen/King Mattress",
      },
      {
        title: "1 x Marker Pen",
      },
    ],
  },
  {
    title: "3 Bed",
    contents: [
      {
        title: "15 x Book Wine Boxes",
      },
      {
        title: "15 x Tea Chest Boxes",
      },
      {
        title: "3 x Port-a-Robe",
      },
      {
        title: "1 x 15KG Butchers Paper",
      },
      {
        title: "6 x Packing Tape",
      },
      {
        title: "1 x Tape Gun",
      },
      {
        title: "3 x Queen/King Mattress",
      },
      {
        title: "1 x Marker Pen",
      },
    ],
  },
  {
    title: "4 Bed",
    contents: [
      {
        title: "20 x Book Wine Boxes",
      },
      {
        title: "20 x Tea Chest Boxes",
      },
      {
        title: "4 x Port-a-Robe",
      },
      {
        title: "2 x 15KG Butchers Paper",
      },
      {
        title: "8 x Packing Tape",
      },
      {
        title: "1 x Tape Gun",
      },
      {
        title: "4 x Queen/King Mattress",
      },
      {
        title: "1 x Marker Pen",
      },
    ],
  },
  {
    title: "Kitchen Pack",
    contents: [
      {
        title: "10 x Book Wine Boxes",
      },
      {
        title: "20 x Tea Chest Boxes",
      },
      {
        title: "2 X 15KG Butchers Paper",
      },
      {
        title: "8 x Packing Tape",
      },

      {
        title: "1 x Tape Gun",
      },
      {
        title: "1 x Marker Pen",
      },
    ],
  },
];

const PackingMaterials = () => {
  const [isPackingMaterialsVisible, setIsPackingMaterialsVisible] =
    useState(true);

  const handlePackingMaterialsClick = () => {
    setIsPackingMaterialsVisible(true);
  };

  const handleMovingPacksClick = () => {
    setIsPackingMaterialsVisible(false);
  };

  return (
    <>
      <Head>
        <title>Packing Materials | Shepherd Moves</title>
        <meta
          name="description"
          content="Find top-quality packing materials at Shepherd Moves to secure your belongings for transit. From boxes to bubble wrap, get all you need. Shop now for your moving essentials."
        />
      </Head>
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
        <div className="flex gap-2 items-center">
          <p>Filter by:</p>
          <button
            onClick={() => handlePackingMaterialsClick()}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 active:bg-slate-50 active:text-black"
          >
            Packing Materials
          </button>
          <button
            onClick={() => handleMovingPacksClick()}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Moving Packs
          </button>
        </div>

        {isPackingMaterialsVisible ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {packingMaterials.map((item) => (
              <div>
                <a className="group h-80 block bg-white rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
                  <img
                    src={item.image}
                    loading="lazy"
                    alt={item.title}
                    className="w-full h-full object-cover scale-50 object-center group-hover:scale-90 transition duration-500 ease-in-out"
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
                    <p className="text-gray-800 text-lg lg:text-xl font-bold transition duration-100">
                      {item.title}
                    </p>
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
                <p className="px-2">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            Moving Packs
          </div>
        )}
      </div>
    </>
  );
};

export default PackingMaterials;
