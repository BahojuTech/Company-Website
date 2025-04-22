'use client'

import HeroCarousel from '@/components/hero/HeroCarousel';
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from 'react';

const images: string[] = [
  "/carousel1.jpg",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png",
  "/carousel5.png",
];

const faqs = [
  { question: 'What is Bahojutech?', 
    answer: ' Bahojutech is a leading provider of IT solutions, specializing in offering cutting-edge technology services to businesses of all sizes. We help streamline operations, enhance security, and foster innovation through custom software, cloud solutions, and IT consulting.'
  },
  { question: 'Who are your clients?', 
    answer: 'We work with businesses across various industries, including finance, healthcare, education, manufacturing, and eCommerce. Our solutions are tailored to meet the unique needs of startups, SMEs, and large enterprises.'
  },
  { question: 'What are the cloud solutions, and how can they benefit my business?', 
    answer: 'Cloud solutions allow businesses to store data and run applications over the internet rather than on local servers. Benefits include: Scalability and flexibility to grow as needed Reduced IT infrastructure costs Enhanced collaboration and remote access Improved data security with regular backups'
  },
  { question: 'How much do your services cost?', 
    answer: 'Our pricing varies depending on the services required and the complexity of your project. We offer flexible pricing models, including hourly rates, project-based fees, and subscription packages. For a quote, please fill reach out to us'
  },
  { question: 'Can you handle international projects?', 
    answer: ' Yes, we handle projects for clients worldwide. Our team uses the latest project management tools to ensure effective communication and delivery regardless of location.'
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <HeroCarousel image={'/hero/ServiceHero.png'}  title='Frequently Asked Questions' description='Find answers to common questions about our services' />

      <div className='bg-[#D5E5EC] pt-14 pb-32'>
        <h4 className='text-center mb-10'>This section covers most answers to all the common questions on our services</h4>

        {/* FAQs */}
        <div className='max-w-[900px] px-6 m-auto'>
          {faqs.map((faq, index) => (
            <div key={index} className='mb-5'>
              <div className='flex justify-between items-center bg-white font-semibold p-2 cursor-pointer' onClick={() => toggleFAQ(index)}>
                <p>{faq.question}</p>
                <IoMdArrowDropdown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </div>
              {openIndex === index && (
                <div className='bg-white font-semibold p-2 mt-2'>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;