import { IProduct } from '@/Types/Alltypes';
import Link from 'next/link';
import React from 'react';

const Product = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`);
  const product: IProduct = await res.json();

  const lowest = product.markets.reduce((acc, current) => current.min < acc ? current.min : acc, product.markets[0].min);
  const highest = product.markets.reduce((acc, current) => current.max < acc ? current.max : acc, product.markets[0].max)
  return (
    <div className='container mx-auto space-y-3 py-2'>

      <div className='space-x-2'>
        <Link href={'/'}>হোম</Link> <span>&gt;</span>
        <Link href={`/category/${product.category}`}>{product.categoryNameBn}</Link> <span>&gt;</span>
        <Link href={`/product/${product.id}`}>{product.nameBn}</Link>
      </div>

      <div className='bg-white flex flex-row justify-between p-3 rounded-2xl'>
        <div className='flex flex-row items-center gap-2'>
          <p className='text-6xl bg-[#e6f1e7] p-1 rounded-xl'>{product.image}</p>
          <div>
            <h1 className='text-4xl'>{product.nameBn}</h1>
            <p>প্রতি {product.unit} {product.categoryNameBn}</p>
            <div>গতকালের তুলনায় আজকে দাম {
              product.change.pct > 0
                ? <span className='font-bold'>বেড়েছে <span className='font-normal'>{product.change.pct}%</span></span>
                : <span className='font-bold'>বেড়েছে <span className='font-normal'>{product.change.pct}%</span></span>
            }
            </div>
          </div>
        </div>
        <div className='bg-[#e6f1e7] p-3 rounded-2xl flex flex-col justify-center items-center'>
          <p>আজকের দাম</p>
          <h1 className='text-4xl font-bold'>{product.today}</h1>
          <p>টাকা/{product.unit}</p>
          <div>
            {
              product.change.pct > 0
                ? <p className='text-red-600'>▲ {product.change.pct}%</p>
                : <p className='text-green-600'>▼ {Math.abs(product.change.pct)}%</p>
            }
          </div>
        </div>
      </div>

      <div className='p-3 bg-white rounded-2xl space-y-2'>
        <h2 className='text-2xl py-2'>দামের সারসংক্ষেপ</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          <div className='border border-slate-300 rounded-2xl p-4 text-sm'>
            <p>সর্বনিম্ন দাম</p>
            <h2 className='text-4xl text-green-600'>
              {lowest} টাকা
            </h2>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className='border border-slate-300 rounded-2xl p-4 text-sm'>
            <p>সর্বাধিক দাম</p>
            <h2 className='text-4xl text-red-600'>
              {highest} টাকা
            </h2>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className='border border-slate-300 rounded-2xl p-4 text-sm'>
            <p>গড় দাম</p>
            <h2 className='text-4xl text-green-600'>
              {(highest + lowest) / 2} টাকা
            </h2>
            <p>প্রতি {product.unit} -এর হিসাবে</p>
          </div>
        </div>

        <div>
          <h2 className='text-2xl mt-8'>বাজারভিত্তিক আজকের দাম</h2>
          <div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-3 font-semibold text-gray-700">বাজার</th>
                  <th className="p-3 font-semibold text-gray-700">বিভাগ</th>
                  <th className="p-3 font-semibold text-gray-700">সর্বনিম্ন</th>
                  <th className="p-3 font-semibold text-gray-700">সর্বাধিক</th>
                  <th className="p-3 font-semibold text-gray-700">গড়</th>
                </tr>
              </thead>
              <tbody>
                {
                  product.markets.map((market, index) =>
                    <tr
                      key={index}
                      className="border-b border-gray-100 odd:bg-[#e6f1e7] even:bg-white"
                    >
                      <td className="p-3 text-gray-600">{market.market}</td>
                      <td className="p-3 text-gray-600">{market.division}</td>
                      <td className="p-3 text-gray-600">{market.min}</td>
                      <td className="p-3 text-gray-600">{market.max}</td>
                      <td className="p-3 text-gray-600">{(market.min + market.max) / 2}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>

      <Link href={`/category/${product.category}`}><button className='btn border-0 bg-[#e6f1e7] hover:bg-white'><span>{product.image}</span> সব {product.categoryNameBn}</button></Link>
    </div>
  );
};

export default Product;