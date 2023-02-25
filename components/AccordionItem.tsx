import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function AccordionItem({ title, info }: any) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="border-b">
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="flex justify-between text-black hover:text-gray-500 active:text-black cursor-pointer gap-2 py-4"
      >
        <span className="md:text-lg font-semibold transition duration-100">
          {title}
        </span>

        <button className="text-black" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      <p className=" text-black mb-4">{showInfo && <p>{info}</p>}</p>
    </div>
  );
}

export default AccordionItem;
