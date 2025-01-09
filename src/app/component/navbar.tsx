'use client'

import Image from "next/image";
import vector from '@/app/Vector.png';
import frame from '@/app/Frame.png';
import icon from '@/app/Frame (1).png';
import iconss from '@/app/Frame (2).png';
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-black focus:outline-none mr-2" // Added margin to create gap
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="font-integral text-[32px] font-extrabold text-black">
          SHOP.CO
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <h2 className="text-[16px] text-black">Shop</h2>
            <Image src={vector} alt="vector" className="w-[11.5px] h-[6.5px]" />
          </div>
          <a href="#" className="text-[16px] font-normal text-black">On Sale</a>
          <a href="#" className="text-[16px] font-normal text-black">New Arrivals</a>
          <a href="#" className="text-[16px] font-normal text-black">Brands</a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 ml-8 w-1/3">
          <Image src={frame} alt="search icon" className="w-6 h-6 icon-black" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent border-none outline-none text-gray-500 text-[16px] ml-2 w-full"
          />
        </div>

        {/* Icons (Mobile & Desktop) */}
        <div className="flex items-center space-x-6 ml-auto lg:ml-8">
          <div className="lg:hidden flex space-x-4">
            <Image src={frame} alt="search icon" className="w-6 h-6 text-black" /> {/* Black color for mobile */}
            <Image src={icon} alt="icon" className="w-6 h-6" />
            <Image src={iconss} alt="icon" className="w-6 h-6" />
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Image src={icon} alt="icon" className="w-6 h-6" />
            <Image src={iconss} alt="icon" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#" className="text-[16px] font-bold text-black">Shop</a>
            <a href="#" className="text-[16px] font-normal text-black">On Sale</a>
            <a href="#" className="text-[16px] font-normal text-black">New Arrivals</a>
            <a href="#" className="text-[16px] font-normal text-black">Brands</a>
          </div>
        </div>
      )}
    </nav>
  );
}
