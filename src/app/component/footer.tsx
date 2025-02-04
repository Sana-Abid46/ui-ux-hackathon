import React from 'react';
import Image from 'next/image';
import firstImg from "@/app/images/Group.png";
import secondImg from "@/app/images/2.png";
import thirdImg from "@/app/images/logo-instagram 1.png";
import fourthImg from "@/app/images/logo-github 1.png";
import img1 from "@/app/images/Badge.png";
import img2 from "@/app/images/Badge (1).png";
import img3 from "@/app/images/Badge (2) (1).png";
import img4 from "@/app/images/Badge (3).png";
import img5 from "@/app/images/Badge (4).png";

function Footer() {
  return (
    <main className='h-[589px] bg-white flex flex-col relative'>
    {/* Black div */}
<div className="w-full max-w-[1210px] mx-auto bg-black rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[64px] flex flex-col md:flex-row items-center justify-between z-10"
  style={{ marginBottom: '-90px' }}>
  
  {/* Text Section */}
  <h2 className="text-white font-extrabold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-tight text-center md:text-left animate-pulse">
    STAY UP TO DATE ABOUT <br className="hidden md:block" /> OUR LATEST OFFERS
  </h2>
  
  {/* Input & Button Container */}
  <div className="w-full max-w-md mt-5 md:mt-0 flex flex-col gap-3">
    
    {/* Email Input */}
    <div className="w-full bg-white rounded-full flex items-center px-4 py-2">
      <div className="h-4 w-5 bg-gray-400"></div>
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="ml-3 w-full text-gray-600 text-sm sm:text-base outline-none bg-transparent"
      />
    </div>
    
    {/* Subscribe Button */}
    <button className="w-full bg-white rounded-full text-black text-sm sm:text-base font-semibold py-3 hover:bg-gray-200 transition">
      Subscribe to Newsletter
    </button>

  </div>
</div>


      {/* mmmmmmmmmmmmmmmmmmm */}
       {/* Container */}
       <div className="flex flex-col md:flex-row h-full md:h-[400px] justify-between items-start p-5 pt-[160px] sm:pt-32 border-b bg-gray-100">
        
        {/* Top Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-[200px] sm:my-4 sm:ml-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
          <p className="text-sm mt-3 text-[#00000099] text-center md:text-left">
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
          
          {/* Icons */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <Image src={firstImg} className="w-5 sm:w-6" alt="pic" />
            <Image src={secondImg} className="w-5 sm:w-6" alt="pic" />
            <Image src={thirdImg} className="w-5 sm:w-6" alt="pic" />
            <Image src={fourthImg} className="w-5 sm:w-6" alt="pic" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-4 place-items-center">
          
          {/* Column 1 */}
          <ul className="space-y-2">
            <h2 className="text-sm sm:text-lg font-bold">Company</h2>
            <li className="text-sm text-[#00000099]">About</li>
            <li className="text-sm text-[#00000099]">Features</li>
            <li className="text-sm text-[#00000099]">Works</li>
            <li className="text-sm text-[#00000099]">Career</li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-2">
            <h2 className="text-sm sm:text-lg font-bold">HELP</h2>
            <li className="text-sm text-[#00000099]">Customer Support</li>
            <li className="text-sm text-[#00000099]">Delivery Details</li>
            <li className="text-sm text-[#00000099]">Terms & Conditions</li>
            <li className="text-sm text-[#00000099]">Privacy Policy</li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-2">
            <h2 className="text-sm sm:text-lg font-bold">FAQ</h2>
            <li className="text-sm text-[#00000099]">Account</li>
            <li className="text-sm text-[#00000099]">Manage Deliveries</li>
            <li className="text-sm text-[#00000099]">Orders</li>
            <li className="text-sm text-[#00000099]">Payments</li>
          </ul>

          {/* Column 4 */}
          <ul className="space-y-2">
            <h2 className="text-sm sm:text-lg font-bold">RESOURCES</h2>
            <li className="text-sm text-[#00000099]">Free eBooks</li>
            <li className="text-sm text-[#00000099]">Development Tutorial</li>
            <li className="text-sm text-[#00000099]">How to - Blog</li>
            <li className="text-sm text-[#00000099]">Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-5">
        <p className="text-sm text-center sm:text-left font-medium">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex items-center pt-3 justify-center sm:pr-3 space-x-2">
          <Image src={img1} className="w-8 sm:w-10" alt="pic" />
          <Image src={img2} className="w-8 sm:w-10" alt="pic" />
          <Image src={img3} className="w-8 sm:w-10" alt="pic" />
          <Image src={img4} className="w-8 sm:w-10" alt="pic" />
          <Image src={img5} className="w-8 sm:w-10" alt="pic" />
        </div>
      </div>
    </main>
  );
}

export default Footer;


