// import Card from "./card";
// import img7 from "@/app/image 7.png";
// import img8 from "@/app/image 8.png";
// import img9 from "@/app/image 9.png";
// import img10 from "@/app/image 10.png";
// import Btn from "./btn";
// import frame from "@/app/Frame 10.png";
// import frame2 from "@/app/Frame 10 (1).png"


// export default function NewArrivals() {
//     return (
//         <div className="h-full">
//             <h1 className="text-[48px] inte leading-[57.6px] text-center font-extrabold py-12 ">NEW ARRIVALS</h1>
//             <div className="flex gap-6 items-center justify-center">
//                 <Card src={img7} alt="1stImg" heading="T-shirt with Tape Details" Rating="4.5/5" price="$120" frame={frame}/>
//                 <Card src={img8} alt="2ndImg" heading="Skinny Fit Jeans" Rating="3.5/5" price="$240" disprice="$260" redbtn="-20%" frame={frame2}/>
//                 <Card src={img9} alt="3rdImg" heading="Checkered Shirt" Rating="4.5/5" price="$180" frame={frame}/>
//                 <Card src={img10} alt="4thImg" heading="Sleeve Striped T-shirt" Rating="4.5/5" price="$130" disprice="$160" redbtn="-30%" frame={frame}/>
//             </div>
//             <Btn/>
//             <div className="mt-20 mb-8 items-center justify-center flex">
//                 <hr className="w-[1200px] hover:bg-black cursor-pointer transition-all duration-300"/>
//             </div>
//         </div>
//     )
// }

import Card from "./card";
import img7 from "@/app/image 7.png";
import img8 from "@/app/image 8.png";
import img9 from "@/app/image 9.png";
import img10 from "@/app/image 10.png";
import Btn from "./btn";
import frame from "@/app/Frame 10.png";
import frame2 from "@/app/Frame 10 (1).png";

export default function NewArrivals() {
  return (
    <div className="h-full px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <h1 className="text-[24px] md:text-[36px] lg:text-[48px] inte leading-tight lg:leading-[57.6px] text-center font-extrabold py-8 md:py-12">
        NEW ARRIVALS
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        <div className="flex justify-center">
          <Card
            src={img7}
            alt="1stImg"
            heading="T-shirt with Tape Details"
            Rating="4.5/5"
            price="$120"
            frame={frame}
          />
        </div>
        <div className="flex justify-center">
          <Card
            src={img8}
            alt="2ndImg"
            heading="Skinny Fit Jeans"
            Rating="3.5/5"
            price="$240"
            disprice="$260"
            redbtn="-20%"
            frame={frame2}
          />
        </div>
        <div className="flex justify-center">
          <Card
            src={img9}
            alt="3rdImg"
            heading="Checkered Shirt"
            Rating="4.5/5"
            price="$180"
            frame={frame}
          />
        </div>
        <div className="flex justify-center">
          <Card
            src={img10}
            alt="4thImg"
            heading="Sleeve Striped T-shirt"
            Rating="4.5/5"
            price="$130"
            disprice="$160"
            redbtn="-30%"
            frame={frame}
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <Btn />
      </div>

      {/* Horizontal Line */}
      <div className="mt-12 md:mt-16 mb-8 flex items-center justify-center">
        <hr className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] hover:bg-black cursor-pointer transition-all duration-300" />
      </div>
    </div>
  );
}
