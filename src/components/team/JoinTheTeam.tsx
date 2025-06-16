import Image from 'next/image'
import React from 'react'

const JoinTheTeam = () => {
  return (
    <section className='relative py-10 bg-gray-100'>
        {/* box */}
        <div className='w-[80%] mx-auto mt-8'>
            <div className='grid grid-cols-2 gap-8 mt-8 '>
                
                <div className='bg-[#ffffff48] p-6 rounded-2xl shadow-lg'>
                    <h6 className='text-2xl mb-5'>Still have questions?</h6>
                    <p className='mb-6'>
                    Reach out anytime. We're happy to assist you!
                    </p>
                    <button className="border-[#005F87] border-2 text-[#005F87] px-4 py-2 rounded-full text-sm hover:bg-[#006699] hover:text-white transition-colors">
                    Contact Support Center
                    </button>
                </div>

                <div className='bg-[#ffffff48] p-6 rounded-2xl shadow-lg'>
                    <p className='mb-6'>
                    Explore our blog for insightful and engaging content that brings the world of technology, innovation, and consulting to life
                    </p>
                    <button className="border-[#005F87] border-2 text-[#005F87] px-4 py-2 rounded-full text-sm hover:bg-[#006699] hover:text-white transition-colors">
                    Explore
                    </button>
                </div>
                
            </div>
        </div>
       
    </section>
  )
}

export default JoinTheTeam