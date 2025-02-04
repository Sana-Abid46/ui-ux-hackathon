'use client';

import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design.",
  },
];

export default function Reviews() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-semibold">All Reviews ({reviews.length})</h2>
      </div>

      {/* Reviews List (Only 3 Reviews) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm bg-white">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
            </div>
            <p className="mt-2 font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">Posted on {review.date}</p>
            <p className="mt-2 text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Load More Reviews Button */}
      <button
        onClick={() => router.push("/all-reviews")}
        className="block mx-auto bg-gray-200 text-black px-6 py-2 rounded-[9px] hover:bg-gray-300 mb-10 hhh  text-[15px] h-[50px] w-52"
      >
        Load More Reviews
      </button>
    </div>
  );
}
