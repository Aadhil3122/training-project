"use client";

import { Mail, MapPin, Moon, Phone, Sunrise } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-green-700 to-yellow-600 text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-2 gap-9">
        <div className="flex items-center pl-0 gap-7 flex-wrap">
          <span className="flex items-center gap-2 ">
            <Mail size={16} /> support24@gmail.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} /> Suite 80 Golden Street Germany
          </span>
        </div>

        {/* Center */}
        <div className="font-semibold text-center">
          <img src="/images/icons/bismillah.png"></img>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8 flex-wrap">
          <span className="flex items-center gap-1">
            <Sunrise size={16} /> Sunrise: 5:15 AM
          </span>

          <span className="flex items-center gap-1">
            <Moon size={16} /> Sunset: 4:50 PM
          </span>

          <span className="flex items-center gap-1">
            <Phone size={16} /> +88 01 27 14 101
          </span>
        </div>
      </div>
    </div>
  );
}
