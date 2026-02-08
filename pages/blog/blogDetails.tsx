"use client";

import { ChevronsRight, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[420px]">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Blog Details</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Blog Details</span>
          </p>
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="p-5 grid grid-cols-3 gap-6">
        {/* ================= LEFT CONTENT ================= */}
        <div className="col-span-2">
          <img
            src="/images/Card/news-11.jpg"
            alt="quraan"
            className="w-full rounded-2xl"
          />

          {/* AUTHOR INFO */}
          <div className="p-5 flex items-center gap-4">
            <img
              src="/images/Card/author-11.png"
              alt="author"
              className="rounded-full w-12 h-12"
            />
            <h1 className="font-bold">Admin</h1>
            <p className="text-gray-400">03 comments</p>
            <p className="text-gray-400">October 18, 2025</p>
          </div>

          {/* BLOG CONTENT */}
          <div className="p-5">
            <h1 className="text-4xl font-bold">
              Islamic Studies for kids and the Prophet Sunnah
            </h1>

            <p className="text-gray-400 mt-5 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-2xl font-bold mt-6">
              Online Islamic lessons for kids
            </h2>

            <p className="text-gray-400 mt-3 font-semibold">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            {/* QUOTE */}
            <div className="bg-white p-10 border text-2xl mt-6">
              <p className="text-green-600">
                “Omnis iste natus error sit voluptatem accusantium doloremque
                laudantium…”
              </p>
            </div>

            {/* LIST */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <ChevronsRight className="w-5 h-5 bg-black text-white" />
                <p className="pl-3 font-semibold">
                  Qur’an memorisation and revision of surahs.
                </p>
              </div>

              <div className="flex items-center">
                <ChevronsRight className="w-5 h-5 bg-black text-white" />
                <p className="pl-3 font-semibold">
                  Salah (Prayer): Encourage regular prayer.
                </p>
              </div>

              <div className="flex items-center">
                <ChevronsRight className="w-5 h-5 bg-black text-white" />
                <p className="pl-3 font-semibold">
                  Kindness as taught by Prophet Muhammad ﷺ
                </p>
              </div>
            </div>

            {/* ================= TAGS ================= */}
            <div className="flex items-center gap-4 mt-10 flex-wrap">
              <h2 className="text-2xl font-bold">Tags:</h2>

              <button className="bg-yellow-300 px-4 py-2">Web Design</button>
              <button className="bg-yellow-300 px-4 py-2">Quran Class</button>
              <button className="bg-yellow-300 px-4 py-2">Online</button>
            </div>

            {/* ================= SHARE SECTION ================= */}
            <div className="flex items-center gap-4 mt-6 text-xl">
              <span className="font-bold">Share post :</span>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <hr className="my-8 border-black" />

            {/* ================= COMMENTS ================= */}
            <h2 className="text-xl font-bold mb-5">2 Comments</h2>

            <div className="flex items-start gap-4">
              <img
                src="/images/Recorder/class-6.webp"
                alt="author"
                className="rounded-full w-20 h-20"
              />
              <div>
                <h3 className="text-lg font-semibold">Alen Martin</h3>
                <p className="text-sm text-gray-500">November 05, 2025</p>
                <p className="mt-2">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
              </div>
            </div>

            {/* ================= COMMENT FORM ================= */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Leave a reply</h2>

              <input
                placeholder="Full Name"
                className="border w-full p-3 mb-3"
              />
              <input
                placeholder="Your Email"
                className="border w-full p-3 mb-3"
              />
              <textarea
                placeholder="Enter Your Comment"
                className="border w-full p-3 h-32 mb-3"
              />

              <button className="px-7 py-3 bg-green-800 text-white">
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div>{/* sidebar content */}</div>
      </div>
    </>
  );
}
