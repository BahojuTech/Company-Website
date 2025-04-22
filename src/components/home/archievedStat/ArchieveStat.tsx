import React from 'react'

type ArchieveCardProps = {
  number?: number;
  desc?: string;
  icon?: any;
}

const ArchieveStat = ({ number, desc, icon }: ArchieveCardProps) => {
  return (
    <div className="flex justify-center gap-4  py-1">
      
      {/* Icon Box */}
      <div className="bg-primary text-white text-2xl w-12 h-12 flex items-center justify-center rounded-xl">
        {icon}
      </div>

      {/* Text Content */}
      <div className="">
        <div className="font-bold text-3xl">{number}</div>
        <div className="leading-5 text-xs max-w-44 ">{desc}</div>
      </div>

    </div>
  )
}

export default ArchieveStat
