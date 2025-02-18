
import Card from "./card";
import img07 from "@/app/images/image 7 (1).png";
import img08 from "@/app/images/image 8 (1).png";
import img09 from "@/app/images/image 9 (2).png";
import img10 from "@/app/images/image 10 (1).png";
import rating from "@/app/images/Frame 10 (2).png";
import ratings from "@/app/images/Frame 10 (1).png";
import imgg from "@/app/images/Frame 10 (3).png";
import imggg from "@/app/images/Frame 10 (4).png";
import Btn from "./btn";

export default function TopSelling() {
  return (
    <div className="h-full px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <h1 className="text-[24px] md:text-[36px] lg:text-[48px] inte leading-tight lg:leading-[57.6px] text-center font-extrabold py-8 md:py-12 animate-bounce">
        TOP SELLING
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        <div className="flex justify-center">
          <Card
            src={img07}
            alt="img07"
            heading="Vertical Striped Shirt"
            Rating="5.0/5"
            price="$212"
            disprice="$232"
            redbtn="-20%"
            frame={rating}
          />
        </div>
        <div className="flex justify-center">
          <Card
            src={img08}
            alt="img08"
            heading="Courage Graphic T-Shirt"
            Rating="4.0/5"
            price="$145"
            frame={ratings}
          />
        </div>
        <div className="flex justify-center">
          <Card
            src={img09}
            alt="img09"
            heading="Loose Fit Bermuda Shorts"
            Rating="3.0/5"
            price="$80"
            frame={imggg}
          />
        </div>
        <div className="flex justify-center">
          <Card
            src={img10}
            alt="img10"
            heading="Faded Skinny Jeans"
            Rating="4.5/5"
            price="$210"
            frame={imgg}
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <Btn />
      </div>
    </div>
  );
}

