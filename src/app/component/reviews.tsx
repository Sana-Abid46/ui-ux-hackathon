// import Image from "next/image";
// import review from "@/app/images/Frame 10.png";
// import tick from "@/app/images/Frame.png";

// export default function Review({ names, paragraph }: { names: string, paragraph: string }) {
//     return (
//         // parent div
//         <main>
//             {/* main card */}
//             <div className="h-[240px] w-[400px] rounded-[20px] border bg-[#a5a3a31a]">
//                 {/* is div ke andr content rhay ga */}
//                 <div className="h-[161.58px] w-[336px] justify-between">
//                     {/* image div */}
//                     <div>
//                         <Image src={review} alt="reviews" className="mt-6 mx-7"/>
//                     </div>
//                     {/* name and tick logo */}
//                     <div className="flex ">
//                         <h2 className="fontsss text-[20px] leading-[22px] text-black ml-7 py-5">{names}</h2>
//                         <div>
//                         <Image src={tick} alt="tickmark" className="py-[1.1rem] ml-1"/>
//                         </div>
//                     </div>
//                     <p className="font text-[16px] leading-[22px] text-[#00000099] ml-7">{paragraph}</p>
//                 </div>
//             </div>
//         </main>
//     )
// }

import Image from "next/image";
import review from "@/app/images/Frame 10.png";
import tick from "@/app/images/Frame.png";

export default function Review({ names, paragraph }: { names: string; paragraph: string }) {
    return (
        <main>
            {/* Card Container */}
            <div className="h-auto w-full max-w-sm md:h-[240px] md:w-[400px] rounded-[20px] border bg-[#a5a3a31a] mx-auto">
                {/* Card Content */}
                <div className="h-auto w-full px-4 py-6 md:px-7 md:py-0">
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-start">
                        <Image src={review} alt="reviews" className="w-12 h-12 md:w-auto md:h-auto" />
                    </div>
                    {/* Name and Tick Section */}
                    <div className="flex items-center justify-center md:justify-start mt-4 md:mt-6">
                        <h2 className="fontsss text-[16px] md:text-[20px] leading-[22px] text-black">
                            {names}
                        </h2>
                        <Image src={tick} alt="tickmark" className="ml-2 h-4 w-4 md:h-auto md:w-auto" />
                    </div>
                    {/* Paragraph Section */}
                    <p className="font text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#00000099] text-center md:text-left mt-4">
                        {paragraph}
                    </p>
                </div>
            </div>
        </main>
    );
}

