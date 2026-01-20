"use client";

import { Star, Users } from "lucide-react";

export default function StudentsStatsSection() {
  return (
    <section className="relative h-[700px] w-full  py-10 px-4 relative -mt-16 z-20">
      {/* GREEN BACKGROUND WRAPPER (INSIDE 20) */}
      <div className="relative mx-20 bg-[#1e8f5b] rounded overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/background/student-bg.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY ABOVE IMAGE */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-16 py-20">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* LEFT CONTENT */}
            <div className="text-white pl-28">
              <h2 className="text-4xl font-bold leading-tight">
                Alhamdulillah We <br /> Have Reached Over
              </h2>

              <p className="mt-4 text-white/80 max-w-md">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="mt-10 flex items-center gap-6">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center group justify-center">
                  <Users className="w-9 h-9 text-black stroke-[2.5] transition-transform duration-500 group-hover:rotate-[360deg]" />
                </div>

                <div>
                  <h3 className="text-7xl font-bold">18,000</h3>
                  <p className="text-white/90 text-3xl">Active Students</p>
                </div>
              </div>
            </div>

            {/* RIGHT WHITE CARD */}
            <div className="bg-white rounded-3xl p-6 pt-2 shadow-2xl border-4 border-yellow-400 border-t-22  -mb-48">
              {/* RATING */}
              <div className="flex gap-6 items-start">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src="/images/background/students-one_pattern.png"
                    alt="rating"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex mb-1">
                      <Star className="w-4 h-4 fill-black text-black" />
                      <Star className="w-4 h-4 fill-black text-black" />
                      <Star className="w-4 h-4 fill-black text-black" />
                    </div>
                    <h3 className="text-4xl font-bold text-black">4.5</h3>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Top Ratings On Trustpilot
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 max-w-sm">
                    Lorem ipsum generators on the internet tend to repeat
                    predefined chunks necessary on making this the first velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              {/* PASS OUT */}
              <div className="mt-10 flex gap-6 items-start">
                <div className="w-24 h-24 bg-[#1e8f5b] text-white rounded-2xl flex items-center justify-center">
                  <h4 className="text-3xl font-bold">22k</h4>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Pass Out</h3>
                  <p className="text-sm text-gray-500 mt-2 max-w-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt to labore et dolore pass out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
