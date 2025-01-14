import ArchieveStat from '@/components/home/archievedStat/ArchieveStat'
import Image from 'next/image'
import React from 'react'

const Archieve = () => {
  return (
    <section className='h-screen flex items-center justify-center' >
        {/* Wrapper */}
        <div className=' w-full relative p-36 '>
            <div className="absolute w-full h-full top-0 left-0 -z-10 ">
                <Image src={'/homepage background.png'} alt='' fill className='object-cover blur-sm ' />
            </div>
            

            <div className='flex m-auto gap-52 max-w-[1200px] items-center justify-center'>
                <div className=' grid gap-10 text-center'>
                    <div>
                        <h4 className='text-4xl text-white  mb-2'>What we have achieved so far</h4>
                    </div>
                    <div  className='  flex gap-44  mx-auto'>
                        <ArchieveStat  number={300} desc='Client'/>
                        <ArchieveStat  number={500} desc='Project'/>
                        <ArchieveStat  number={14} desc='Professional Employees'/>
                        <ArchieveStat  number={1250} desc='Hours of Suppor'/>
                    </div>
                </div>
            </div>

        </div>
       
    </section>
  )
}

export default Archieve