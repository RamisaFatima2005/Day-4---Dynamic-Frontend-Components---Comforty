import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function MainFirstcomp() {
  return (
    <div className="bg-[#F0F2F3] mt-[180px] lg:mx-[200px] mx-4">
      <section className="px-3 md:px-[80px] lg:px-[41px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px] lg:mt-[120px]">
        <div className="w-full md:w-[50%] ">
          <h1 className="text-sm md:text-[28px] lg:text-[28px] font-normal text-[#272343] text-center md:text-left">
            Welcome to chairy
          </h1>

          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-semibold text-center md:text-left tracking-tight">
            Best Furniture Collection for your interior.
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
        

            <Button variant="outline" className='bg-[#029FAE] text-white hover:bg-[#F0F2F3] hover:text-[#029FAE] hover:border hover:border-[#029FAE]'>Add to Cart</Button>
          </div>
        </div>

        <div className="mt-[30px] md:mt-0 md:w-[50%] lg:w-[434px] flex justify-center">
          <Image
            src="/home/productimage.jpg"
            alt="Hero Image"
            width={300}
            height={300}
            className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
          />
        </div>
      </section>
    </div>
  );
}