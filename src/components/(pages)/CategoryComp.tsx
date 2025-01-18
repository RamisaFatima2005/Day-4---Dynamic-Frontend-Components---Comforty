import React from 'react';
import Image from 'next/image';

export interface Product {
    image: string;
}
  
const products: Product[] = [
    { image: "/products/9.jpg" },
    { image: "/products/5.jpg" },
    { image: "/products/12.jpg" },
    { image: "/products/10.jpg" },
];
  

export default function CategoryComp() {
  return (
    <div className='flex xl:flex-row flex-col lg:mx-[120px] mx-4'>
        {/* left */}
        <div className="relative flex items-center justify-center">
            <p className="mt-80 mr-6 absolute transform  -rotate-90 pt-16 origin-bottom-left text-2xl hidden md:block text-gray-900 font-semibold tracking-wide md:left-0">
              Explore New and Popular Styles
            </p>
            <div className="w-full lg:w-[585px] flex justify-center items-center">
              <Image
                src="/products/3.jpg"
                alt="Main Chair"
                width={644}
                height={644}
                className="object-contain"
              />
            </div>
          </div>

        {/* right */}
        <div className="my-16 xl:my-32 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mx-2 xl:gap-2">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[320px] h-[312px] px-4 md:px-12 py-5"
                >
                  <Image
                    src={product.image}
                    alt="Picture"
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                 
                </div>
              ))}
            </div>
    </div>
  )
}