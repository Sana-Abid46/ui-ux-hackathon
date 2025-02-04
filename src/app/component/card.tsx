import Image from "next/image";


const Card = ({ frame, src, style, alt, heading, Rating, price, disprice, redbtn }: { frame?: any, src: any, alt: string, heading: string, Rating: string, price: string, disprice?: string, redbtn?: string, style?: any}) => {
  return (
    <main>
      <div className="w-[295px] h-[298px] top-[1104px] left-[415px] rounded-[20px] bg-[#F0EEED] ">
        <div className="" >
          <Image src={src} alt="alt" className="py-9 mx-14 " />
        </div>
      </div>

      <h2 className="fonts mt-3">
        {heading}</h2>
      <div className="flex pt-2">
        <Image src={frame} alt="ratings"></Image>
        <h3 className="font text-[14px] leading-[18.9px] px-3">{Rating}</h3>
      </div>
      {/* price */}
      <div className="flex">
        <h4 className="fontsss text-[24px] leading-[32.4px] text-black pt-2">{price}</h4>
        <h4 className="fontsss text-[24px] leading-[32.4px] line-through text-gray-400 pt-2 px-2">
          {disprice}
        </h4>
               {/* Optional Red Button */}
      {redbtn && (
        <div className="mt-3 w-[80px] h-[30px] flex items-center justify-center rounded-full bg-[#F87A78]/20">
          <h4 className="text-[#FF3333] text-[12px]">{redbtn}</h4>
        </div>)}
      </div>
    </main>
  )
}

export default Card

