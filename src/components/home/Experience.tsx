import ExperienceCard from '@/components/home/ExpereienceCard/ExperienceCard'
import Image from 'next/image'
import React from 'react'

import { FaMessage } from "react-icons/fa6";
import { TbChessQueenFilled } from "react-icons/tb";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";

const Experience = () => {
  return (
    <section className='bg-primaryDark h-screen flex items-center justify-center' >
        <div className='flex gap-52 max-w-[1200px] items-center justify-center'>
            <Image src={'/Phone.png'} alt='/' width={360} height={570}/>
            <div className=' grid gap-5'>
                <div>
                    <h2 className='text-4xl text-primary font-semibold'>Enhancing your brand’s customer experience</h2>
                    <p className='text-white'>Empowering your brand with innovative strategies to create exceptional customer experiences.</p>
                </div>
                <div>
                    <ExperienceCard icon={<FaMessage />} title='FREE CONSULTATION' desc='Get a free consultaion today and discover tailored digital strategies to grow your business'/>
                    <ExperienceCard icon={<TbChessQueenFilled />} title='FREE CONSULTATION' desc='Get a free consultaion today and discover tailored digital strategies to grow your business'/>
                    <ExperienceCard icon={<LuChartNoAxesCombined />} title='FREE CONSULTATION' desc='Get a free consultaion today and discover tailored digital strategies to grow your business'/>
                    <ExperienceCard icon={<RiCustomerService2Fill />} title='FREE CONSULTATION' desc='Get a free consultaion today and discover tailored digital strategies to grow your business'/>
                </div>
               
            </div>
            
           
        </div>
       
    </section>
  )
}

export default Experience