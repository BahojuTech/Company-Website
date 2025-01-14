import Image from 'next/image'
import React from 'react'


const navMenu = [
  {id: 1, menu: 'Home'},
  {id: 2, menu: 'Service'},
  {id: 3, menu: 'Blog'},
  {id: 4, menu: 'About us'},
  {id: 5, menu: 'Training'},
  {id: 6, menu: 'Careers'},
  {id: 7, menu: 'Contact us'},
]

const Navbar = () => {
  return (
    <nav className=' text-primary text-xl flex justify-between'>
      <div className='flex justify-between items-center  min-w-[1200px] m-auto'>

      <Image src={'/BJT_logo.jpg'} width={100} height={100} alt='logo'/>

        {/* middle menu */}
        <div className='flex gap-6'>
        {
          navMenu.map(menu => (
            <div key={menu.id}>{menu.menu}</div>
          ))
        }
        </div>

        {/* CTA */}
        <div className="border-2 border-primary p-2 rounded-lg">Get Started</div>


      </div>
       
    </nav>
  )
}

export default Navbar