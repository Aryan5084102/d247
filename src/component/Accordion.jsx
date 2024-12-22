import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";

const Accordion = ({title, items}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-t border-gray-300">
    <div
      className="bg-[#0088cc] text-white font-bold px-4 py-2 flex justify-between items-center cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{title}</span>
      <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>

    {isOpen && (
      <div className="bg-gray-200">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-sm border-t border-gray-300 cursor-pointer hover:bg-gray-300"
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Accordion