import Image from 'next/image'
import React from 'react'

type BrandProps = {
  title?: string;
  img?: string;
  children: any;
}

const Brand = ({title, img, children}: BrandProps) => {
  return (
    <section className='py-20 flex items-center justify-center' >
        <div className='grid text-center lg:text-left gap-6  lg:flex gap-x-16 max-w-[1200px] items-center justify-center px-6'>
            <div className='flex-1'>
              <h3 className='text-2xl text-primary font-semibold mb-5'>{title}</h3>
              <div className='flex lg:block justify-center items-center'>
               <Image src={img || ''} alt='/' width={500} height={354} />
              </div>
            </div>
            <div className=' grid gap-5 flex-1 text-lg'>
             {children}
            </div>
        </div>
       
    </section>
  )
}

export default Brand