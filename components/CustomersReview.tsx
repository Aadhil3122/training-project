"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Honestly i don’t have enough good words to write about resala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say",
    name: "Hafiz bin Usif",
    role: "Quran Teacher",
    avatar: "/images/resource/author-1.png",
  },
  {
    text: "Honestly i don’t have enough good words to write about resala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say",
    name: "Hafiz bin Usif",
    role: "Quran Teacher",
    avatar: "/images/resource/author-1.png",
  },
  {
    text: "Honestly i don’t have enough good words to write about resala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say",
    name: "Hafiz bin Usif",
    role: "Quran Teacher",
    avatar: "/images/resource/author-1.png",
  },
];

export default function CustomersReview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background */}
      <img
        src="/images/background/testimonial-one_bg.png"
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/resource/testimonial.jpg"
              alt="Student Reading Quran"
              className="rounded-xl shadow-xl
                         w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left transition-all duration-500">
            {/* Stars */}
            <div className="flex justify-center md:justify-start gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Customers Review
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              {reviews[active].text}
            </p>

            {/* AUTHOR */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img
                src={reviews[active].avatar}
                alt="Author"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {reviews[active].name}
                </h4>
                <p className="text-sm text-gray-500">{reviews[active].role}</p>
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center md:justify-start gap-3 mt-8 sm:mt-10">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    active === i ? "bg-green-600 scale-125" : "bg-green-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
