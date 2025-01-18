import React from 'react'
import Image from 'next/image';
import CategoryComp from './CategoryComp';

export interface Product {
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { title: "Chair", price: 23, image: "/products/9.jpg" },
  { title: "Chair", price: 23, image: "/products/5.jpg" },
  { title: "Chair", price: 23, image: "/products/12.jpg" },
];


export default function TopcategoryComp() {
  return (
    <div className='mx-7'>
    <div className="flex flex-row lg:py-14 lg:mx-[120px] mx-4">
      <p className="font-bold text-[32px] ">Top Categories</p>
    </div>
    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-2 sm:mx-4 xl:gap-8">
  {products.map((product, index) => (
    <div
      key={index}
      className="w-full sm:w-[280px] md:w-[340px] lg:w-[400px] h-auto px-2 py-5"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="object-center mx-auto"
      />
    </div>
  ))}
</div>


    <CategoryComp />

  </div>
  )
}