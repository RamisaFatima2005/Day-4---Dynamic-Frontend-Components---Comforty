import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { BsCartDash } from "react-icons/bs";

export interface Product {
  title: string;
  price: number;
  image: string;
}

const products: Product[] = [
    { title: "Chair", price: 23, image: "/products/1.jpg" },
    { title: "Chair", price: 23, image: "/products/2.jpg" },
    { title: "Chair", price: 23, image: "/products/3.jpg" },
    { title: "Chair", price: 23, image: "/products/4.jpg" },
    { title: "Chair", price:23, image: "/products/5.jpg" },
    { title: "Chair", price:23, image: "/products/6.jpg" },
    { title: "Chair", price:23, image: "/products/7.jpg" },
    { title: "Chair", price:23, image: "/products/8.jpg" },
];

export default function OurProducts() {
  return (
    <div >
      <div className="flex flex-row justify-center lg:py-14 lg:mx-[120px] mx-4">
        <p className="font-bold text-[32px] ">Our Products</p>
      </div>

      <div className="mb-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mx-9 xl:gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white w-[312px] h-[377px] overflow-hidden xl:px-7"
          >
            <Image
              src={product.image}
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
                <Link href={"/products"}>
                <Button variant="outline" className="hover:bg-[#029FAE] text-black hover:text-white border border-slate-300 bg-slate-300 hover:border rounded-xl"><BsCartDash size={22} /></Button>
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}