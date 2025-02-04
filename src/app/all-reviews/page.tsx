'use client';

import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

const allReviews = [
  { name: "Samantha D.", date: "August 14, 2023", review: "I absolutely love this t-shirt! ..." },
  { name: "Alex M.", date: "August 15, 2023", review: "The t-shirt exceeded my expectations! ..." },
  { name: "Ethan R.", date: "August 16, 2023", review: "This t-shirt is a must-have for anyone ..." },
  { name: "Olivia P.", date: "August 17, 2023", review: "As a UI/UX enthusiast, I value simplicity ..." },
  { name: "Liam K.", date: "August 18, 2023", review: "This t-shirt is a fusion of comfort ..." },
  { name: "Ava H.", date: "August 19, 2023", review: "I'm not just wearing a t-shirt; ..." },
];

export default function AllReviews() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-semibold">All Reviews ({allReviews.length})</h2>
        <button onClick={() => router.back()} className="bg-gray-200 px-4 py-1 rounded-md">
          Back
        </button>
      </div>

      {/* All Reviews List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {allReviews.map((review, index) => (
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
    </div>
  );
}
