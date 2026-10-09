import React from 'react';
import logo from "@/assets/logo-icon.png"
import Image from 'next/image';
import { ICategory, IProduct } from '@/Types/Alltypes';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const Nav = async () => {
  const res1 = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
  const data: ICategory[] = await res1.json();

  const res2 = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
  const products: IProduct[] = await res2.json();

  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: 'full' });
  return (
    <header className='bg-white'>
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
            data.map(category => <Link href={`/category/${category.slug}`}  key={category.id}><div>{category.icon}{category.nameBn}</div></Link>)
          }
        </div>
      </div>

      <Marquee>
        {
          products.map(product =>
            <div key={product.id} className="px-5 py-2 border border-gray-300 gap-2 text-sm space-x-2 font-extralight">
              <span>{product.image}</span>
              <span>{product.nameBn}</span>
              <span>{product.today}/{product.unit}</span>
              <span>{product.change.pct > 0 ? `▲${product.change.pct}%` : `▼ ${Math.abs(product.change.pct)}%`}</span>
            </div>)
        }
      </Marquee>
    </header>
  );
};

export default Nav;