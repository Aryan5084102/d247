import React, { useState } from 'react'
import { FaDumbbell, FaDog, FaTableTennis } from 'react-icons/fa';
import { PiBoxingGloveBold, PiSoccerBall } from 'react-icons/pi'; 
import { FaBasketball } from "react-icons/fa6"; 
import { GiTowerFlag, GiCricketBat, GiHorseHead } from 'react-icons/gi';
import { IoMdFootball, IoIosTennisball } from 'react-icons/io';
import BlinkingText from './BlinkingText';
import { MdSportsKabaddi } from 'react-icons/md'; 

const MainHeader = () => {
  const [active, setActive] = useState("Cricket");

  const items = [
    { text: "Fils v Le Tien", icon: "🎾" },
    { text: "Bayern Munich v RB Leipzig", icon: "⚽" },
    { text: "Mensik v Jo Fonseca", icon: "🎾" },
    { text: "Verona v AC Milan", icon: "⚽" },
    { text: "New Zealand Women v Australia", icon: "🏏" },
  ];

  const categories = [
    { text: "Politics", iconComponent: <GiTowerFlag /> },
    { text: "Cricket", iconComponent: <GiCricketBat /> },
    { text: "Football", iconComponent: <IoMdFootball /> },
    { text: "Tennis", iconComponent: <IoIosTennisball /> },
    { text: "Kabaddi", iconComponent: <MdSportsKabaddi /> },
    { text: "Esoccer", iconComponent: <PiSoccerBall /> },
    { text: "Horse Racing", iconComponent: <GiHorseHead /> },
    { text: "Greyhound Racing", iconComponent: <FaDog /> },
    { text: "Table Tennis", iconComponent: <FaTableTennis /> },
    { text: "Basketball", iconComponent: <FaBasketball /> },
    { text: "Boxing", iconComponent: <PiBoxingGloveBold /> },
    { text: "Mixed Martial Arts", iconComponent: <FaDumbbell /> },
  ];

  const headerItem = [
    "Lottery",
    "Sports",
    "Casino",
    "Slots",
    "Fantasy",
    "Sports",
  ];

  return (
    <div className="mainHeader flex flex-col p-2 gap-y-3">
      <div className="flex w-full sm:flex-row sm:flex overflow-x-auto gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 sm:flex sm:w-auto sm:overflow-x-auto">
            <BlinkingText text={item.text} icon={item.icon} />
          </div>
        ))}
      </div>

      <div className="lg:hidden flex space-x-4 overflow-x-auto text-white">
        {headerItem.map((item, index) => (
          <div key={index} className="sm:w-full uppercase text-sm cursor-pointer font-extrabold">
            {item}
          </div>
        ))}
      </div>

      <div className="flex overflow-x-auto bg-gray-100 border border-gray-300 p-2 gap-2">
        {categories.map((category) => (
          <div
            key={category.text}
            onClick={() => setActive(category.text)}
            className={`px-4 py-2 font-medium flex flex-col gap-2 items-center justify-center text-sm rounded-lg flex-shrink-0 ${active === category.text
              ? "bg-[#2c3e50] text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
          >
            <div className="sm:hidden pr-2 text-xl">{category.iconComponent}</div>
            <div>{category.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainHeader;
