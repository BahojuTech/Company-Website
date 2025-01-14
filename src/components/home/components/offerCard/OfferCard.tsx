import React, { ReactNode } from 'react'

type  MarketingCardProps = {
    icon?: ReactNode;
    title?: string;
    desc?: string;
}

const OfferCard = ({icon, title, desc}: MarketingCardProps) => {
  return (
    <div className='text-center bg-white  p-3 grid grid-col-4 w-[25%] gap-5 shadow-xl rounded-lg'>
        <div className='text-white text-7xl p-4 rounded-full bg-primary w-fit m-auto'>{icon}</div>

        <div className='font-semibold text-xl px-3 text-primary'>{title}</div>

        <div className=' m-auto leading-5 text-base ' >{desc}</div>
    </div>
  )
}

export default OfferCard