import React, { useState } from "react";
import logo from "../img/logo.png";
import { FaHome, FaSearchPlus, FaDownload, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerItem = [
    "Home",
    "Lottery",
    "Cricket",
    "Tennis",
    "Football",
    "Table Tennis",
    "Baccarat",
    "32 Cards",
    "Teenpatti",
    "Poker",
    "Lucky7",
  ];

  return (
    <>
      <header className="bg-[#0088cc] flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold flex items-center">
            <FaHome className="lg:hidden mr-2" />
            <img src={logo} alt="Logo" className="h-12 w-28 md:h-16 md:w-32" />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10 text-white text-sm md:text-base">
          <div className="flex space-x-4 items-center">
            <FaSearchPlus className="text-2xl cursor-pointer" />
            <div className="flex flex-col items-start">
              <button className="cursor-pointer text-base font-extrabold">Rules</button>
              <div className="cursor-pointer flex items-center space-x-2">
                <span className="text-base font-extrabold">Download Apk</span>
                <FaDownload />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="text-base font-medium">Balance:</span>
              <span className="font-bold">1500</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-base font-medium">Exp:</span>
              <span className="font-bold">0</span>
            </div>
          </div>
          <div className="relative group">
            <button className="flex cursor-pointer items-center font-medium">
              Demo <span className="ml-1"><FaChevronDown /></span>
            </button>
            <div className="absolute hidden group-hover:block right-5 bg-white text-black text-base rounded shadow-lg mt-1 p-2 z-50">
              <button className="block w-40 text-left px-2 py-1 hover:bg-gray-200">Account Statement</button>
              <button className="block w-40 text-left px-2 py-1 hover:bg-gray-200">Current Bet</button>
              <button className="block w-40 text-left px-2 py-1 hover:bg-gray-200">Casino Results</button>
              <button className="block w-40 text-left px-2 py-1 hover:bg-gray-200">Set Button Values</button>
            </div>
          </div>
        </div>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setDropdownOpen(false); 
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {menuOpen && (
        <div className="bg-[#0088cc] lg:hidden text-white text-sm md:text-base px-4 py-2">
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-4 items-center">
              <FaSearchPlus className="text-2xl cursor-pointer" />
              <button className="text-base font-extrabold">Rules</button>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-base font-medium">Balance:</span>
                <span className="font-bold">1500</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-base font-medium">Exp:</span>
                <span className="font-bold">0</span>
              </div>
            </div>
            <div className="relative">
              <button
                className="flex cursor-pointer items-center font-medium"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Demo <span className="ml-1"><FaChevronDown /></span>
              </button>
              {dropdownOpen && (
                <div className="mt-1 bg-white text-black text-base rounded shadow-lg p-2 z-50">
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">Account Statement</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">Current Bet</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">Casino Results</button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">Set Button Values</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default Header;
