"use client";

import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Facebook, Twitter, Youtube, Instagram];

export default function Prefooter() {
  return (
    <div className="relative text-white">
      {/* Background Image */}
      <img
        src="/images/background/footer-bg.jpg"
        alt="prefooter"
        className="w-full h-[400px] sm:h-[420px] md:h-[480px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Column 1: Logo + Contact + Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/images/logo.svg"
              alt="al quaraan"
              className="mb-4 w-32 sm:w-36"
            />
            <hr className="border-white w-20 mb-4" />

            <p className="mb-1">58 Howard Street #2 cairo.</p>
            <p className="mb-1">CA 941</p>
            <p className="mb-2">(+88)311-2121101</p>

            <div className="flex gap-3 mt-4">
              {icons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Follow on ${Icon.name}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1f4855] flex items-center justify-center hover:bg-yellow-500 transition"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-base">
              Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-500 cursor-pointer transition">
                About us
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Scholars
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Courses
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Latest News
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Column 3: Other Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-base">
              Other Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Online Courses
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Audio Listening
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Sehri & Iftar
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Our Events
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition">
                Quran Hifz Classes
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-base">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Waiting for your message is not your important time
            </p>

            <form className="w-full flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
              <input
                type="email"
                aria-label="Email Address"
                placeholder="Email Address"
                className="bg-[#0f1923] px-4 py-2 rounded-lg flex-1 outline-none text-white placeholder:text-gray-400 w-full sm:w-auto"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-yellow-500 p-3 rounded-lg hover:bg-white hover:text-black transition-colors flex items-center justify-center"
              >
                <img
                  src="/images/telegram.svg"
                  alt="telegram"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
