import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import IslamicInstitute from "@/components/IslamicInstitute";
import StudentsStatsSection from "@/components/StudentsStatsSection";
import Courses from "@/components/Courses";
import TopPrefooter from "@/components/TopPrefooter";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";


export default function About_us() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="relative w-full h-[400px]">
        {/* Image */}
        <img
          src="/images/About/page-title.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Heading */}
        <h1
          className="
                        absolute inset-0
                        flex items-center justify-center
                        text-white text-4xl md:text-5xl font-bold
                        bg-black/40
                        "
        >
          About Us
        </h1>
        <span >Home . About Us</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="relative">
            <img
              src="/images/About/welcome-2.webp"
              alt="Prayer"
              className="w-full rounded-xl"
            />

            {/* Badge */}
            <div className="absolute left-1/2 -bottom-6 -translate-x-1/2">
              <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-green-700 px-10 py-4 rounded-lg shadow-lg">
                <span className="text-white text-xl">🌍</span>
                <p className="text-white font-semibold">
                  Since 1995 Operating in the world
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-green-600 font-bold">ISLAMIC ONLINE MADARASAH</p>

            <h1 className="text-5xl font-bold mt-2">
              Online Islamic School At Home
            </h1>

            <p className="text-xl text-gray-500 mt-6">
              We welcome our users to Online Quran teaching services where we
              are offering multiple Islamic as well as character building and
              life reformation courses as per the teachings of Sharia.
            </p>

            {/* IMAGE + FEATURES */}
            <div className="flex flex-col md:flex-row gap-10 mt-10 items-start">
              {/* LEFT SMALL IMAGE */}
              <img
                src="/images/About/welcome_two.webp"
                alt="icon"
                className="w-full md:w-1/3 rounded-lg"
              />

              {/* FEATURES */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <img src="/images/icon/mosque1.png" className="w-16" />
                  <h3 className="text-2xl font-semibold text-green-800">
                    Learn Online at Your
                    <br />
                    Own Pace
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/images/icon/full-moon.png" className="w-16" />
                  <h3 className="text-2xl font-semibold text-green-800">
                    Islamic Philosophy
                    <br />
                    and Quranic Studies
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-collapse">
        <IslamicInstitute />
      </div>

      <div>
        <StudentsStatsSection/>
      </div>
      <Courses />
      <TopPrefooter />
      <Prefooter />
      <Footer />
    </>
  );
}
