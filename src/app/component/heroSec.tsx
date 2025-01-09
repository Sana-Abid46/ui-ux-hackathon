// import Image from "next/image";
// import img from "@/app/Frame 61.png";
// import img2 from "@/app/Frame 62.png";
// import img3 from "@/app/Frame 63.png"
// import img4 from "@/app/Frame 64.png";

// export default function HeroSection(){
//     return (
//         <div className="h-[950px] w-full items-center justify-center flex">
//             <div className="w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px] mt-5 ">
//               <h1 className="inte font-extrabold text-[48px] leading-[57.6px] text-black text-center pt-9">BROWSE BY DRESS STYLE</h1>
//               <div className="flex items-center justify-center">
//                 <Image src={img} alt="img" className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80 mx-3 mt-20"/>
//                 <Image src={img2} alt="img" className="mx-3 mt-20 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"/>
//                 </div>
//                 <div className="flex items-center justify-center">
//                  <Image src={img4} alt="img" className="mx-3  mt-8 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"/>
//  <Image src={img3} alt="img" className="mx-3 mt-8  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80"/>
//  </div>

//               </div>
//             </div>
//     )
// };

import Image from "next/image";
import img from "@/app/Frame 61.png";
import img2 from "@/app/Frame 62.png";
import img3 from "@/app/Frame 63.png";
import img4 from "@/app/Frame 64.png";

export default function HeroSection() {
    return (
        <div className="h-auto w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1239px] h-auto bg-[#F0F0F0] rounded-[40px] mt-11 p-4 sm:p-6 lg:p-8">
                <h1 className="font-extrabold text-[24px] sm:text-[36px] lg:text-[48px] leading-[1.2] text-black text-center pt-4 sm:pt-6 lg:pt-9">
                    BROWSE BY DRESS STYLE
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:mt-20">
                    <Image
                        src={img}
                        alt="img"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80 mx-2 sm:mx-3"
                    />
                    <Image
                        src={img2}
                        alt="img"
                        className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 mx-2 sm:mx-3"
                    />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:mt-8">
                    <Image
                        src={img4}
                        alt="img"
                        className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 mx-2 sm:mx-3"
                    />
                    <Image
                        src={img3}
                        alt="img"
                        className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-80 mx-2 sm:mx-3"
                    />
                </div>
            </div>
        </div>
    );
};
