'use client';
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight,} from "react-icons/fa";
import Card from "../component/card";
import frame10 from "@/app/images/Frame 10 (1).png";
import image2 from "@/app/images/Frame 34-remove-bg-io.png";
import frame from "@/app/images/Frame 10o.png";
import image3 from '@/app/images/Frame 38-remove-bg-io.png';
import frame1 from "@/app/images/Frame 10 (2).png";
import image4 from "@/app/images/image 10 (1).png";
import image5 from "@/app/images/image 9.png";
import image6 from "@/app/images/image 10.png";
import image7 from "@/app/images/image 7 (1).png";
import image8 from "@/app/images/image 8 (1).png";
import image9 from "@/app/images/image 9 (2).png";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import iiii from "@/app/images/image 8.png";

// const categories = ["T-shirts", "Shirts", "Shorts", "Pants"];
// const colors = ["#000", "#fff", "#f00", "#ff0", "#00f", "#800080", "#ff69b4", "#90EE90"];
// const sizes = ["S", "M", "L", "XL", "XXL"];
const dressStyles = ["Casual", "Formal", "Gym", "Party"];

const ProductListing = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Filter Toggle Button for Mobile */}
      <div className="lg:hidden flex justify-end">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter size={20} /> Filters
        </Button>
      </div>
      
      {/* Filter Section */}
      <div
        className={`absolute lg:relative bg-white p-4 shadow-lg lg:block transition-transform ${
          showFilter ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-64 lg:w-auto z-10`}
      >
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
          Filters
          <Filter className="lg:hidden" size={20} onClick={() => setShowFilter(false)} />
        </h2>
        
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium">Categories</h3>
            <ul className="text-sm space-y-1">
              {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((item) => (
                <li key={item} className="cursor-pointer hover:underline">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Price Range */}
          <div>
            <h3 className="font-medium">Price</h3>
            <Slider defaultValue={[50, 200]} min={0} max={500} step={10} />
            <div className="text-sm flex justify-between">
              <span>$50</span> <span>$200</span>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-medium">Colors</h3>
            <div className="grid grid-cols-5 gap-2">
              {['green', 'red', 'yellow', 'blue', 'black', 'white', 'pink', 'orange'].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${color === 'black' ? 'border-gray-300' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="font-medium">Size</h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                <button key={size} className="px-2 py-1 border rounded-md bg-gray-100 hover:bg-gray-200">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
         {/* Dress Style Filter */}
         <div className="mt-4">
          <h3 className="font-semibold text-md">Dress Style</h3>
          <ul className="space-y-2 mt-2">
            {dressStyles.map((style) => (
              <li key={style} className="cursor-pointer text-gray-600 hover:text-black">
                {style}
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Filter Button */}
        <button className="mt-4 w-full bg-black text-white py-2 rounded-[7px] hover:bg-slate-600">Apply Filter</button>
     
      </div>
      
    </div>

    {/* mmmmmmm */}
    

      {/* Product Grid */}
      <main className="flex-1 p-5 lg:ml-1/4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
  <h1 className="text-2xl font-semibold">Casual</h1>
  <p className="text-gray-500 text-sm md:text-base text-left md:text-right">
    Showing 10 of 100 Products. Sort by 
    <span className="font-semibold cursor-pointer"> Most Popular</span>
  </p>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 sm:item-center">
         {/* div 1 */}
         <div>
          <div className="grid bg-[#F0EEED] rounded-[10px]">
                 <div className="" >
                   <Image src={iiii} alt="alt" className="rounded-[10px]" />
                 </div>
               </div>
         
               <h2 className="fonts mt-3">
               Gradient Graphic T-shirt</h2>
               <div className=" flex pt-2">
                 <Image src={frame} alt="ratings"></Image>
                 <h3 className="font text-[14px] leading-[18.9px] px-3">4.5/5</h3>
               </div>
               {/* price */}
               <div className="flex">
                 <h4 className="fontsss text-[24px] leading-[32.4px] text-black pt-2">$145</h4>
               </div>
               </div>
           {/* div 2 */}
         <div>
          <div className="grid bg-[#F0EEED] rounded-[10px]">
                 <div className="" >
                   <Image src={image2} alt="alt" className="rounded-[10px]" />
                 </div>
               </div>
         
               <h2 className="fonts mt-3">
               Polo with Tipping Details</h2>
               <div className=" flex pt-2">
                 <Image src={frame} alt="ratings"></Image>
                 <h3 className="font text-[14px] leading-[18.9px] px-3">4.5/5</h3>
               </div>
               {/* price */}
               <div className="flex">
                 <h4 className="fontsss text-[24px] leading-[32.4px] text-black pt-2">$180</h4>
               </div>
               </div>
           {/* div 2 */}
           <div>
          <div className="grid bg-[#F0EEED] rounded-[10px]">
                 <div className="" >
                   <Image src={image3} alt="alt" className="rounded-[10px]" />
                 </div>
               </div>
         
               <h2 className="fonts mt-3">
               Black Striped T-shirt</h2>
               <div className=" flex pt-2">
                 <Image src={frame} alt="ratings"></Image>
                 <h3 className="font text-[14px] leading-[18.9px] px-3">4.5/5</h3>
               </div>
               {/* price */}
               <div className="flex">
                 <h4 className="fontsss text-[24px] leading-[32.4px] text-black pt-2">$120</h4>
               </div>
               </div>
          <Card src={image4} Rating="3.5/5" price="$240" disprice="$260" heading="Skinny Fit Jeans" redbtn="-20%" frame={frame10} alt="image4" />
          <Card src={image5} heading="Checkered Shirt" price="$180" Rating="4.5/5" frame={frame} alt="image5" />
          <Card src={image6} heading="Sleeve Striped T-Shirt" price="$130" disprice="$160" frame={frame} redbtn="-30%" Rating="4.5/5" alt="image6" />
          <Card src={image7} alt="image7" price="$212" disprice="$232" heading="Vertical Striped Shirt" frame={frame1} redbtn="-20%" Rating="5.0/5" />
          <Card src={image8} alt="image8" price="$145" heading="Courage Graphic T-Shirt" Rating="4.5/5" frame={frame} />
          <Card src={image9} alt="image9" price="$80" heading="Loose Fit Bermuda Shorts" frame={frame1} Rating="5.0/5" />
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-10">
          <button className="flex items-center gap-2 text-gray-600 hover:text-black">
            <FaChevronLeft /> Previous
          </button>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-md bg-black text-white">1</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-200">2</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-200">3</button>
            <button className="w-8 h-8 rounded-md hover:bg-gray-200">...</button>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black">
            Next <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;

