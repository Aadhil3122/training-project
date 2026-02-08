"use client";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function CourseDetails() {
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
          <h1 className="text-4xl font-bold mb-2">Course Details</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Course Details</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-2 w-full">
        {/* LEFT */}
        <div className="ml-10 mt-6">
          <img
            src="/images/Course/course-6.jpg"
            alt="reading"
            className="max-w-[900px] w-full h-auto rounded-2xl"
          />

          <h1 className="text-4xl font-bold pt-5">
            Online Quran Memorization Course
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 shadow-xl p-6">
            <div>
              <h1>Adul Nobi</h1>
              <p className="text-green-600">Arabic Teacher</p>
            </div>

            <div className="grid grid-cols-3 text-center">
              <div className="border-r-2">
                <p className="text-green-600 font-bold">20</p>
                <p>lessons</p>
              </div>
              <div className="border-r-2">
                <p className="text-green-600 font-bold">10</p>
                <p>weeks</p>
              </div>
              <div>
                <p className="text-green-600 font-bold">50</p>
                <p>enroll</p>
              </div>
            </div>

            <div className="text-right">
              <h1 className="text-yellow-400 font-bold text-3xl">$92.00</h1>
              <h3 className="text-green-600">Course Fee</h3>
            </div>
          </div>

          <h1 className="text-2xl mt-7 font-bold">Overview</h1>
          <p className="mt-7 text-gray-400 font-semibold">
            This class is for students who can fluently read Qur’an. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <div className="flex justify-end mr-36">
            <div className="w-full max-w-sm rounded-lg bg-[#FAF7F2] p-6 shadow-md">
              <h2 className="mb-4 text-xl font-bold">Course Features</h2>

              <div className="space-y-3">
                <div className="flex justify-between bg-white px-4 py-3 rounded-md">
                  <span>Course Fee</span>
                  <span className="text-green-600 font-semibold">$92.00</span>
                </div>
                <div className="flex justify-between bg-white px-4 py-3 rounded-md">
                  <span>Lessons</span>
                  <span className="text-green-600 font-semibold">12</span>
                </div>
                <div className="flex justify-between bg-white px-4 py-3 rounded-md">
                  <span>Duration</span>
                  <span className="text-green-600 font-semibold">12 hours</span>
                </div>
                <div className="flex justify-between bg-white px-4 py-3 rounded-md">
                  <span>Students</span>
                  <span className="text-green-600 font-semibold">50</span>
                </div>
                <div className="flex justify-between bg-white px-4 py-3 rounded-md">
                  <span>Category</span>
                  <span className="text-green-600 font-semibold">Islam</span>
                </div>
                <div className="flex justify-between bg-white px-4 py-3 rounded-md">
                  <span>Level</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-yellow-400 py-3 font-semibold rounded-md hover:bg-yellow-500">
                Apply Now
              </button>
            </div>
          </div>

          {/* HELPLINE CARD */}
          <div className="flex justify-center mt-20">
            <div className="bg-gradient-to-t from-green-600 to-yellow-400 rounded-xl p-8 w-full max-w-sm relative">
              <div className="flex justify-center -mt-16">
                <img
                  src="/About/welcome_two.webp"
                  alt="logo"
                  className="w-24 animate-spin-slow"
                />
              </div>

              <div className="absolute mt-36 left-1/2 -translate-x-1/2 rounded-full bg-orange-200 p-4 shadow-lg">
                <Phone className="w-8 h-8 text-black" />
              </div>

              <div className="mt-8 text-center">
                <h1 className="text-2xl font-semibold mb-4">
                  If you have any further query then you can contact our
                  helpline
                </h1>
                <h1 className="text-2xl font-medium mt-20">
                  Helpline: 0241-21131
                </h1>
                <h2 className="text-white text-xl">(10AM-5PM)</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
