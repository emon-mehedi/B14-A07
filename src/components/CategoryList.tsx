'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ICategory } from '@/Types/Alltypes';

interface CategoryListProps {
  categories: ICategory[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  const pathname = usePathname();

  return (
    <div>
      <div className='container mx-auto flex flex-row gap-6 text-sm overflow-x-auto'>
        {categories.map((category) => {
          const categoryPath = `/category/${category.slug}`;
          const isActive = pathname === categoryPath;

          return (
            <Link 
              href={categoryPath} 
              key={category.id}
              className={`px-3 py-1 rounded-md transition-colors ${
                isActive 
                  ? 'bg-[#4c8b43] text-white font-medium'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className='flex items-center gap-2'>
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;