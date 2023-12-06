import Link from 'next/link';
import React from 'react';
// import LOGO from '../assets/PFMS-LOGO.jpeg'
import PFMS from '../assets/pfms.png'
import Image from 'next/image';
import { Input } from './ui/input';

const Navbar = () => {
  return (
    <div className="flex items-center m-auto justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold w-20 h-20"><Image src={PFMS} alt='PFMS Logo' className='rounded-[50%] p-1'/></div>
      <div className="flex space-x-4">
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
        <NavLink href={'/profile'}>Profile</NavLink>
        <NavLink href={'/login'}>Login</NavLink>
        <NavLink href={'/signup'}>Signup</NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }: any) => {
  return (
    <Link href={href} className="hover:text-gray-300 transition duration-300 ease-in-out">
        {children}
    </Link>
  );
};

export default Navbar;