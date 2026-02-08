"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* PAGE TITLE */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-3">Contact</h1>

          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Contact</span>
          </p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-28 my-16">
        {/* ADDRESS */}
        <div className="flex flex-col py-20 gap-4 items-center">
          <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-x-[-1]">
            <MapPin className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-center">Our Address</h1>
          <p className="text-xl font-semibold text-gray-500 text-center">
            Metro City Shop 11 floor
          </p>
          <p className="text-xl font-semibold text-gray-500 text-center">
            Fiolveien 230, Norway
          </p>
        </div>

        {/* PHONE */}
        <div className="flex flex-col py-20 gap-4 items-center">
          <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-x-[-1]">
            <Phone className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-center">Our Phone</h1>
          <p className="text-xl font-semibold text-gray-500 text-center">
            (+088) 48 26 48 26
          </p>
          <p className="text-xl font-semibold text-gray-500 text-center">
            Let’s Talk +88 01 27 14 101
          </p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col py-20 gap-4 items-center">
          <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-x-[-1]">
            <Mail className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-center">Email Address</h1>
          <p className="text-xl font-semibold text-gray-500 text-center">
            islam_quran@gmail.com
          </p>
          <p className="text-xl font-semibold text-gray-500 text-center">
            info_hr@gmail.com
          </p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="mx-5 md:mx-20 mb-16">
        <h1 className="text-2xl font-bold mb-6">
          Feel free to write Islamic anytime
        </h1>

        <input
          placeholder="Full Name"
          className="border w-full p-3 mb-4"
        />
        <input
          placeholder="Your Email"
          className="border w-full p-3 mb-4"
        />
        <textarea
          placeholder="Enter Your Comment"
          className="border w-full p-3 h-32 mb-4"
        ></textarea>

        <button className="px-7 py-3 bg-green-800 text-white font-semibold hover:bg-green-900 transition">
          Post Comment
        </button>
      </div>

      {/* GOOGLE MAP */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src="https://www.google.com/maps?q=Fiolveien%20230%2C%20Norway&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
