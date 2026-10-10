'use client'
import { IProduct } from '@/Types/Alltypes';
import React, { useState } from 'react';
import Card from './Card';

const Sort = ({ data }: { data: IProduct[] }) => {
  const [sortby, setSortby] = useState<"default" | "lowHigh" | "highLow">("default");
  const sortedData = [...data];
  if (sortby === "lowHigh") {
    sortedData.sort((a, b) => a.today - b.today)
  } else if (sortby === "highLow") {
    sortedData.sort((a, b) => b.today - a.today)
  }
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div>মোট {data.length}টি পণ্য দেখানো হচ্ছে</div>
        <select className="select rounded-xl pt-2" onChange={(e) => { setSortby(e.target.value as "default" | "lowHigh" | "highLow") }}>
          <option value="default">ডিফল্ট</option>
          <option value="lowHigh">দাম: কম থেকে বেশি</option>
          <option value="highLow">দাম: বেশি থেকে কম</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          sortedData.map(product => <Card key={product.id} product={product} />)
        }
      </div>
    </>
  );
};

export default Sort;