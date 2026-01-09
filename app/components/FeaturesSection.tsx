import React from "react";
import { BookOpen, Award, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Learn quick",
      subtitle: "Quran Classes",
    },
    {
      icon: Award,
      title: "ISO certified",
      subtitle: "islamic institution",
    },
    {
      icon: Users,
      title: "Online Arabic",
      subtitle: "Classes For Kids",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[0px] bg-gradient-to-r from-gray-400 to-gray-300 overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/background/courses-one_bg.png"
          alt="background style"
          className="absolute inset-0 w-full h-44 object-cover"
        />
        {/* Overlay */}
      </div>

      {/* Features Section - Horizontal Rectangle Layout */}
      <div className="relative -mt-24 z-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Light Green/Mint Background Container with Background Image */}
          <div className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 rounded-3xl shadow-xl px-8 md:px-16 py-12 overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/background/courses-one_bg.png"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-3xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6"
                >
                  {/* Yellow Circle with Icon and Border */}
                  <div className="flex-shrink-0">
                    <div className="bg-yellow-400 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center group border-4 border-gray-900 shadow-md">
                      <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-gray-900 stroke-[2.5] transition-transform duration-500 group-hover:rotate-[360deg] " />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
