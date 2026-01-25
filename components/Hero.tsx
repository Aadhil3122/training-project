"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/main-slider/1.jpg",
    "/images/main-slider/2.jpg",
    "/images/main-slider/3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrent((current + 1) % images.length);
  const goPrev = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative h-[420px] sm:h-[520px] md:h-[650px] lg:h-[700px] w-full overflow-hidden">
      {/* Slider */}
      <div
        className="flex h-full w-[300%] transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 text-center">
        <h4 className="text-white text-sm sm:text-lg md:text-xl font-semibold tracking-wide">
          LARGEST ONLINE MADRASAH
        </h4>

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
          Islamic Online
        </h1>

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Madrasah
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mt-4">
          Islamic online madrasah is an ISO certified educational institution of
          international standards
        </p>

        <button className="mt-6 bg-yellow-400 text-white px-6 sm:px-8 py-3 rounded hover:bg-green-700 transition">
          Quick Join Now
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl"
      >
        ›
      </button>
    </div>
  );
}
