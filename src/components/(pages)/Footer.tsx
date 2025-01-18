import React from "react";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-white text-black divide-y divide-gray-600 lg:h-[440px] space-x-0  lg:space-x-5 mt-7">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-evenly py-8 lg:py-[80px] h-auto lg:h-[90%] px-5 lg:px-0">
        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-2xl text-xl font-bold pb-5">Comforty</h3>
          <ul className="flex flex-col">
            <li className="lg:text-xl text-lg font-medium pb-5">Subscribe</li>
            <li className="text-[16px] pb-3">Get 10% off your first order</li>
            <div className="flex lg:justify-between pt-3 mt-5 lg:space-x-0 space-x-5">
              <BiLogoFacebook size={28} />
              <FiTwitter size={28} />
              <FaInstagram size={28} />
              
                <RiLinkedinLine size={28} />
              
            </div>
          </ul>
        </div>

        <div className="mb-10 lg:mb-0">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Support</h3>
          <ul className="flex flex-col gap-1 lg:gap-5 text-[16px]">
            <li>
              111 Karachi,
              <br /> Pakistan.
            </li>
            <li>comforty@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div className="mb-8 lg:mb-0  w-full lg:w-auto">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Account</h3>
          <ul className="flex flex-col lg:gap-5 gap-1">
            <li>My Accout</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h3 className="lg:text-xl text-lg font-medium pb-5">Quick Link</h3>
          <ul className="flex flex-col gap-5">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row lg:items-center lg:justify-center justify-start py-3 text-gray-600 h-auto lg:h-[40px]">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
}