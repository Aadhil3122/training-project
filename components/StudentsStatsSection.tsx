"use client";

import { Star, Users } from "lucide-react";

export default function StudentsStatsSection() {
  return (
    <section className="relative w-full py-12 px-4 -mt-16 z-20">
      {/* GREEN BACKGROUND WRAPPER */}
      <div className="relative mx-2 sm:mx-6 md:mx-20 bg-[#1e8f5b] rounded overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/background/student-bg.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* LEFT CONTENT */}
            <div className="text-white md:pl-28 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Alhamdulillah We <br className="hidden sm:block" /> Have Reached
                Over
              </h2>

              <p className="mt-4 text-white/80 max-w-md mx-auto md:mx-0">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="mt-8 flex items-center justify-center md:justify-start gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center group">
                  <Users className="w-7 h-7 md:w-9 md:h-9 text-black stroke-[2.5] group-hover:rotate-[360deg] transition-transform duration-500" />
                </div>

                <div>
                  <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                    18,000
                  </h3>
                  <p className="text-white/90 text-lg sm:text-xl md:text-3xl">
                    Active Students
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-yellow-400 md:-mb-48">
              {/* RATING */}
              <div className="flex gap-5 items-start">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <img
                    src="/images/background/students-one_pattern.png"
                    alt="rating"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex mb-1">
                      <Star className="w-4 h-4 fill-black" />
                      <Star className="w-4 h-4 fill-black" />
                      <Star className="w-4 h-4 fill-black" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-black">
                      4.5
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    Top Ratings On Trustpilot
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum generators on the internet tend to repeat
                    predefined chunks necessary.
                  </p>
                </div>
              </div>

              {/* PASS OUT */}
              <div className="mt-8 flex gap-5 items-start">
                <div className="w-20 h-20 bg-[#1e8f5b] text-white rounded-2xl flex items-center justify-center">
                  <h4 className="text-2xl sm:text-3xl font-bold">22k</h4>
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    Pass Out
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
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
