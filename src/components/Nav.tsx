import React from 'react';
import logo from "@/assets/logo-icon.png"
import Image from 'next/image';
import { ICategory } from '@/Types/Alltypes';
import CategoryList from './CategoryList';
import Link from 'next/link';

const Nav = async () => {
  const res1 = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', { next: { revalidate: 3600 } });
  const data: ICategory[] = await res1.json();

  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });

  return (
    <header className='bg-white sticky top-0 z-10'>
      <nav className='shadow-sm'>
        <div className="navbar bg-base-100 container mx-auto">
          <div className="flex-1">
            <Link href={'/'}>
              <div className='flex flex-row items-center gap-2'>
                <Image src={logo} height={40} width={40} alt='logo' className='bg-[#4c8b43] rounded-xl p-3' />
                <div className='flex flex-col'>
                  <h1 className="text-xl font-bold z-20">বাজার দর</h1>
                  <span className='text-xs  bg-white'>{date}</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <button>Sign In</button>
            <button className='btn btn-sm bg-[#4c8b43] text-white'>Sign Up</button>
          </div>
        </div>
      </nav>

      <div>
        <div className='container mx-auto flex flex-row gap-6 text-sm py-3'>
          <CategoryList categories={data} />
        </div>
      </div>
    </header>
  );
};

export default Nav;