import React, { ReactNode } from 'react'
import Button from '../../Button/Button';

type  MarketingCardProps = {
    icon?: ReactNode;
    title?: string;
    desc?: string;
    bgButton?:boolean;
}

const OfferCard = ({icon, title, desc, bgButton}: MarketingCardProps) => {
  return (
    <div className='text-center bg-white  p-3 grid  gap-5 shadow-xl rounded-lg'>
        <div className='text-white text-7xl p-4 rounded-full bg-primary w-fit m-auto'>{icon}</div>

        <div className='font-semibold text-xl px-3 text-primary'>{title}</div>

        <div className=' m-auto leading-5 text-base ' >{desc}</div>

        <Button text='Learn more' bg={bgButton}/>
    </div>
  )
}

export default OfferCard