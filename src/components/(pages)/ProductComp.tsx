import React from 'react';
import Image from 'next/image';
import ProductInput from './Productinput';

export interface Product {
    image: string;
}
  
  const products: Product[] = [
    { image: "/products/6.jpg" },
    { image: "/products/9.jpg" },
    { image: "/products/2.jpg" },
    { image: "/products/8.jpg" },
    { image: "/products/3.jpg" },
    { image: "/products/12.jpg" },
  ];

export default function ProductComp() {
  return (
    <div className='bg-[#1E28320D]'>
        <ProductInput />
      <div className="flex flex-row justify-center  lg:py-9">
        <p className="font-semibold text-[32px]">Follow products and discounts on Instagram</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-[40px] mx-2 xl:mx-9 lg:mx-9 md:mx-9 sm:mx-9">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white w-[186px] h-[186px] overflow-hidden xl:"
          >
            <Image
              src={product.image}
              alt="Picture"
              width={300}
              height={300}
              className="w-full h-[184px] object-cover"
            />
          
          </div>
        ))}
      </div>

      
    </div>
  );
  
}