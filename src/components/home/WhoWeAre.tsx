import Image from 'next/image'
import React from 'react'

const missionStatement = [
  {id:1, mission: 'To pioneer the development of cutting-edge technology solutions that address critical challenges, driving digital transformation and achieving significant business outcomes. '},
  {id:2, mission: 'To cultivate and empower emerging talent through targeted skill development, enabling the next generation to innovate and lead in the digital sphere.'},
  {id:3, mission: 'To provide businesses with scalable, data-driven strategies that optimize operational efficiency, enhance customer engagement, and foster sustainable growth.'}
]

const visionStatement = [
  {id:1, mission: 'To establish Ledih as a preeminent global leader in digital innovation, delivering transformative solutions that catalyze business success and drive sustained industry growth.'},
  {id:2, mission: 'To redefine brand-audience engagement through advanced technology and data-driven strategic solutions.'},
]


const WhoWeAre = () => {
  return (
    <section className='bg-primaryDark py-20 flex items-center justify-center'>
      <div className='grid gap-11 text-center lg:text-left lg:grid-cols-2 md:gap-16 max-w-[1200px] px-6'>
        {/* Left Content */}
        <div className='grid gap-5'>
          <div>
            <h2 className='text-4xl text-primary font-semibold mb-2'>Who we are</h2>
            <h3 className='text-lg text-primary font-semibold'>
              We deliver revenue-generating digital marketing solutions.
            </h3>
            <p className='text-white font-semibold'>
              Bahoju is a tech company dedicated to delivering cutting-edge technology solutions while equipping individuals with the skills to thrive in a digital world.
            </p>
          </div>
          <div>
            <h2 className='text-3xl text-primary font-semibold mb-2'>Our Mission</h2>
            <ol className='text-white font-semibold pl-5'>
              {
                missionStatement.map(mission => <li key={mission.id} className='list-decimal'>{mission.mission}</li>)
              }
            </ol>
          </div>
          <div>
            <h2 className='text-3xl text-primary font-semibold mb-2'>Our Vision</h2>
            <ol className='text-white font-semibold pl-5'>
              {
                visionStatement.map(mission => <li className='list-decimal' key={mission.id}>{mission.mission}</li>)
              }
            </ol>
          </div>
        </div>

        {/* Centered Image */}
        <div className='flex items-center justify-center'>
          <Image
            src={'/BJT_logo.jpg'}
            alt='Bahoju logo'
            width={450}
            height={1000}
            className='object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre;
