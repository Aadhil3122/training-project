import React from "react";
import { BookOpen, Hand, Award } from "lucide-react";

export default function AftreWelcomeSection() {
  return (
    <div className="relative bg-gray-950 overflow-hidden py-16">
      {/* Background Image */}
      <div className="absolute inset-y-0 left-4 right-4 sm:left-10 sm:right-10 md:left-14 md:right-14">
        <img
          src="/images/background/service-bg.png"
          alt="Islamic Pattern Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-xs sm:text-sm font-semibold mb-3 tracking-wider uppercase">
            WHAT WE OFFER
          </p>
          <h4 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            We Offer An Effective
            <br />
            Arabic & Quran Services
          </h4>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card */}
          {[
            {
              title: "Online Quran\nClasses",
              icon: BookOpen,
            },
            {
              title: "Tafseer\nCourse",
              icon: Hand,
            },
            {
              title: "We Value\nOur Students",
              icon: Award,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 left-3 w-40 h-40 opacity-5 group-hover:animate-bounce">
                <img
                  src="/images/icons/allah.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 whitespace-pre-line">
                    {item.title}
                  </h3>

                  <div className="bg-amber-400 rounded-full p-3 sm:p-4 flex-shrink-0 group-hover:animate-bounce">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  There are many variations of passages of lorem ipsum available
                  lorem ipsum dolor sit amet
                </p>

                <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                  Read More
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
