import React from 'react';
import logo from "@/assets/logo-icon.png"
import Image from 'next/image';
import { ICategory } from '@/Types/Alltypes';

const Nav = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data:ICategory[] = await res.json();

  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });
  return (
    <header>
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

      <div className='shadow-sm'>
        <div className='container mx-auto flex flex-row gap-6 text-sm py-3'>
          {
            data.map(category=><div key={category.id}>{category.icon}{category.nameBn}</div>)
          }
        </div>  
      </div>
    </header>
  );
};

export default Nav;