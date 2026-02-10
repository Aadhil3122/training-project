"use client";

import Gallery from "@/components/Gallery";
import { BookOpen, CheckCheck } from "lucide-react";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      {/* PAGE TITLE */}
      <div className="relative w-full h-[420px]">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute top-6 left-6 z-20 bg-white p-3 rounded-full">
          <BookOpen className="w-8 h-8 text-black" />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Service Details</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Service Details</span>
          </p>
        </div>
      </div>

      {/* SERVICE HERO */}
      <div className="relative p-5 flex justify-center text-center">
        <img
          src="/images/Service/service-detail.png"
          alt="background"
          className="w-full rounded-lg"
        />

        <div className="absolute top-52 left-4 right-4 text-white">
          <h1 className="text-4xl font-bold">Quranic Junior Al-Hafiz</h1>

          <p className="text-lg text-gray-300 mt-5">
            This class focuses mainly on Quran memorisation and revision of
            <br />
            surahs that have already been memorised.
          </p>

          <h1 className="mt-20 text-2xl font-bold">Service Overview</h1>

          <p className="px-56 text-lg mt-16 text-gray-300">
            In-class activities will also incorporate some lessons on Hadith and
            Quranic Arabic alongside surah understanding.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5">
        <div>
          <h1 className="text-2xl font-bold">Surah Al-Takwir recitation</h1>

          <p className="text-lg text-gray-400 font-semibold pt-4">
            This class is for students who can fluently read Qur’an.
          </p>

          {[
            "This class focuses mainly on Qur’an memorisation and revision of surahs.",
            "Sint occaecat cupidatat non proident.",
            "Ut enim ad minima veniam.",
            "Includes Hadith and Quranic Arabic lessons.",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-4 mt-5">
              <div className="bg-black p-3 rounded-xl text-white">
                <CheckCheck className="w-6 h-6" />
              </div>
              <p className="text-lg font-semibold text-gray-500">{text}</p>
            </div>
          ))}
        </div>

        <div>
          <img
            src="/images/Service/service.png"
            alt="mosque"
            className="rounded-lg"
          />
        </div>
      </div>

      <Gallery />
    </>
  );
}
