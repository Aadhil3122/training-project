"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/main-slider/1.jpg",
    "/images/main-slider/2.jpg",
    "/images/main-slider/3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
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
    <div className="relative h-[700px] w-full overflow-hidden">
      {/* Slider Wrapper */}
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

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h4 className="text-white text-xl md:text-2xl font-semibold">
          LARGEST ONLINE MADRASAH
        </h4>
        <h1 className="text-white text-6xl font-bold md:text-7xl ">
          Islamic Online
        </h1>
        <h1 className="text-white text-6xl md:text-7xl font-bold">Madrasah</h1>
        <h4 className="text-white  text-xl md:text-xl ">
          Islamic online madrasah is an ISO certified educational institution of
          international standards
        </h4>
        <button className="bg-yellow-400 text-white px-8 py-3 rounded hover:bg-green-700">
          Quick Join Now
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
