import Image from 'next/image';
import React from 'react';

// const values = [
//   {
//     id: 1,
//     header: 'Bold, Not Reckless',
//     desc: 'We take smart risks, challenge the norm, and push boundaries—without compromising on quality or purpose.',
//   },
//   {
//     id: 2,
//     header: 'Quality',
//     desc: "Whether it's the precision of our code, the aesthetics of our designs, or the reliability of our services, we believe that every detail matters in delivering excellence.",
//   },
//   {
//     id: 3,
//     header: 'Innovation',
//     desc: 'We drive change with innovative tech, grounded in ethics, fairness, and accountability.',
//   },
//   {
//     id: 4,
//     header: 'Passion',
//     desc: 'We build to leave a lasting impact on individuals, industries, and society as a whole.',
//   },
//   {
//     id: 5,
//     header: 'Growth',
//     desc: 'We cultivate a culture of learning, experimentation, and improvement, empowering our team to evolve alongside the tech we create.',
//   },
// ];


  const values = [
    {
      img: '/values/RECKLESS 1.png'
    },
    {
      img: '/values/Quality 1.png'
    },
    {
      img: '/values/INNOVATION 1.png'
    },
    {
      img: '/values/PASSION 1.png'
    },
    {
      img: '/values/GROWTH 1.png'
    },
  ];
const Values = () => {
  return (
    <section className="relative py-20 px-6 flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/background/blue_peddles.png"
          alt="testimonial background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl w-full z-10">
        <h2 className="text-3xl font-semibold text-white text-center mb-2">
          Our Values
        </h2>
        <div className='h-[3px] w-[10%] bg-black mx-auto mb-16'></div>

        {/* Grid for top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-10">
          {values.slice(0, 3).map((value) => (
            // <div
            //   key={value.id}
            //   className="bg-white text-[#005F87] p-6 rounded-2xl shadow-md w-full max-w-sm"
            // >
            //   <h3 className="font-bold text-xl mb-2">{value.header}</h3>
            //   <p className="text-sm">{value.desc}</p>
            // </div>
            <Image src={value.img} alt='vales' width={609} height={486} />
          ))}
        </div>

        {/* Flexbox row for last 2 values */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {values.slice(3).map((value) => ( 
            //jsut testung someting
            // <div
            //   key={value.id}
            //   className="bg-white text-[#005F87] p-6 rounded-2xl shadow-md w-full max-w-sm"
            // >
            //   <h3 className="font-bold text-xl mb-2">{value.header}</h3>
            //   <p className="text-sm">{value.desc}</p>
            // </div>
            <Image src={value.img} alt='vales' width={609} height={486}  className='w-80 h-auto'/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
