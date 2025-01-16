import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='bg-primaryDark py-20 flex items-center justify-center' >
        <div className='flex gap-52 max-w-[1200px] items-center justify-center'>
            <div className=' grid gap-5'>
                <div>
                    <h2 className='text-4xl text-primary font-semibold mb-2'>Who we are</h2>
                    <h3 className='text-lg text-primary font-semibold'>We deliver revenue-generating digital marketing solutions.</h3>
                    <p className='text-white font-semibold'>Bahoju is a tech company dedicated to delivering cutting-edge technology solutions while equipping individuals with the skills to thrive in a digital world. </p>
                </div>
                <div>
                    <h2 className='text-3xl text-primary font-semibold mb-2'>Our Mission</h2>
                    <p className='text-white font-semibold'>Bahoju is a tech company dedicated to delivering cutting-edge technology solutions while equipping individuals with the skills to thrive in a digital world. </p>
                </div>
                <div>
                    <h2 className='text-3xl text-primary font-semibold mb-2'>Our Vision</h2>
                    <p className='text-white font-semibold'>Bahoju is a tech company dedicated to delivering cutting-edge technology solutions while equipping individuals with the skills to thrive in a digital world. </p>
                </div>
            </div>
            
            <Image src={'/BJT_logo.jpg'} alt='/' width={450} height={1000}/>
        </div>
       
    </section>
  )
}

export default WhoWeAre