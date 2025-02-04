import Image from "next/image";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        Home &gt; <span className="text-black">Cart</span>
      </div>

      {/* Cart Heading */}
      <h1 className="text-3xl font-bold mb-6">YOUR CART</h1>

      {/* Cart Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {[
            {
              id: 1,
              name: "Gradient Graphic T-shirt",
              price: "$145",
              size: "Large",
              color: "White",
              img: "/images/image 10.png",
            },
            {
              id: 2,
              name: "Checkered Shirt",
              price: "$180",
              size: "Medium",
              color: "Red",
              img: "/images/shirt.png",
            },
            {
              id: 3,
              name: "Skinny Fit Jeans",
              price: "$240",
              size: "Large",
              color: "Blue",
              img: "/images/jeans.png",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              {/* Image */}
              <div className="w-20 h-20 relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-lg font-semibold mt-1">{item.price}</p>
              </div>

              {/* Quantity & Remove */}
              <div className="flex items-center space-x-4">
                <button className="px-3 py-1 border rounded-lg">-</button>
                <span className="font-semibold">1</span>
                <button className="px-3 py-1 border rounded-lg">+</button>
                <button className="text-red-500 text-lg">🗑️</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">$565</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span className="font-semibold">-$113</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-semibold">$15</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span>$467</span>
          </div>

          {/* Promo Code Input */}
          <div className="flex items-center mt-4 border rounded-lg p-2">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full outline-none px-2"
            />
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white py-3 mt-4 rounded-lg flex items-center justify-center">
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
