import Image from "next/image";
import logo1 from "@/app/images/Vector (2).png";
import logo2 from "@/app/images/zara-logo-1 1.png";
import logo3 from "@/app/images/gucci-logo-1 1.png";
import logo4 from "@/app/images/prada-logo-1 1.png";
import logo5 from "@/app/images/ssss.png";

export default function Logos() {
  return (
    <main className="h-auto bg-black w-full py-6">
      <div className="flex flex-wrap justify-center md:justify-around items-center gap-6">
        <Image src={logo1} alt="logo1" className="max-w-[100px] md:max-w-[150px] animate-pulse" />
        <Image src={logo2} alt="logo2" className="max-w-[100px] md:max-w-[150px] animate-pulse" />
        <Image src={logo3} alt="logo3" className="max-w-[100px] md:max-w-[150px] animate-pulse" />
        <Image src={logo4} alt="logo4" className="max-w-[100px] md:max-w-[150px] animate-pulse" />
        <Image src={logo5} alt="logo5" className="max-w-[100px] md:max-w-[150px] animate-pulse" />
      </div>
    </main>
  );
}
