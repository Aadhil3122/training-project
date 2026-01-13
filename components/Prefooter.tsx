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
        className="w-full h-[420px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <img src="/images/logo.svg" alt="al quaraan" className="mb-4" />
            <hr className="border-white w-49 mb-4" />

            <p className="text-sm">58 Howard Street #2 cairo.</p>
            <p className="text-sm mb-3">CA 941</p>
            <p className="text-sm mb-4">(+88)311-2121101</p>

            <div className="flex gap-3 mt-6">
              {icons.map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-[#1f4855] flex items-center justify-center hover:bg-yellow-500 transition"
                >
                  <Icon className="w-4 h-4 text-white hover:text-black" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Scholars</li>
              <li>Courses</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Other Link</h3>
            <ul className="space-y-2 text-sm">
              <li>Online Courses</li>
              <li>Audio Listening</li>
              <li>Sehri & Iftar</li>
              <li>Our Events</li>
              <li>Quran Hifz Classes</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Waiting for your message is not your important time
            </p>

            <div className="relative flex bg-[#0f1923] w-70 h-30 items-center rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                
                className="bg-transparent px-4 py-3 text-sm flex-1 outline-none text-white placeholder:text-gray-400"
              />
              
              <button className="bg-yellow-500 p-2 m-1.5 rounded-full hover:bg-white transition-colors">
                
                <img
                  src="/images/telegram.svg"
                  alt="telegram"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
