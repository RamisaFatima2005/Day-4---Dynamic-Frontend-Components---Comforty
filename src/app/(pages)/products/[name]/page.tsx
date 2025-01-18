import React from "react";
import Image from "next/image";
import { products } from "../page";
import { BsCartDash } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import DetailComp from "@/components/(pages)/DetailComp";

interface Params {
  params: {
    name: string;
  };
}

export default function ProductDetail(params: Params) {
  const product = products.find((key) => key.name === params.params.name);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
    <div className="flex flex-col lg:flex-row my-[120px] ">
      <div className="w-[90%] md:w-[350px] lg:w-[600px] h-[400px] md:h-[400px] lg:h-[600px]  flex items-center justify-center mx-auto mt-5 lg:mt-0 ">
        <Image
          src={product.image}
          alt={product.name}
          width={280}
          height={280}
          className="w-[300px] md:w-[350px] lg:w-[560px] h-[300px] md:h-[400px] lg:h-[560px]"
        />
      </div>

      <div className="w-full lg:w-[500px] h-auto lg:h-[600px] px-4 lg:py-5 py-0 ml-0 mr-0 lg:ml-3 lg:mr-20 divide-slate-300 divide-y-2">

        <div className="space-y-4 mb-9">
          <h1 className="text-[32px] md:text-[48px] font-bold">
            {product.name}
          </h1>
          <Button
            variant="outline"
            className="bg-[#029FAE] text-white rounded-full"
          >
            ${product.price} USD
          </Button>
          </div>
          <div className="space-y-4 pt-4 ">
          <p className="text-[12px] md:text-[14px] text-[#4F4F4F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit. Nullam tincidunt erat enim. Lorem ipsum dolor
            <br /> sit amet, consectetur adipiscing
          </p>
        
        
          <Button
            variant="outline"
            className="bg-[#029FAE] text-white hover:bg-[#F0F2F3] hover:text-[#029FAE] hover:border hover:border-[#029FAE]"
          >
            <BsCartDash size={22} /> <span>Add to Cart</span>
          </Button>
        </div>
      </div>


    </div>


      <DetailComp />
    </div>

  );
}