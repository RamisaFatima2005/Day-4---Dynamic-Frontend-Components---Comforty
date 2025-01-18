import React from "react";
import Image from "next/image";

interface Logo {
  image: string;
}

const logos: Logo[] = [
  { image: "/home/logo1.jpg" },
  { image: "/home/logo2.jpg" },
  { image: "/home/logo3.jpg" },
  { image: "/home/logo4.jpg" },
  { image: "/home/logo5.jpg" },
  { image: "/home/logo6.jpg" },
];

export default function Companylogo() {
  return (
    <div className="lg:mx-[200px] mx-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-[60px] xl:mx-0 lg:mx-4 md:mx-9 sm:mx-9">

        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white w-[100px] h-[100px] overflow-hidden"
          >
            <Image
              src={logo.image}
              alt="Logo"
              width={300}
              height={200}
              className="w-full h-[px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}