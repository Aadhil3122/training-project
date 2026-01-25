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
    <div className="relative">
      {/* Top Background Strip */}
      <div className="relative h-24 sm:h-32 md:h-44 overflow-hidden">
        <img
          src="/images/background/courses-one_bg.png"
          alt="background style"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Features Card */}
      <div className="relative -mt-16 sm:-mt-20 md:-mt-24 z-20 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl shadow-xl px-6 sm:px-10 md:px-16 py-10 md:py-14 overflow-hidden">
            {/* Background Image */}
            <img
              src="/images/background/courses-one_bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-3xl"
            />

            {/* Features Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row md:flex-row items-center text-center sm:text-left gap-4 sm:gap-6"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-yellow-400 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center group border-4 border-gray-900 shadow-md">
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900 stroke-[2.5] transition-transform duration-500 group-hover:rotate-[360deg]" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
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
