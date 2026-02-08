"use client";

import { Play } from "lucide-react";
import Link from "next/link";

export default function RecordedClass() {
  const classes = [
    { img: "/images/Recorder/class-1.webp", title: "Tafseer Quran online for Kids" },
    { img: "/images/Recorder/class-2.webp", title: "Arabic Conversation Course" },
    { img: "/images/Recorder/class-3.webp", title: "Online Quran Recitation Course" },
    { img: "/images/Recorder/class-4.webp", title: "Online Tajweed Rules Course" },
    { img: "/images/Recorder/class-5.webp", title: "Quran Memorization Ijazah" },
    { img: "/images/Recorder/class-6.webp", title: "Quran Recitation Ijazah" },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[420px]">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Our Record Class</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Our Record Class</span>
          </p>
        </div>
      </div>

      {/* ================= RECORDED CLASSES GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                {/* PLAY ICON */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                    <Play size={26} className="text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-bold text-lg">{item.title}</h3>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                  <span>Record: 12 Oct 2025</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                    30 mins 12s
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    ▶ Watch
                  </button>
                  <button className="flex-1 bg-yellow-400 py-2 rounded-lg hover:bg-yellow-500 transition">
                    ⬇ Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
