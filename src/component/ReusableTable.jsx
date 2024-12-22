import React from 'react'
import TableRow from './TableRow'

const ReusableTable = ({ data }) => {
  return (
    <div className=" overflow-auto border  border-gray-300 rounded-md">
      <div className=" header flex flex-wrap  bg-gray-200 text-black font-extrabold text-xs uppercase">
        <div className='w-2/3  flex justify-between'>
          <div className="flex-1 px-2 py-2 text-left">Game</div>
          <div className="flex-1 px-2 py-2 text-left"></div>
        </div>
        <div className='w-1/3 flex justify-between'>
          <div className="flex-1 px-2 py-2 text-center">1</div>
          <div className="flex-1 px-2 py-2 text-center">X</div>
          <div className="flex-1 px-2 py-2 text-center">2</div>
        </div>
      </div>

      <div>
        {data.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </div>
    </div>
  )
}

export default ReusableTable
