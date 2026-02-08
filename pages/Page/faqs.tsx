"use client";

import { FiMinus, FiPlus } from "react-icons/fi";
import { ImPhone } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";

export default function Faqs() {
  const faqs = [
    {
      question: "What age category is this event suitable for?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Can I take pictures and film during the show?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Are there any known Health & Safety issues?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "I'm unable to attend, can someone else attend on my behalf?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "We are a family, Can we sit together?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Is there a Refund Policy?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Page Title */}
      <div className="relative w-full h-[420px]">
        <img
          src="/images/About/page-title.jpg"
          alt="FAQs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold mb-2">FAQs</h1>
          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            FAQs
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="my-20 text-center px-6">
        <h1 className="text-4xl font-bold">
          Find answers to the most frequently <br />
          asked questions below
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* FAQ */}
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center bg-gray-600 text-white px-6 py-4 rounded-lg font-semibold"
              >
                {faq.question}
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </button>

              {openIndex === index && (
                <div className="bg-gray-100 p-6 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-t from-green-600 to-yellow-400 rounded-xl p-8 w-full max-w-sm relative text-center">
            <img
              src="/About/welcome_two.webp"
              alt="logo"
              className="w-24 mx-auto -mt-16 animate-spin"
            />

            <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-orange-200 p-4 rounded-full shadow-lg text-2xl">
              <ImPhone />
            </div>

            <div className="mt-24">
              <h2 className="text-xl font-semibold mb-4">
                If you have any further query, contact our helpline
              </h2>
              <h3 className="text-2xl font-bold mt-10">Helpline: 0241-21131</h3>
              <p className="text-white">(10AM - 5PM)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
