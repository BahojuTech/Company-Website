'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button/Button'
import { GiHamburgerMenu } from 'react-icons/gi'


const navMenu = [
  {id: 1, menu: 'Home', link: '/'},
  {id: 2, menu: 'Service', link: 'service'},
  {id: 3, menu: 'Blog', link: 'blog'},
  {id: 4, menu: 'About us', link: 'about'},
  {id: 5, menu: 'Training', link: 'training'},
  {id: 7, menu: 'Contact us', link: 'contact'},
]

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className='text-primary text-xl sm:px-3'>
  <div className='flex justify-between items-center max-w-[1200px] m-auto w-full'>

    {/* Logo */}
    <Image src={'/BJT_logo.jpg'} width={100} height={100} alt='logo' />

{/* Second Side */}
   <div className='items-center hidden md:flex'>
     {/* Middle menu */}
     <div className='flex gap-6 flex-grow justify-end pr-6'>
      {navMenu.map(menu => (
        <Link href={`/${menu.link}`} key={menu.id}>{menu.menu}</Link>
      ))}
    </div>

    {/* CTA Button */}
    <Button text='Get started'/>
   </div>

    {/* Mobile View */}
    <GiHamburgerMenu className='text-4xl text-gray cursor-pointer md:hidden lg:hidden' onClick={() => setOpen(true)} />
      <div className={`absolute top-0 right-0 w-[70%] flex flex-col gap-4 h-screen z-20 bg-white transition-all duration-500 ease-in-out  ${open ? 'right-0' : '-right-[70%]'}`}>
      <p className='text-right text-3xl cursor-pointer font-bold pr-3' onClick={() => setOpen(false)}>x</p>
      <div className=' pr-6 grid place-items-center gap-6 text-2xl'>
        {navMenu.map(menu => (
          <Link href={`/${menu.link}`} key={menu.id}>{menu.menu}</Link>
        ))}
      </div>
    </div>
  </div>

  
</nav>

  )
}

export default Navbar