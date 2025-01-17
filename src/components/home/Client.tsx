import Image from 'next/image'
import React from 'react'

const Client = () => {
  return (
   <section className='m-auto max-w-[1200px] py-24 bg-gray-50 ' > 
     <div className='text-center px-6'>
        <h6 className='text-primary mb-2 text-xl font-semibold'>We have more than 200 satisified clients that works with us</h6>
       <div className='w-fit overflow-hidden m-auto flex gap-16'>
        <div className='flex max-w-fit m-auto gap-16 infinite-scroll-right'>
            <Image src={'/AwwwARDS.png'} alt='/' width={80} height={30.2}/>
            <Image src={'/envato.png'} alt='/' width={80} height={30.2}/>
            <Image src={'/Pixeden.png'} alt='/' width={80} height={30.2}/>
        </div>
       </div>
    </div>
   </section>
  )
}

export default Client