"use client";
import Link from 'next/link';
import React, {useState} from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuToggle from "./MenuToggle";

// NAV LINKS

const navLinks = [
    {
        title:'About',
        path:'#about',
    },
    {
        title:'Projects',
        path:'#projects',
    },
    {
        title:'Contact',
        path:'#contact',
    },
]

const Navbar = () => {
    // OPEN AND CLOSE TG
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 border border-[#33353F] '>
        <div className='flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2 '>
            {/* LOGO */}
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>Me</Link>
            {/* LINKS */}
            {/* OPEN AND CLOSE BTN */}
            <div className='mobile-menu block md:hidden'> 
    {/* BTN function */}
    {
        !navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5' />
                </button>
        ) : (
            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
            </button>
        )
    }
            </div>
             {/* LINKS */}
            <div className='menu hidden md:block md:w-auto ' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 list-none'>
                   
                {navLinks.map((link , index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}  
                </ul>

            </div>
        </div>
        {navbarOpen ? <MenuToggle links={navLinks}/> : null}
    </nav>
  );
};
export default Navbar;