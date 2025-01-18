import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { BsCartDash } from "react-icons/bs";
import NavbarSheet from "./NavbarSheets";

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-evenly py-[12px] space-x-4 bg-[#272343] text-white h-[45px]">
        <span>Free Shipping On All Orders Over $50</span>
        <span className="hidden md:flex flex-row space-x-5">
          <p>Eng</p>
          <p>Faqs</p>
          <p>Need Help</p>
        </span>
      </div>

      <div className="flex flex-row justify-between bg-[#F0F2F3] h-[84px] md:px-32">
        <span className="flex flex-row space-x-4">
          <Image
            src="/home/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h3 className="py-[22px] text-[#272343] font-medium text-[26px]">
            Comforty
          </h3>
        </span>

        <span className="py-[18px]">
          <Link href={"/products"}>
            <Button
              variant="outline"
              className="hover:bg-[#029FAE] text-black hover:text-white border border-white bg-white hover:border rounded-xl"
            >
              <BsCartDash size={22} />
              Cart
            </Button>
          </Link>
        </span>
      </div>

      <NavbarSheet />
    </div>
  );
}