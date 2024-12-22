import React from 'react';
import { BiSolidLock } from "react-icons/bi";

const TableRow = ({ game, date, icons, odds }) => {
  return (
    <div className="main flex flex-wrap items-center border-b hover:bg-gray-100 transition duration-200 py-2">
      <div className='left w-2/3 flex justify-between'>
        <div className="head sm:flex-1 px-2 py-1">
          <span className='heading'>{`${game}`} {""}</span>
          <span className='date'>{`${date}`}</span>
        </div>

        <div className="flex-1 px-2 py-1 flex items-center space-x-4">
          {icons.map((icon, index) => (
            <span key={index} className="text-gray-900 font-bold">
              {icon}
            </span>
          ))}
        </div>
      </div>
      <div className='versus lg:hidden flex mx-auto'>
          <div className=" font-extrabold  ">1</div>
          <div className="font-extrabold   ">X</div>
          <div className="font-extrabold   ">2</div>
        </div>

      <div className='tbody flex w-1/3 justify-between space-x-2'>
        {odds.map((odd, index) => (
          <div key={index} className="flex-1 px-2 py-1 text-center font-semibold">
            {odd.isLocked ? (
              <div className="relative w-full ">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-white"><BiSolidLock /></span>
                </div>
                <div className="flex">
                  <div className="w-1/2 bg-[#72bbef] text-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
                    {"-"}
                  </div>
                  <div className="w-1/2 bg-[#faa9ba] text-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
                    {"-"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex">
                <div className="w-1/2 bg-[#72bbef] text-center">
                  {odd.leftValue1}
                </div>
                <div className="w-1/2 bg-[#faa9ba] text-center">
                  {odd.rightValue1}
                </div>
              </div>
            )}

            {odd.isLocked ? (
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center justify-center z-10"></div>
                <div className="flex">
                  <div className="w-1/2 bg-[#72bbef] text-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
                  </div>
                  <div className="w-1/2 bg-[#faa9ba] text-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex">
                <div className="w-1/2 bg-[#72bbef] text-center">
                  {odd.leftValue2}
                </div>
                <div className="w-1/2 bg-[#faa9ba] text-center">
                  {odd.rightValue2}
                </div>
              </div>
            )}

            {odd.isLocked ? (
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center justify-center z-10"></div>
                <div className="flex">
                  <div className="w-1/2 bg-[#72bbef] text-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
                  </div>
                  <div className="w-1/2 bg-[#faa9ba] text-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex">
                <div className="w-1/2 bg-[#72bbef] text-center">
                  {odd.leftValue3}
                </div>
                <div className="w-1/2 bg-[#faa9ba] text-center">
                  {odd.rightValue3}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default TableRow;
