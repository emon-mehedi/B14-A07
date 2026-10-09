import { IProduct } from '@/Types/Alltypes';
import Marquee from 'react-fast-marquee';
import React from 'react';

const Marq = async() => {
    const res2 = await fetch('https://api.api-store.workers.dev/api/bazardor/products',{next:{revalidate:3600}});
    const products: IProduct[] = await res2.json();
  return (
      <Marquee className='bg-white'>
        {
          products.map(product =>
            <div key={product.id} className="px-5 py-2 border border-gray-300 gap-2 text-sm space-x-2 font-extralight">
              <span>{product.image}</span>
              <span>{product.nameBn}</span>
              <span>{product.today} টাকা/{product.unit}</span>
              <span>{product.change.pct > 0 ? <span className={"text-red-600"}>▲ {product.change.pct}%</span> : <span className={"text-green-600"}>▼ {Math.abs(product.change.pct)}%</span>}</span>
            </div>)
        }
      </Marquee>
  );
};

export default Marq;