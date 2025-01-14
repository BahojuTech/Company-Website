// import Image from 'next/image'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className=" h-[110vh] flex justify-center items-center relative">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <Image src={'/homepage background.png'} alt='' fill sizes='100vw' className='object-ontain' />
        </div>
        <div className='text-center'>
         <h1 className='text-white text-5xl font-bold mb-1'>Elevate Your Business with <span className='text-primaryThick'>BAHOJU's</span> <br />  Expertise </h1>
         <p className='text-white font-semibold mb-2'>Innovative marketing strategies tailored to your business goals by BAHOJU</p>
         <div className='flex gap-2 w-fit m-auto text-primaryThick border-2 border-primaryThick font-semibold p-2 rounded-lg'>
            <span>Get started</span>
            <span>icon</span>
         </div>
        </div>
    </section>
  )
}

export default Hero