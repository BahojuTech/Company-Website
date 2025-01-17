import Image from 'next/image'
import React from 'react'


const strenghts = [
    {title: 'Digital Marketing Services', perc: '100&'},
    {title: 'Software & Mobile App development ', perc: '100&'},
    {title: 'Cloud computing & Storage Solutions', perc: '100&'},
    {title: 'Website Design & Development', perc: '100&'},
    {title: 'Business Branding Solutions', perc: '100&'},
]
const Started = () => {
  return (
    <section className='bg-gray-50 py-10'>
        <div className='grid grid-cols-1 px-6 lg:grid-cols-2 gap-2 justify-between items-center max-w-[1200px] m-auto'>
          
            <div className='flex-1 grid gap-3'>
                <h4 className='text-primaryThick font-bold text-2xl'>Started with passion, building with trust.</h4>
                <p>
                    Our journey began with a deep passion for digital marketing and a desire to help businesses reach their fullest potential. 
                    This passion continues to fuel every project we take on, motivating us to go above and beyond in creating innovative strategies 
                    and delivering outstanding results. Whether working on a new startup or helping a well-established brand, we approach every challenge 
                    with enthusiasm and creativity.
                </p>
                <div className='grid gap-3'>
                    {
                        strenghts.map((str, index) => (
                            <div key={index}>
                                <div className='flex justify-between text-primaryThick font-semibold'> 
                                    <h6>{str.title}</h6>
                                    <p>{str.perc}</p>
                                </div>
                                <div className='border-2 border-primaryThick mt-1' />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex-1 grid place-items-center'>
            <Image src={'/started.png'} alt='image' width={432} height={360}/>
            </div>
        </div>
    </section>
  )
}

export default Started