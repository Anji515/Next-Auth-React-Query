import Link from 'next/link';
import React from 'react';
// import LOGO from '../assets/PFMS-LOGO.jpeg'
import PFMS from '../assets/PFMS-LOGO-1.jpg'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold w-16 h-16 "><Image src={PFMS} alt='PFMS Logo' className='rounded-[40%] p-1'/></div>
      <div className="flex space-x-4">
        <NavLink href={'/'}>Home</NavLink>
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