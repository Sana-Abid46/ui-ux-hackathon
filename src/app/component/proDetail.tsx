'use client';

import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Image from "next/image";
import imggggg from "@/app/images/image 1.png";
import vector from "@/app/images/Vector.png";
import frame from "@/app/images/Frame 10o.png";
import { useState } from "react";
import image5 from "@/app/images/image 5.png";
import image6 from "@/app/images/image 6.png";
import image11 from "@/app/images/image 1 (1).png";
import Link from "next/link";

export default function ProductDetail() {
  const [count, setCount] = useState(1);
  return (
    <div className="container mx-auto mb-32 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-4 pt-4 text-sm sm:text-base">
       <Link href="/"> <h3 className="hover:font-bold cursor-pointer inte">Home</h3></Link>
        <Image src={vector} alt="arrow" className="h-2 -rotate-90 mt-2" />
       <Link href='/'> <h3 className="hover:font-bold cursor-pointer inte">Shop</h3></Link>
        <Image src={vector} alt="arrow" className="h-2 -rotate-90 mt-2" />
        <Link href='./product'><h3 className="hover:font-bold cursor-pointer inte">Men</h3></Link>
        <Image src={vector} alt="arrow" className="h-2 -rotate-90 mt-2" />
        <Link href='./product'><h3 className="hover:font-bold cursor-pointer inte">T-Shirt</h3></Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Left Side - Images */}
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-1/2">
          <div className="flex sm:flex-col gap-4">
            <Image src={imggggg} alt="product" className="w-24 sm:w-32 border rounded-lg hover:border-black" />
            <Image src={image5} alt="product" className="w-24 sm:w-32 border rounded-lg hover:border-black" />
            <Image src={image6} alt="product" className="w-24 sm:w-32 border rounded-lg hover:border-black" />
          </div>
          <div className="w-full sm:w-96">
            <Image src={image11} alt="main product" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold">One Life Graphic T-shirt</h1>
          <div className="flex items-center gap-2">
            <Image src={frame} alt="ratings" className="w-16" />
            <h3 className="text-gray-700">4.5/5</h3>
          </div>
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-semibold">$260</h4>
            <h4 className="text-lg text-gray-400 line-through">$300</h4>
            <div className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full">-40%</div>
          </div>
          <p className="text-gray-600">Soft and breathable fabric, perfect for any occasion.</p>

          {/* Select Colors */}
          <div>
            <h2 className="text-gray-700">Select Colors</h2>
            <div className="flex gap-3 mt-2">
              <div className="w-10 h-10 bg-[#4F4631] rounded-full flex items-center justify-center hover:ring-2 ring-black cursor-pointer">
                <Check className="text-white" />
              </div>
              <div className="w-10 h-10 bg-[#314F4A] rounded-full cursor-pointer"></div>
              <div className="w-10 h-10 bg-[#31344F] rounded-full cursor-pointer"></div>
            </div>
          </div>

          {/* Choose Size */}
          <div>
            <h2 className="text-gray-700">Choose Size</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">Small</div>
              <div className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">Medium</div>
              <div className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">Large</div>
              <div className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white cursor-pointer">X-Large</div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <div className="flex items-center gap-3 px-5 py-3 bg-gray-200 rounded-lg">
              <button onClick={() => setCount(prev => Math.max(1, prev - 1))}>
                <Minus />
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(prev => prev + 1)}>
                <Plus />
              </button>
            </div>
            <Button className="bg-black text-white px-8 py-3 rounded-lg w-full sm:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
