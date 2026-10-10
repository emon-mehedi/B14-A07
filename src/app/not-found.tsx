import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
      <div className='min-h-full text-center space-y-3 mt-5'>
        <h1 className='text-5xl'>কোন তথ্য খুজে পাওয়া যায় নি</h1>
        <Link href={'/'}><button className='btn'>হোম পেজে যান</button></Link>
      </div>
    )
};

export default NotFound;