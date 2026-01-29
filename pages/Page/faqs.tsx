import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ImPhone } from "react-icons/im";
import { useState } from "react";

export default function Faqs() {
  const faqs = [
    {
      question: "What age category is this event suitable for?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
    {
      question: "Can I take pictures and film during the show?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
    {
      question: "Are there any known Health & Safety issues?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
    {
      question: "What age category is this event suitable for?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
    {
      question: "I'm unable to attend, can someone else attend on my behalf?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
    {
      question: "We are a family, Can we sit together?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
    {
      question: "Is there a Refund Policy?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <TopNavbar />
      <Navbar />

      {/* Page Title */}
      <div className="relative w-full">
        <img src="/home/page-title.jpg" alt="reading" className="w-full" />
        <h1
          className="absolute inset-0 text-4xl 
                        text-white font-bold flex items-center justify-center"
        >
          Recorded Class
        </h1>
        <p className="absolute bottom-4 w-full text-center text-xl font-bold text-white ">
          Home
        </p>
      </div>
      <div className="my-20">
        <h1 className="text-4xl font-bold text-center px-16">
          Find answers to the most frequently <br />
          asked questions below
        </h1>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-10 px-4 lg:px-0 flex flex-col lg:flex-row gap-10">
        {/* Left: FAQ list */}
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between 
                                           bg-gray-500 text-white px-6 py-4 rounded-lg font-semibold text-left"
              >
                <span>{faq.question}</span>
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

        {/* Right: Contact card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gradient-to-t from-green-600 to-yellow-400 rounded-xl p-8 w-full max-w-sm relative">
            <div className="flex items-center justify-center -mt-16">
              <img
                src="/About/welcome_two.webp"
                alt="logo"
                className="w-24 transition-transform animate-spin-slow "
              />
            </div>
            {/* Icon at the top center */}
            <div className="absolute mt-36 left-1/2 transform -translate-x-1/2 rounded-full bg-orange-200 p-4 text-2xl flex items-center justify-center shadow-lg">
              <ImPhone />
            </div>

            {/* Text content */}
            <div className="mt-8 text-center">
              <h1 className="text-2xl font-semibold mb-4">
                If you have any further query then you can contact our helpline
              </h1>
              <h1 className="text-2xl font-medium  mt-20 ">
                Helpline: 0241-21131
              </h1>
              <h2 className="text-white text-xl">(10AM-5PM)</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
