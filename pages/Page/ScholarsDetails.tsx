"use client";
import IslamicInstitute from "@/components/IslamicInstitute";
import Link from "next/link";

export default function ScholarsDetails() {
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
          <h1 className="text-4xl font-bold mb-2">Scholars Profile</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Scholars Profile</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
        <div>
          <img
            src="/images/gallery/4.jpg"
            alt="reading"
            className=" rounded-xl w-[500px] mx-16"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">Abdelrahman M</h1>
          <p className="text-xl text-green-600 font-bold pt-3">
            Quran & Arabic Teacher
          </p>
          <p className="text-lg text-gray-400 font-semibold pr-8 mt-3">
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil
          </p>
          <p className="text-lg text-gray-400 font-semibold pr-8 mt-3">
            Harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minusid quod maxime placeat facere possimus
          </p>
          <p className="text-green-600 pt-5 font-semibold text-xl">
            Advance Teaching Tools
          </p>
          <p className="text-green-600 pt-2 font-semibold text-xl">
            Modern Teaching Methods
          </p>
          <p className="text-green-600 pt-2 font-semibold text-xl">
            Special Training For Teachers
          </p>
          <div className="bg-green-800 border-spacing-5">
            <div className="bg-yellow-600 border-spacing-2 border-yellow-300"></div>
          </div>
        </div>
      </div>
      <IslamicInstitute />
    </>
  );
}
