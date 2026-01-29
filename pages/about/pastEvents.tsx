"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Prefooter from "@/components/Prefooter";
import TopPrefooter from "@/components/TopPrefooter";
import Footer from "@/components/Footer";
import NewsUpdate from "@/components/NewsUpdate";
import { Check, Plus, Minus } from "lucide-react";

export default function PastEvet() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What age category is this event suitable for?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Can I take pictures and film during the show?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Are there any known Health & Safety issues?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Is prior Quran knowledge required?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero */}
      <div className="relative w-full">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="w-full"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          Events Details
        </h1>
      </div>

      {/* Content */}
      <div className="relative m-10">
        <div className="flex justify-center">
          <img
            src="/images/Event/event-2.jpg"
            alt="quraan"
            className="rounded-2xl w-[1200px]"
          />
        </div>

        <div className="absolute top-[720px] left-12 bg-green-600 text-white px-3 py-1 rounded-md">
          10:00 pm - 11:45 pm
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {/* Left column */}
          <div className="lg:col-span-2">
            <p className="text-xl text-gray-500 font-semibold">
              Fiolveien 230, Norway
            </p>

            <h1 className="text-4xl font-bold my-4">
              Learning Quranic Arabic For Beginners
            </h1>

            <div className="flex items-center gap-6 my-6">
              <div className="bg-gray-200 px-6 py-4 flex items-center gap-6">
                <span className="font-bold">Upcoming Event Price</span>
                <span className="bg-black text-white px-4 py-2">$12.00</span>
              </div>

              <button className="border border-green-600 text-green-600 px-10 py-4 rounded-lg hover:bg-green-600 hover:text-white transition">
                Get Tickets
              </button>
            </div>

            <h2 className="text-2xl font-bold my-6">About This Event</h2>

            <p className="text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Bullet points */}
            {[1, 2].map((_, i) => (
              <div key={i} className="flex gap-4 mt-6">
                <div className="bg-green-600 text-white p-2 rounded-md">
                  <Check size={18} />
                </div>
                <p className="text-gray-600 font-semibold">
                  This class focuses mainly on Quran memorisation and revision
                  of previously memorised surahs.
                </p>
              </div>
            ))}

            {/* FAQ */}
            <div className="my-10">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center bg-gray-500 text-white px-6 py-4 rounded-lg font-semibold"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="bg-gray-100 p-6 rounded-b-lg">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold my-6">Our Speaker</h2>
            <NewsUpdate />
          </div>

          {/* Right column */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold">About The Organiser</h3>

            <div className="text-sm space-y-2">
              <p>
                <b>Name:</b> Abdullah Al Hasan
              </p>
              <p>
                <b>Email:</b> abcd@gmail.com
              </p>
              <p>
                <b>Phone:</b> +880172232132
              </p>
              <p>
                <b>Date:</b> 21 November 2025
              </p>
            </div>

            <img
              src="/images/Event/organiser.webp"
              alt="organiser"
              className="rounded-xl w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>

      <Prefooter />
      <TopPrefooter />
      <Footer />
    </>
  );
}
