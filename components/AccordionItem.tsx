import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function AccordionItem({ title, info }: any) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="border-b">
      <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
        <span className="md:text-lg font-semibold transition duration-100">
          {title}
        </span>

        <button
          className="text-indigo-500"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      <p className=" text-gray-500 mb-4">{showInfo && <p>{info}</p>}</p>
    </div>
  );
}

export default AccordionItem;
