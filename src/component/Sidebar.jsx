import React from 'react'
import Accordion from './Accordion';
import { FaRegPlusSquare } from "react-icons/fa";


const Sidebar = () => {
    const accordionData = [
        {
          title: "Racing Sports",
          items: ["Horse Racing", "Greyhound Racing"],
        },
        {
          title: "Others",
          items: ["Our Casino", "Our Virtual", "Live Casino", "Slot Game", "Fantasy Game"],
        },
        {
          title: "All Sports",
          items: [
            "Politics",
            "Cricket",
            "Football",
            "Tennis",
            "Table Tennis",
            "Badminton",
            "Esoccer",
            "Basketball",
            "Volleyball",
            "Snooker",
            "Ice Hockey",
            "E Games",
            "Futsal",
          ],
        },
      ];
    
  return (
    <div className="mt-1 hidden lg:block ">
      {accordionData.map((section, index) => (
        <Accordion
          key={index}
          title={section.title}
          items={
            section.title === "All Sports"
              ? section.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <FaRegPlusSquare className="text-gray-500" />
                    <span>{item}</span>
                  </div>
                ))
              : section.items
          }
        />
      ))}
    </div>
  )
}

export default Sidebar