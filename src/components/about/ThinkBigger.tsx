import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoPeople } from 'react-icons/io5';
import { FaFile } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa6';
import ArchieveStat from '@/components/home/archievedStat/ArchieveStat';


const ThinkBigger = () => {
  return (
    <section className='bg-primaryLight py-28 px-6 relative'>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl absolute -top-11 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 mb-7 shadow-lg">
        <ArchieveStat number={300} desc="CLIENTS" icon={<IoPeople />} />
        <ArchieveStat number={500} desc="PROJECTS" icon={<FaFile />} />
        <ArchieveStat
          number={1250}
          desc="HOURS OF SUPPORT"
          icon={<RiCustomerService2Fill />}
        />
        <ArchieveStat number={14} desc="PROFESSIONAL EMPLOYEES" icon={<FaUserShield />} />
      </div>
        <div className='grid lg:flex max-w-[1200px] m-auto justify-between items-center gap-2'>
            <h4 className='flex-1 text-4xl text-primaryThick font-bold'>Think bigger, build <br /> Smarter, solve harder</h4>

            <p className='flex-1'>
            At <span className='text-primary font-bold'>BAHOJU</span>  Tech, we believe in thinking beyond the conventional, building with intelligence, 
            and tackling challenges head-on. In a world where digital transformation is rapidly evolving,
            we aim to lead, not follow. Our philosophy is simple: <span className='text-primary font-bold'>Think Bigger, Build Smarter,</span> and <span className='text-primary font-bold'>Solve Harder.</span> 
            </p>
        </div>
    </section>
  )
}

export default ThinkBigger