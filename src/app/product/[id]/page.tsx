import { IProduct } from '@/Types/Alltypes';
import React from 'react';

const Product = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`);
  const product: IProduct = await res.json();
  return (
    <div className='container mx-auto space-y-3'>
      <div className='bg-white flex flex-row justify-between p-3'>
        <div className='flex flex-row items-center'>
          <p className='text-4xl'>{product.image}</p>
          <div>
            <h1 className='text-4xl'>{product.nameBn}</h1>
            <p>প্রতি {product.unit} {product.category}</p>
            <div>গতকালের তুলনায় আজকে দাম {
              product.change.pct > 0
                ? `<span className='font-bold'>বেড়েছে</span> ${product.change.pct}%`
                : `<span className='font-bold'>বেড়েছে</span> ${product.change.pct}%`
            }
            </div>
          </div>
        </div>
        <div>
          <p>আজকের দাম</p>
          <h1 className='text-4xl font-bold'>{product.today}</h1>
          <p>টাকা/{product.unit}</p>
          <div>
            {
              product.change.pct > 0
                ? `<span className='text-red-600'>${product.change.pct}</span>`
                : `<p className='text-green-600'>${Math.abs(product.change.pct)}</p>`
            }
          </div>
        </div>
      </div>

      <div className='p-3'>
        <h2 className='text-2xl font-bold py-2'>দামের সারসংক্ষেপ</h2>
        <div>
          <div>
            <p>সর্বনিম্ন দাম</p>
            <h2 className='text-4xl text-green-600'>
              {product.markets.reduce((acc, current) => current.min < acc ? current.min : acc, product.markets[0].min)}
            </h2>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;