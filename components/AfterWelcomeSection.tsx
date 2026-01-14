import React from 'react';
import { BookOpen, Hand, Award } from 'lucide-react';

export default function AftreWelcomeSection() {
  return (
    <div className="relative bg-gray-900 py-10 px-4 overflow-hidden">
      {/* Background Image - Inset from sides */}
      <div className="absolute inset-y-0 left-16 right-16">
        <img
          src="/images/background/testimonial-one_bg.png"
          alt="Islamic Pattern Background"
          className="w-full h-full object-cover bg-amber-950"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold mb-3 tracking-wider uppercase">
            WHAT WE OFFER
          </p>
          <h4 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            We Offer An Effective<br />
            Arabic & Quran Services
          </h4>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap- -10  mb-10">
          {/* Card 1 */}
          <div className="relative bg-white rounded-xl p-8 w-80 h-80 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 left-3 w-48 h-48 opacity-5 transition-all duration-300 group-hover:animate-bounce">
              <img src="/images/icons/allah.png" alt="" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Online Quran<br />Classes
                  </h3>
                </div>
                <div className="bg-amber-400 rounded-full p-4 flex-shrink-0 transition-all duration-300 group-hover:animate-bounce">
                  <BookOpen className="w-7 h-7 text-gray-900" strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
              </p>
              <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                Read More 
                <span className="text-gray-700 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-xl p-8  w-80 h-80 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 left-3 w-48 h-48 opacity-5 transition-all duration-300 group-hover:animate-bounce">
              <img src="/images/icons/allah.png" alt="" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Tafseer<br />Course
                  </h3>
                </div>
                <div className="bg-amber-400 rounded-full p-4 flex-shrink-0 transition-all duration-300 group-hover:animate-bounce">
                  <Hand className="w-7 h-7 text-gray-900" strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
              </p>
              <button className="flex items-center gap-2  text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                Read More 
                <span className="text-gray-700 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-xl p-8  w-80 h-80 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 left-3 opacity-5 transition-all duration-300 group-hover:animate-bounce">
              <img src="/images/icons/allah.png" alt="" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    We Value<br />Our Students
                  </h3>
                </div>
                <div className="bg-amber-400 rounded-full p-4 flex-shrink-0 transition-all duration-300 group-hover:animate-bounce">
                  <Award className="w-7 h-7 text-gray-900" strokeWidth={2} />
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet
              </p>
              <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-orange-500 transition-colors">
                Read More 
                <span className="text-gray-700 text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}