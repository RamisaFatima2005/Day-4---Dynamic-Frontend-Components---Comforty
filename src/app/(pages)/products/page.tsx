import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCartDash } from "react-icons/bs";
import ProductComp from "@/components/(pages)/ProductComp";
import { client } from "@/sanity/lib/client";

export interface Product {
   _id:string
  title:string;
    price:number;
    priceWithoutDiscount:number;
    badge:string;
    imageUrl:string;
    description:string;
    inventory:number;
    tags:string[];
    category:{
      title:string;
      products:number;
      imageUrl:string;
    }
}

export default async function Products() {

  const products:Product[] = await client.fetch(`*[_type == "products"]{
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl":image.asset->url,
    description,
    inventory,
    tags,
    category->{
      title,
      products,
      "imageUrl":image.asset->url}
  }`)

  console.log(products);
  

  return (
    <div>
      <div className="flex flex-row ml-8 lg:ml-[135px] lg:py-14">
        <p className="font-bold text-[32px]">All Products</p>
      </div>

      <div className="mb-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mx-2 xl:mx-24 xl:gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white w-[312px] h-[377px] overflow-hidden xl:px-7"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-[312px] object-cover"
            />
            <div className="p-0 flex flex-row justify-between mt-3">
              <span>
                <h3 className="text-lg hover:text-[#029FAE] text-black font-normal">
                  {product.title}
                </h3>
                <p className="text-black text-xl font-bold">${product.price}</p>
              </span>
              <span className="text-gray-500">
                <Link href={`/products/${product._id}`}>
                <Button variant="outline" className="hover:bg-[#029FAE] text-black hover:text-white border border-slate-300 bg-slate-300 hover:border rounded-xl"><BsCartDash size={22} /></Button>
                 
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>

      <ProductComp />
    </div>
  );
}