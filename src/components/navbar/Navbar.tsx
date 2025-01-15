import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'


const navMenu = [
  {id: 1, menu: 'Home', link: '/'},
  {id: 2, menu: 'Service', link: 'service'},
  {id: 3, menu: 'Blog', link: 'blog'},
  {id: 4, menu: 'About us', link: 'about'},
  {id: 5, menu: 'Training', link: 'training'},
  {id: 6, menu: 'Careers', link: 'careers'},
  {id: 7, menu: 'Contact us', link: 'contact'},
]

const Navbar = () => {
  return (
    <nav className='text-primary text-xl'>
  <div className='flex justify-between items-center max-w-[1200px] m-auto w-full'>

    {/* Logo */}
    <Image src={'/BJT_logo.jpg'} width={100} height={100} alt='logo' />

    {/* Middle menu */}
    <div className='flex gap-6 flex-grow justify-center'>
      {navMenu.map(menu => (
        <Link href={`/${menu.link}`} key={menu.id}>{menu.menu}</Link>
      ))}
    </div>

    {/* CTA Button */}
    <Button text='Get started'/>
  </div>
</nav>

  )
}

export default Navbar