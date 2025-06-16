import Image from 'next/image'
import React from 'react'

const Brand = ({img, children}: any) => {
  return (
    <section>
      <div className='flex'>
        <div className='relative flex-[53%]'>
          <Image src={img} alt='image' fill  />
        </div>
        <div className='flex-[47%] bg-primary text-white px-12 pt-10 pb-32 text-sm'>
          {children}
        </div>

      </div>
    </section>
  )
}

export default Brand