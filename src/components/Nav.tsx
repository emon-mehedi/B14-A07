import React from 'react';
import logo from "@/assets/logo-icon.png"
import Image from 'next/image';

const Nav = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });
  return (
    <nav className='shadow-sm'>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <div className='flex flex-row items-center gap-2'>
            <Image src={logo} height={40} width={40} alt='logo' className='bg-[#4c8b43] rounded-xl p-3' />
            <div className='flex flex-col '>
              <a className="text-xl font-bold">বাজার দর</a>
              <p className='text-xs'>{date}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
            <button>Sign In</button>
            <button className='btn btn-sm bg-[#4c8b43] text-white'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;