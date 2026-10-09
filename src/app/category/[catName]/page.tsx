import Sort from '@/components/Sort';
import { ICategory, IProduct } from '@/Types/Alltypes';
import Link from 'next/link';
import React from 'react';

const Category = async ({ params }: { params: { catName: string } }) => {
  const { catName } = await params;
  //fetch products of the category
  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${catName}`,{next:{revalidate:3600}});
  const data: IProduct[] = await res.json();
  //fetch categories
  const res2 = await fetch('https://api.abcz.workers.dev/api/bazardor/categories',{next:{revalidate:3600}});
  const data2: ICategory[] = await res2.json();
  //fetch category name
  const category = data2.find(category => category.slug === catName)

  if(data.length===0){
    return (
      <div className='min-h-full text-center space-y-3 mt-5'>
        <h1 className='text-5xl'>কোন পণ্য খুজে পাওয়া যায় নি</h1>
        <Link href={'/'}><button className='btn'>হোম পেজে যান</button></Link>
      </div>
    )
  } else{
  return (
    <div className='container mx-auto space-y-2 my-5'>
      <div className='flex flex-row bg-white rounded-2xl p-5 shadow-sm  border border-slate-100 gap-2'>
        <p className='text-4xl'>{category?.icon}</p>
        <div>
          <h2 className='text-4xl'>{category?.nameBn}</h2>
          <p>{data.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>

      <Sort data={data}/>

      {/* <div className='flex flex-row justify-between'>
        <div>মোট {data.length}টি পণ্য দেখানো হচ্ছে</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data.map(product=><Card key={product.id} product={product}/>)
        }
      </div> */}
    </div>
  )};
};

export default Category;