// import Review from "./reviews";
// import arrow from "@/app/images/arrow (1).png";
// import Image from "next/image";

// export default function ReviewSec(){
//     return (
//         <main className="h-screen ">
//             <div className="flex">
//             <h1 className="inte text-[48px] leading-[57.6px] text-black font-extrabold pt-16 pb-12 px-16">OUR HAPPY CUSTOMERS</h1>
//             <div className="flex pt-28 gap-3 pl-96">
//             <Image src={arrow} alt="arrow" className=" h-[18.75] w-[15.76] hover:bg-slate-300"></Image>
//             <Image src={arrow} alt="arrow" className="rotate-180 h-[18.75] w-[15.76] hover:bg-slate-300"></Image>
//             </div>
//             </div>
               
        
//             <div className="flex items-center justify-center gap-3">
//                 {/* 01 */}
//             <Review names="Sarah M." paragraph="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."/>
//             {/* 02 */}
//             <Review names="Alex K." paragraph="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."/>
//             {/* 03 */}
// <Review names="James L." paragraph="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."/>
//         </div>
//         </main>
//     )
// }

import Review from "./reviews";
import arrow from "@/app/images/arrow (1).png";
import Image from "next/image";

export default function ReviewSec() {
    return (
        <main className="min-h-screen px-4">
            {/* Heading and Arrows Section */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:px-16">
                <h1 className="inte text-[32px] md:text-[48px] leading-[40px] md:leading-[57.6px] text-black font-extrabold pt-8 pb-6 lg:pb-12 text-center lg:text-left">
                    OUR HAPPY CUSTOMERS
                </h1>
                <div className="flex gap-4 pt-4 lg:pt-0">
                    <Image
                        src={arrow}
                        alt="arrow"
                        className="h-5 w-4 md:h-[18.75px] md:w-[15.76px] hover:bg-slate-300 cursor-pointer"
                    />
                    <Image
                        src={arrow}
                        alt="arrow"
                        className="rotate-180 h-5 w-4 md:h-[18.75px] md:w-[15.76px] hover:bg-slate-300 cursor-pointer"
                    />
                </div>
            </div>

            {/* Reviews Section */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                <Review
                    names="Sarah M."
                    paragraph="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                />
                <Review
                    names="Alex K."
                    paragraph="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
                />
                <Review
                    names="James L."
                    paragraph="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
                />
            </div>
        </main>
    );
}
