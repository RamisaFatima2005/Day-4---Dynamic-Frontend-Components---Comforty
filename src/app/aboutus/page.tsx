"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function About() {
  const route=useRouter()
    const products = [
        {
          name: "The Poplar suede sofa",
          price: "$99.00",
          image: "/GreenSofa.PNG", 
        },
        {
          name: "The Dandy chair",
          price: "$99.00",
          image: "/dandychair1.svg", 
        },
        {
          name: "The Dandy chair",
          price: "$99.00",
          image: "/dandychair2.svg", 
        },
      ];
  return (
    <div className='bg-[#FFFFFF] flex flex-col px-4 md:px-6'>
        {/*first div */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 mx-0 md:mx-10'>
                    
            <div className=' mt-10 w-full h-72 justify-center bg-[#007580] shadow-md shadow-slate-400'>
                <h1 className='text-[#FFFFFF] font-bold mt-7 ml-10'>About Us-Comforty</h1>
                <p className='text-[#FFFFFF] font-light mt-7 ml-10'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.</p>
                <button onClick={()=>route.push("/products")} className='bg-[#029FAE] text-[#FFFFFF] font-light mt-7 ml-10'>View Collection</button>
            </div>

            <div className= 'w-full p-4 md:p-7 mt-10'>
                <Image
                height={50}
                width={50}
                src={"/aboutchair.svg"}
                alt='Chair'
                className='-mt-8 w-full h-72 justify-center'
                />
            </div>
            
        </div>
        {/*Brand different div */}
        <div className="mt-10">
  <h1 className="text-[#272343] font-bold justify-center text-center text-2xl">
    What Makes Our Brand Different
  </h1>
  {/* Div for 4 cards */}
  <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6 mt-10">
    <div className="bg-[#F9F9F9] p-6 rounded-md shadow-md max-w-xs">
      <h1 className="text-[#007580] font-semibold">Next day as standard</h1>
      <p className="text-[#007580] mt-2">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>
    <div className="bg-[#F9F9F9] p-6 rounded-md shadow-md max-w-xs">
      <h1 className="text-[#007580] font-semibold">Made by true artisans</h1>
      <p className="text-[#007580] mt-2">
        Handmade crafted goods made with real passion and craftsmanship
      </p>
    </div>
    <div className="bg-[#F9F9F9] p-6 rounded-md shadow-md max-w-xs">
      <h1 className="text-[#007580] font-semibold">Unbeatable Price</h1>
      <p className="text-[#007580] mt-2">
        For our materials and quality, you won&apos;t find better prices
        anywhere
      </p>
    </div>
    <div className="bg-[#F9F9F9] p-6 rounded-md shadow-md max-w-xs">
      <h1 className="text-[#007580] font-semibold">Recycled Packaging</h1>
      <p className="text-[#007580] mt-2">
        We use 100% recycled to ensure our footprint is more manageable
      </p>
    </div>
  </div>

  {/*Popular Products */}
  <div className='mt-10 ml-10'><h1 className='text-[#272343] font-bold text-2xl'>Our Popular Products</h1></div>
  <div className="flex justify-around items-center p-6 space-x-5">
      {products.map((product, index) => (
        <div key={index} className="w-64 border border-gray-300 rounded-md shadow-md p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
</div>
        </div>
  )
}