'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const offers = [
    {
        id: 1,
        button: 'Software & Mobile app Development',
        img: '/offer/component3.png',
        link: '/service/software'
    },
    {
        id: 2,
        button: 'Cloud Computing & Storage Solutions',
        img: '/offer/component4.png',
        link: '/service/cloud-computing'    
    },
    {
        id: 3,
        button: 'Trainings & Internship',
        img: '/offer/component5.png',
        link: '/service/training'    
    },
    {
        id: 4,
        button: 'Digital Marketing Services',
        img: '/offer/component.png',
        link: '/service/digital-marketer'    
    },
    {
        id: 5,
        button: 'Business Branding & Storytelling',
        img: '/offer/component2.png',
        link: '/service/business-branding'    
    },
]

const Offer = () => {
    const [activeId, setActiveId] = useState(offers[0].id)
    const bgImage = offers.find(offer => offer.id === activeId)?.img

    return (
        <section className='relative text-white pt-40 pb-14'>
            {/* Background Image */}
            <div className="absolute w-full h-full top-0 left-0 -z-10">
                <Image src={bgImage || ''} alt='' fill className='object-cover' />
            </div>

            <div>
                <h2 className='text-6xl text-center mb-3'>What we offer</h2>
                <div className='h-1 w-[20%] m-auto bg-primary mb-8 font-semibold'></div>
                <p className='max-w-[600px] text-lg text-center mx-auto mb-8'>
                    At Bahoju Tech, we provide cutting-edge digital solutions designed to elevate brands, drive engagement, and maximize growth.
                </p>
                <Link href={'/service'} className='w-fit border-2 border-white px-4 py-4 rounded-full block mb-14 mx-auto'>
                    View our Services
                </Link>

                <div className='grid grid-cols-5 gap-4 max-w-[1200px] m-auto'>
                    {offers.map(offer => (
                        <Link
                            href={offer.link}
                            key={offer.id}
                            onClick={() => setActiveId(offer.id)}
                            className="py-3 px-4 rounded-full flex items-center justify-center text-center transition-colors duration-300 bg-[#797777e3] hover:bg-[#32A0CE] hover:text-white"
                        >
                            {offer.button}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Offer
