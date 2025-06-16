"use client"
import React, { useState } from 'react'
import { Metadata } from 'next';
import ContactUs from '@/components/contact/ContactUs';
import Faq from '@/components/contact/Faq';





const menus = [
  {label: 'Contact Us', content: <ContactUs />},
  {label: 'FAQs', content: <Faq/>}
]

const page = () => {
  const [activeMenu, setActiveMenu] = useState(menus[0].label)

    const activeComponent = menus.find(menu => menu.label === activeMenu)?.content

    return (
        <section className='pb-28'>
          <div className='pt-36 bg-blue-500 h-[80vh]'>
            <div className=' max-w-[1300px] mx-auto'>
              <div className='flex gap-5'>
                {menus.map((menu, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActiveMenu(menu.label)}
                    className={`${activeMenu === menu.label && 'border-b-white border-b-2'} text-white p-1 cursor-pointer`}
                  >{menu.label}</div>
                ))}
              </div>
            </div>

            <div className='max-w-[1300px] mx-auto mt-5'>
              {activeMenu === 'Contact Us' ? (
                <>
                  <h1 className="text-2xl text-white font-semibold mb-2">Contact Us</h1>
                  <p className="text-white mb-6">
                    Let's get this conversation started. Tell us a bit about yourself and
                    we'll get in touch as soon as we can.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-white text-2xl font-semibold mb-2">Frequently Asked Questions</h1>
                  <p className="text-white mb-6">
                  You got questions? 
                  Here are your answers!
                  </p>
                </>
              )
              }
            </div>
          </div>
          

          <div className=''>
            {activeComponent}
          </div>
        </section>
    )
}

export default page