'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname } from 'next/navigation';

const navMenu = [
  { id: 1, menu: 'Home', link: '/' },
  { id: 2, menu: 'Service', link: '/service' },
  { id: 3, menu: 'Blog', link: '/blog' },
  { id: 4, menu: 'About us', link: '/about' },
  { id: 5, menu: 'Training', link: '/training' },
  { id: 6, menu: 'Contact us', link: '/contact' },
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="text-primary text-xl sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo_3.png" width={100} height={100} alt="logo" className="w-auto h-10 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden lg:flex">
          <div className="flex gap-6 flex-grow justify-end pr-6">
            {navMenu.map((menu) => (
              <Link
                href={menu.link}
                key={menu.id}
                className={`${pathname == menu.link && 'bg-blue-600 text-white px-3 py-1'} transition-colors`}
              >
                {menu.menu}
              </Link>
            ))}
          </div>
          <Button link='/contact' text="Hire us" />
        </div>

        {/* Mobile Menu Button */}
        <div ref={toggleButtonRef} className="lg:hidden">
          <GiHamburgerMenu
            className="text-4xl text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-gray-600 hover:text-blue-600 transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="flex flex-col gap-4 px-6 py-4">
            {navMenu.map((menu) => (
              <Link
                href={`/${menu.link}`}
                key={menu.id}
                className="text-lg hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {menu.menu}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;