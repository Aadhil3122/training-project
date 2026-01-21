"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
];

export default function Gallery() {
  const [order, setOrder] = useState(images);

  // 🔁 Auto change every 4 seconds (chain effect)
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const newArr = [...prev];
        newArr.push(newArr.shift());
        return newArr;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-10 flex items-start justify-between mb-10">
        <div>
          <p className="text-sm text-green-700 font-bold mb-2">
            STUDENT GALLERY
          </p>
          <h2 className="text-4xl font-bold">Our Islamic Institute</h2>
          <h2 className="text-4xl font-bold">Academy Gallery</h2>
        </div>

        {/* RIGHT BUTTON */}
        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
          Quick Start Now
        </button>
      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {order.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl"
          >
            {/* IMAGE */}
            <img
              src={img}
              alt="Gallery"
              className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* DARK OVERLAY + BORDER FRAME */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              {/* Rounded Border */}
              <div className="absolute inset-3 rounded-xl border-2 border-white"></div>
              {/* Dark Layer */}
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
            </div>

            {/* YELLOW ARROW */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold">
                ↗
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
