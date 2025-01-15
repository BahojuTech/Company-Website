import React, { ReactNode } from 'react'

type  MarketingCardProps = {
    icon?: ReactNode;
    title?: string;
    desc?: string;
}

const MarketingCard = ({icon, title, desc}: MarketingCardProps) => {
  return (
    <div className='text-center bg-white  p-3 grid grid-col-4 w-[25%] gap-5 shadow-[4px_4px_10px_#32A0CE] rounded-lg'>
        <div className='text-white text-7xl p-4 rounded-full bg-primary w-fit m-auto'>{icon}</div>

        <div className='font-semibold text-2xl px-3 text-primary'>{title}</div>

        <div className=' m-auto leading-5 text-base px-6 text-primary font-semibold' >{desc}</div>
    </div>
  )
}

export default MarketingCard