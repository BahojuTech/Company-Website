import React, { ReactNode } from 'react'

type ExperienceProps = {
    icon?: ReactNode;
    title?: string;
    desc?:string;
}

const ExperienceCard = ({icon, title, desc}: ExperienceProps) => {
  return (
    <div className='flex gap-5 w-[90%] mb-3 items-center'>
        <div className='text-white text-2xl bg-primary p-5 rounded-full'>{icon}</div>

        <div>
            <h6 className='text-lg text-primary font-semibold'>{title}</h6>
            <p className='text-white '>{desc}</p>
        </div>
    </div>
  )
}

export default ExperienceCard