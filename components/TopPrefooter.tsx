import React from "react";

export default function TopPrefooter() {
  return (
    <div className="relative -mb-24 z-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Gradient Background Container with Background Pattern */}
        <div className="relative bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400  shadow-xl overflow-hidden">
          {/* Background Pattern Image */}
          <img
            src="/images/background/cta-one_bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          
          {/* Content Container */}
          <div className="relative flex items-center justify-between px-8 md:px-16 py-8 md:py-12">
            {/* Left Side - Mosque Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="/images/icons/images2.png" 
                  alt="mosque"
                  className="w-20 h-20 md:w-20 md:h-20 object-contain rounded-full"
                />
              </div>
            </div>
            
            {/* Center - Text Content */}
            <div className="flex-1 px-6 md:px-12">
              <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
                Proud To Be Serving Thousands Of Muslim<br />
                Families Around The World
              </h3>
            </div>
            
            {/* Right Side - Button */}
            <div className="flex-shrink-0">
              <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-black transition-colors shadow-md">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}