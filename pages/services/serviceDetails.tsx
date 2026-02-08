import Gallery from "@/components/Gallery";

import { BookOpen, CheckCheck } from "lucide-react";

export default function ServiceDetails() {
  return (
    <>
      

      {/* PAGE TITLE */}
      <div className="relative w-full">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="w-full"
        />

        {/* ICON CIRCLE */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-60
          rounded-full bg-yellow-500 w-20 h-20 flex items-center justify-center z-10"
        >
          <BookOpen className="w-8 h-8 text-black" />
        </div>

        <h1 className="absolute inset-0 text-4xl text-white font-bold flex items-center justify-center">
          Services Details
        </h1>

        <p className="absolute bottom-5 w-full text-xl font-bold text-white text-center">
          Home
        </p>
      </div>

      {/* SERVICE HERO */}
      <div className="relative p-5 flex justify-center text-center">
        <img
          src="/Service/service-detail.png"
          alt="background"
          className="w-full rounded-lg"
        />

        <div className="absolute top-52 left-4 right-4 text-white text-center">
          <h1 className="text-4xl font-bold">Quranic Junior Al-Hafiz</h1>

          <p className="text-lg text-gray-300 mt-5">
            This class focuses mainly on Quran memorisation and revision of
            <br />
            surahs that have already been memorised.
          </p>

          <h1 className="mt-20 text-2xl font-bold">Service Overview</h1>

          <p className="px-56 text-lg mt-16 text-gray-300">
            In-class activities will also incorporate some lessons on Hadith and
            Quranic Arabic alongside surah understanding. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5">
        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-bold">Surah Al-Takwir recitation</h1>

          <p className="text-lg text-gray-400 font-semibold pt-4">
            This class is for students who can fluently read Qur’an. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum.
          </p>

          <p className="text-lg text-gray-400 font-semibold pt-4">
            Unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          {/* CHECK LIST */}
          {[
            "This class focuses mainly on Qur’an memorisation and revision of surahs that have already been memorised.",
            "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis qui dolorem eum.",
            "In-class activities will also incorporate some lessons on Hadith and Quranic Arabic alongside surah understanding.",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-gray-500 mt-5"
            >
              <div className="bg-black p-3 rounded-xl text-white">
                <CheckCheck className="w-6 h-6" />
              </div>
              <p className="text-lg font-semibold">{text}</p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
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
