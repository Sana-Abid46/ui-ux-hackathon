import Image from 'next/image';
import image32 from '@/app/images/Frame 32-remove-bg-io.png';
import frame from '@/app/images/Frame 10o.png';
import image33 from '@/app/images/Frame 33-remove-bg-io.png';
import image34 from '@/app/images/Frame 34-remove-bg-io.png';
import image38 from '@/app/images/Frame 38-remove-bg-io.png';

const products = [
  { img: image32, title: "Polo with Contrast Trims", rating: "4.0/5", price: "$212", oldPrice: "$242", discount: "-20%" },
  { img: image33, title: "Gradient Graphic T-shirt", rating: "3.5/5", price: "$145" },
  { img: image34, title: "Polo with Tipping Details", rating: "4.5/5", price: "$180" },
  { img: image38, title: "Black Striped T-shirt", rating: "5.0/5", price: "$120", oldPrice: "$150", discount: "-30%" }
];

export default function AlsoLike() {
  return (
    <div className="container mx-auto mb-14 px-4">
      {/* Heading */}
      <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-extrabold text-center uppercase py-8 md:py-12 animate-bounce">
        You might also like
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-[#F0EEED] rounded-[20px] p-4 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            {/* Product Image */}
            <div className="w-full flex justify-center">
              <Image src={product.img} alt={product.title} className="w-full h-auto object-cover rounded-md" />
            </div>

            {/* Product Details */}
            <h2 className="font-bold text-lg sm:text-xl mt-3 text-center">{product.title}</h2>
            <div className="flex justify-center items-center gap-2 pt-2">
              <Image src={frame} alt="ratings" />
              <h3 className="text-[14px] leading-[18.9px]">{product.rating}</h3>
            </div>

            {/* Price Section */}
            <div className="flex justify-center items-center gap-2 pt-2">
              <h4 className="text-[24px] font-bold text-black">{product.price}</h4>
              {product.oldPrice && <h4 className="text-[24px] line-through text-gray-400">{product.oldPrice}</h4>}
            </div>

            {/* Discount Badge */}
            {product.discount && (
              <div className="mt-3 w-[80px] h-[30px] flex items-center justify-center rounded-full bg-[#F87A78]/20 mx-auto">
                <h4 className="text-[#FF3333] text-[12px]">{product.discount}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

