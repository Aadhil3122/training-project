"use client";

import NewsUpdate from "@/components/NewsUpdate";
import Link from "next/link";

export default function blogClassic() {
  return (
    <>
      <div className="relative w-full h-[420px]">
        {/* Image */}
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* TEXT — THIS IS THE KEY FIX */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Blog List</h1>

          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Blog List</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="grid col-span-2">
          <NewsUpdate />
        </div>
        <div>
          <div className="bg-gray-100 mr-10">
            <h1 className="font-bold p-3 border border-spacing-1 border-black text-2xl">
              Blog Categories
            </h1>
            <div className="grid grid-cols-3 p-7">
              <div className="col-span-2">
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Web Design
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Online Class
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Digital Class
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Lear About islam
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Digital business
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Learn Quran
                </h1>
              </div>
              <div>
                <h1 className="font-bold p-3 text-gray-400 text-xl">10</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">07</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">09</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">15</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">11</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">02</h1>
              </div>
            </div>
          </div>
          <div className="mt-10 mr-10">
            <div className="bg-gray-100 ">
              <h1 className="font-semibold text-2xl p-3">Lastest News</h1>
              <div className="flex items-center gap-4 border border-spacing-1 p-5">
                <img
                  src="/images/Blog/post-thumb-3.png"
                  alt="quran"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h1 className="text-sm text-gray-500">12 Sep 2025</h1>
                  <h1 className="font-semibold">
                    Best Online Female Quran Tutors
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-spacing-1 p-5">
                <img
                  src="/images/Blog/post-thumb-2.webp"
                  alt="quran"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h1 className="text-sm text-gray-500">12 Sep 2025</h1>
                  <h1 className="font-semibold">
                    Dua E Hajat and How to Perform
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-spacing-1 p-5">
                <img
                  src="/images/Blog/post-thumb-1.webp"
                  alt="quran"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h1 className="text-sm text-gray-500">12 Sep 2025</h1>
                  <h1 className="font-semibold">
                    Benefits Of Taharah And Its Importance In Islam
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mr-10">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h1 className="text-2xl font-bold p-3 border-b border-gray-300">
                Our Tags
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Web Design
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Quran Class
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Online
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  School
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Learning
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Arabic Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
