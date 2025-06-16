import ArchieveStat from '@/components/home/archievedStat/ArchieveStat'
import Image from 'next/image'
import React from 'react'

const Archieve = () => {
  return (
    <section className=' flex items-center justify-center relative' >
        {/* Wrapper */}
            <div className="absolute w-full h-full top-0 left-0 -z-10 ">
                <Image src={'/homepage background.png'} alt='' fill className='object-cover blur-sm ' />
            </div>
            

            <div className='flex gap-52 max-w-[1200px] items-center justify-center'>
                <div className=' py-20 grid gap-10 text-center'>
                    <h4 className='text-4xl text-white px-6  mb-2'>What we have achieved so far</h4>
                   
                </div>
            </div>
       
    </section>
  )
}

export default Archieve



// import ArchieveStat from '@/components/home/archievedStat/ArchieveStat';
// import Image from 'next/image';
// import React from 'react';

// const Archieve = () => {
//   return (
//     <section className="py-16 flex items-center justify-center bg-primaryLight relative">
//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src={'/homepage background.png'}
//           alt="Background"
//           fill
//           className="object-cover blur-md"
//         />
//       </div>

//       {/* Wrapper */}
//       <div className="w-full px-6 md:px-12 max-w-[1200px]">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h4 className="text-3xl md:text-4xl text-white font-bold">
//             What we have achieved so far
//           </h4>
//         </div>

//         {/* Stats */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
//           <ArchieveStat number={300} desc="Clients" />
//           <ArchieveStat number={500} desc="Projects" />
//           <ArchieveStat number={14} desc="Professional Employees" />
//           <ArchieveStat number={1250} desc="Hours of Support" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Archieve;
