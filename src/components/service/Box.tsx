import React from 'react'
import { FaStar } from 'react-icons/fa' // or any icon you like

const Box = ({title, desc}: any) => {
  return (
    <div className="flex bg-[#cee4eede] text-white p-4 rounded-lg">
      {/* Left: Icon */}
      <div className="text-white text-xl mr-4">
        <FaStar />
      </div>

      {/* Right: Title + Desc */}
      <div>
        <h3 className="font-semibold text-[#0B0B0B] text-lg">{title}</h3>
        <p className="text-[#0B0B0B] text-xs mt-1">{desc}</p>
      </div>
    </div>
  )
}

export default Box
