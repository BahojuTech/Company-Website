import Image from 'next/image'
import React from 'react'

const TheTeam = () => {
  return (
    <section className='bg-primary py-20 flex items-center justify-center'>
        <div className='grid gap-11 text-center lg:text-left lg:grid-cols-2 md:gap-16 max-w-[1200px] px-6'>

        {/* Centered Image */}
        <div className='flex items-center justify-center'>
            <Image
            src={'/team/team.png'}
            alt='Bahoju logo'
            width={526}
            height={1000}
            className='object-contain'
            />
        </div>

        {/* right Content */}
            <div>
            <h2 className='text-4xl text-white font-semibold mb-5'>The Team</h2>
            <p className='text-white font-semibold mb-3'>
            At Bahoju, our experienced and dedicated team forms the cornerstone of our client-centric approach. We are deeply committed to understanding your business objectives and providing the support you need to thrive.
            </p>
            <p className='text-base text-white font-semibold mb-2'>
            Our collaborative spirit and diverse skill sets enable us to work seamlessly with you, delivering innovative solutions and ensuring your complete satisfaction. We are more than just a service provider; we are your trusted technology partner.
            </p>

            <button className="text-[#005F87] px-4 py-2 rounded-full border-[#005F87] border-2 text-sm hover:bg-[#006699] hover:text-white hoverfont-semibold transition-colors">
              Download Brochure
            </button>
            </div>

            
        </div>
    </section> 
    )
}

export default TheTeam