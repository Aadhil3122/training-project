"use client";

import React from "react";
import { Globe } from "lucide-react";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <div className="relative bg-white py-10 px-4 overflow-hidden">
      {/* Decorative Background Left */}
      <img
        src="/images/background/pattern-1.png"
        alt="pattern"
        className="absolute left-0 top-10 transition-all duration-1000 hover:rotate-[360deg]"
      />

      {/* Decorative Background Right */}
      <img
        src="/images/background/pattern-2.png"
        alt="pattern"
        className="absolute right-0 top-10"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Small Heading */}
            <div className="flex items-center gap-3">
              <span className="text-teal-600 uppercase text-sm font-semibold tracking-wide">
                Islamic Online Madrasah
              </span>

              <Image
                src="/images/icons/bismillah-5.png"
                alt="Bismillah"
                width={120}
                height={40}
              />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome To Imman Quran Institute
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg">
              We welcome our users to Online Quran teaching services where we
              offer Islamic and character-building courses according to Sharia.
            </p>

            {/* Small Image + Text */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src="/images/gallery/4.jpg"
                  alt="Student"
                  className="w-28 h-32 object-cover rounded-lg shadow-md"
                />
              </div>

              <div>
                <p className="text-gray-600 mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>

                {/* Icon Box */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center shadow-lg">
                    <img
                      src="/images/icons/download mos.jpg"
                      alt="icon"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-green-700">
                      Learn Online at Your
                    </p>
                    <p className="font-semibold text-green-700">Own Pace</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-gray-600">
              We offer high-quality Arabic and Quran education at affordable
              prices.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/resource/welcome-1.jpg"
                alt="Student studying Quran"
                className="w-full h-full object-cover"
              />

              {/* Ameen Overlay */}
              <div className="absolute top-8 right-8 opacity-80">
                <img
                  src="/images/icons/ameen-1.png"
                  alt="Ameen"
                  className="w-28"
                />
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-0 left-0 bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 px-6 py-4 rounded-tr-2xl flex items-center gap-3 shadow-lg">
                <Globe className="w-6 h-6 text-white" />
                <p className="font-bold text-white">
                  Since 1995 Operating Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
