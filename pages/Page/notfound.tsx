"use client";

import Link from "next/link";

export default function NotFound() {
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
          <h1 className="text-4xl font-bold mb-2">Not Found</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Not Found</span>
          </p>
        </div>
      </div>
      <div className="justify-center">
        <div className="relative flex justify-center items-center">
          <h1 className="text-[200px] font-extrabold text-center">404</h1>
          <img
            src="/images/logo/quran.png"
            alt="quraan"
            className="absolute w-25 h-25 -mt-10 transition-transform animate-bounce"
          />
        </div>

        <h1 className="text-4xl font-bold text-center">
          Opps! Your On The Wrong Place.
        </h1>
        <p className="text-gray-500 text-center font-semibold p-4">
          We Can Not Seem to Find the Page You are Looking for
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button
              className="
        bg-yellow-300 text-black font-bold py-5 px-7 rounded-lg transition-all duration-300 
        hover:bg-green-800 hover:text-white hover:scale-150 hover:shadow-2xl active:scale-95
      "
            >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
