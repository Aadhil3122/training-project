"use client";

import { Star } from "lucide-react";

export default function CustomersReview() {
  return (
    <section className="relative w-full overflow-hidden py-0">
      
      {/* Pattern Background */}
      <img
        src="/images/background/testimonial-one_bg.png"
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Soft Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#f7f2dc]/90 via-[#e9f6ee]/90 to-[#e6f3ff]/90" /> */}

      {/* Decorative Arabic Text */}
      <div className="absolute right-40 top-20 text-green-200 text-[80px]  opacity-40 select-none">

        <img src="/images/icons/ameen-1.png" alt="ameen" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="/images/resource/testimonial.jpg"
              alt="Student Reading Quran"
              className="rounded-xl shadow-xl w-full max-w-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customers Review
            </h2>

            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              Honestly i don’t have enough good words to write about resala academy
              everyone in resala academy are very nice very calm they are also
              flexible about your schedules. i just want say
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src="/images/resource/author-1.png"
                alt="Author"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Hafiz bin Usif
                </h4>
                <p className="text-sm text-gray-500">
                  Quran Teacher
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 pl-92 mt-10">
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full  bg-green-600"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
