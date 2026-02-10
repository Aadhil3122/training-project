"use client";
import Link from "next/link";

export default function Scholars() {
  return (
    <>
      <div className="relative w-full h-[420px]">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Our Scholars</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Our Scholars</span>
          </p>
        </div>
      </div>
    </>
  );
}
