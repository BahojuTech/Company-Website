import Link from 'next/link'
import React from 'react'
import { FaRegFaceSmileBeam } from 'react-icons/fa6';
import { GoDotFill } from "react-icons/go";
import { GrPersonalComputer } from 'react-icons/gr';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiFlowerFill } from 'react-icons/ri';

const join = [
    {
        title: 'Diverse Work Environment',
        desc: 'We foster an inclusive environment where diverse perspectives are valued.',
        icon: <RiFlowerFill />,
        bg: '#BFECFF',
        color: 'black'
    },
     {
        title: 'Brand New Laptop',
        desc: 'We set you up for success with a new laptop and the essential digital tools you need to perform at your best.',
        icon: <GrPersonalComputer />,
        bg: '#005F87',
        color: 'white'
    },
     {
        title: 'Amazing Colleagues',
        desc: 'Work alongside talented, supportive teammates in an inspiring environment.',
        icon: <FaRegFaceSmileBeam />,
        bg: '#BFECFF',
        color: 'black'
    },
     {
        title: 'Training & Development',
        desc: 'We provide diverse training opportunities to support your growth and in your career journey.',
        icon: <FaRegFaceSmileBeam />,
        bg: '#BFECFF',
        color: 'black'
    },
     {
        title: 'Birthdays',
        desc: "We don't just remember your birthday — we celebrate you. Expect a little extra love on your special day.",
        icon: <LiaBirthdayCakeSolid />,
        bg: '#BFECFF',
        color: 'black'
    },
    
]

const page = () => {

  const firstThree = join.slice(0, 3)
  const lastTwo = join.slice(3)
  return (
    <section>
        <div className='bg-[#BFECFF] h-screen flex justify-center items-center'>
            <div className='text-center'>
                <h2 className='font-semibold text-7xl mb-8'>Join the <span className='text-[#005F87]'>Team</span></h2>
                <p className='text-xl max-w-[900px] mb-10'>Our team is a collective of creative, agile, and future-focused minds, dedicated to making technology more accessible and impactful for everyone.</p>
                <Link href={'/'} className='bg-[#005F87] text-white p-4 rounded-lg'>See all open positions</Link>
            </div>
        </div>
        {/* second part */}
        <div className='max-w-[1300px] mx-auto pt-20 pb-16'>
            <div>
                <h4 className='font-semibold text-3xl mb-4'>Why should you join us?</h4>
                <p className='text-xl max-w-[600px] mb-14'>We cultivate an inclusive space where a diverse, passionate team can come together, collaborate, and do their best work.</p>
            </div>

            <div className='flex justify-between items-stretch mb-12 gap-5'>
            {firstThree.map(join => (
                <div
                key={join.title}
                style={{ backgroundColor: join.bg, color: join.color }}
                className="relative text-center max-w-96 w-full pt-16 pb-6 px-4 rounded-xl flex flex-col items-center"
                >
                <div className="absolute -top-6 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                    {/* Replace this with actual icon if available */}
                    <span className="text-xl text-[#005F87]">{join.icon}</span>
                </div>
                <h6 className="font-semibold text-xl mb-3">{join.title}</h6>
                <p>{join.desc}</p>
                </div>
            ))}
            </div>

            <div className='flex justify-between items-stretch gap-5'>
            {lastTwo.map(join => (
                <div
                key={join.title}
                style={{ backgroundColor: join.bg, color: join.color }}
                className="relative text-center max-w-96 w-full pt-16 pb-6 px-4 rounded-xl flex flex-col items-center"
                >
                <div className="absolute -top-6 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-xl">{join.icon}</span>
                </div>
                <h6 className="font-semibold text-xl mb-3">{join.title}</h6>
                <p>{join.desc}</p>
                </div>
            ))}
            </div>

        </div>
        {/* third prat */}
        <div className='bg-[#2885AB] pb-20 pt-10'>
            <div className='max-w-[1300px] mx-auto'>
                <h5 className='text-white text-2xl font-semibold mb-8'>All open positions</h5>
                <div className='max-w-[862px] bg-white p-7 rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5'>
                            <h6 className='font-semibold'>Business Acquisition Executive</h6>
                            <span className='bg-[#E2FAFF] text-[#005F87] py-1 px-2 rounded-full flex items-center gap-1'> <GoDotFill /> Growth & Acquisitions</span>
                        </div>
                        <Link href={'/'} className='text-[#005F87] flex items-center gap-2 font-semibold'>Apply <MdArrowOutward /></Link>
                    </div>
                    <p className='text-neutral-600 mb-2'>
                        As a Business Acquisitions Executive, you will play a crucial role in driving the growth and expansion of
                        our merchant network. You will be responsible for identifying, prospecting, and acquiring new
                        merchants to enhance our business ecosystem. This role requires a strategic thinker with excellent
                        interpersonal skills and a proven track record in merchant acquisitions.
                    </p>
                    <div>
                        <div className='flex items-center gap-1'> <MdOutlineCalendarMonth className='text-neutral-500' /> Full Time</div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </section>
  )
}

export default page