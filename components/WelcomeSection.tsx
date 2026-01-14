"use client";
import React from "react";
import { Globe } from "lucide-react";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <div className="relative bg-white py-4 px-4 overflow-hidden ">
      {/* Decorative Background Dots - Left Side */}
      <img
        src="/images/background/pattern-1.png"
        alt="inside pic1"
        className="absolute left-0 transform transition-all duration-1000 ease-in-out hover:rotate-[360deg]"
      />

      {/* Decorative Background Dots - Right Side */}
      <img
        src="/images/background/pattern-2.png"
        alt="inside pic2"
        className="absolute right-0  "
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Small Heading with Arabic Style */}
            <div className="flex items-center gap-3">
              <span className="text-teal-600 uppercase text-sm font-semibold tracking-wide">
                ISLAMIC ONLINE MADRASAH
              </span>
              <span className="text-gray-300 text-2xl"></span>
              {/* <img src="/images/icons/bismillah-5.png" alt="" /> */}
              <Image
                src="/images/icons/bismillah-5.png"
                alt="Student reading Quran"
                width={120}
                height={120}
              />
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome To Imman Quran Institute
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              We welcome our users to Online Quran teaching services where we
              are offering multiple Islamic as well as character building and
              life reformation courses as per the teachings of Sharia.
            </p>

            {/* Small Image with Text Box */}
            <div className="flex gap-6 items-start">
              {/* Small Image */}
              <div className="`flex-shrink-0`">
                <img
                  src="/images/gallery/4.jpg"
                  alt="Student reading Quran"
                  className="w-28 h-32 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-600 mb-4">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered business consulting
                </p>

                {/* Green Icon Box */}
                <div className="flex items-center  `inline-flex`">
                  <div className="rounded-full bg-green-700 w-20 h-20 flex items-center justify-center mr-4 shadow-lg">
                    <img
                      src="/images/icons/download mos.jpg"
                      className="w-15 h-15 rounded-full"
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
              We offer our students high-quality Arabic and Quran at affordable
              prices that meet their budget.
            </p>
          </div>

          {/* Right Side - Large Image with Overlay */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/resource/welcome-1.jpg"
                alt="Student studying Quran"
                className="w-full h-full object-cover"
              />

              {/* Green Arabic Text Overlay */}
              <div className="absolute top-8 right-8">
                <svg
                  className="w-32 h-32 text-emerald-400 opacity-80"
                  viewBox="0 0 120 120"
                  fill="currentColor"
                >
                  <text
                    x="10"
                    y="60"
                    fontSize="48"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    <img src="/images/icons/ameen-1.png" alt="aameen" />
                  </text>
                </svg>
              </div>

              {/* Yellow Badge at Bottom */}
              <div className="absolute bottom-0 left-0 bg-gradient-to-r from-green-500 via-lime-400 to-yellow-600 text-gray-900 px-6 py-4 rounded-tr-2xl flex items-center gap-3 shadow-lg  ">
                <Globe className="w-6 h-6 " />
                <div>
                  <p className="font-bold text-lg">
                    Since 1995 Operating in the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
