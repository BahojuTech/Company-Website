import Image from 'next/image';
import React from 'react'

type  MarketingCardProps = {
    img?: string;
    title?: string;
    name?:string;
    desc?: string;
}

const TestimonialCard = ({img, title, name, desc}: MarketingCardProps) => {
  return (
    <div className='text-center bg-white p-3 place-items-center grid grid-col-4 w-[25%] gap-5 rounded-lg'>
        <div className=' m-auto min-h-[150px] leading-5 px-6 font-semibold' >{desc}</div>
        
        <Image src={img || ''} alt='image' width={73.18} height={71.2} className='m-auto' />
           
        <div>
            <div className='font-medium text-primary'>{name}</div> 
            <div className='font-medium text-primary'>{title}</div> 
        </div>
        
    </div>
  )
}

export default TestimonialCard