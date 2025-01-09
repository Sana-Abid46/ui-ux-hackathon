import React from 'react';
import Image from 'next/image';
import firstImg from "@/app/images/Group.png";
import secondImg from "@/app/images/2.png";
import thirdImg from "@/app/images/logo-instagram 1.png";
import fourthImg from "@/app/images/logo-github 1.png";

function Footer() {
  return (
    <main className='h-[589px] bg-white flex flex-col relative'>
      {/* Black div */}
      <div className='w-[1210px] h-[180px] rounded-[20px] bg-black py-[36px] px-[64px] mx-auto flex z-10'
        style={{ marginBottom: '-90px' }}>
        {/* Black container text */}
        <h2 className='inte font-extrabold text-[40px] leading-[45px] text-white py-3'>
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
        {/* White container */}
        <div className='grid gap-[14px] ml-auto'>
          {/* First input */}
          <div className='h-[48px] w-[349px] rounded-[62px] bg-white flex'>
            <div className="h-[16px] w-[20px] bg-gray-400 my-4 ml-3"></div>
            <h3 className='ml-3 text-gray-400 text-[16px] leading-[21.6px] font-medium my-3'>
              Enter your email address
            </h3>
          </div>
          {/* Second button */}
          <div className='h-[48px] w-[349px] rounded-[62px] bg-white text-center'>
            <h2 className='text-black text-[16px] leading-[21.6px] font-normalbold py-3'>
              Subscribe to Newsletter
            </h2>
          </div>
        </div>
      </div>

      {/* Gray container */}
      <div className='w-[1441px] h-[499px] bg-[#F0F0F0]'>
        {/* Content of the gray container */}
        <div className='w-[1240px] h-[177px]  justify-between py-32 pl-20 flex'>
          {/* first portion */}
          <div className='h-[177px] gap-[35px]'>
            <h1 className='inte text-[33.45px] leading-[40.15px] text-black font-extrabold'>
              SHOP.CO
            </h1>
            <p className='font text-[14px] leading-[22px] text-gray-500 text-wrap pt-4 '>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
            {/* images */}
            <div className='pt-8 flex gap-2'>
              {/* first */}
              <div className='bg-white rounded-full h-7 w-7 flex items-center justify-center border '>
                <Image src={firstImg} alt="img" className='' />
              </div>
              {/* second */}
              <Image src={secondImg} alt="img" className='h-6 w-6' />
              {/* thhird */}
              <div className='bg-white rounded-full h-7 w-7 flex items-center justify-center border '>
                <Image src={thirdImg} alt="img" />
              </div>
              {/* fourth */}
              <div className='bg-white rounded-full h-7 w-7 flex items-center justify-center border '>
                <Image src={fourthImg} alt="img" />
              </div>
            </div>
          </div>
          {/* second portion */}
          <div className='gap-[26px]'>
            <h3>
              COMPANY
            </h3>
            <div className='grid'>
              <h4>About

                Features

                Works

                Career  </h4>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;


