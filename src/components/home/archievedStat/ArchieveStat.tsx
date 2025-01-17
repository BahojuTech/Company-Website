import React, { ReactNode } from 'react'

type  ArchieveCardProps = {
    number?: number;
    desc?: string;
}

const ArchieveStat = ({ number, desc}: ArchieveCardProps) => {
  return (
    <div className='text-center  shadow-xl rounded-lg'>
        

        <div className='text-2xl font-semibold text-primary'>{number}</div>

        <div className='text-white m-auto leading-5 text-lg text-primarys' >{desc}</div>
    </div>
  )
}

export default ArchieveStat