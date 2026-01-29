import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

export default function PrayerTime() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="relative w-full">
        <img src="/home/page-title.jpg" alt="reading" className="w-full" />
        <h1
          className="absolute inset-0 text-4xl 
                    text-white font-bold text-center justify-center
                     flex items-center"
        >
          Prayer Time
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <div className="text-center items-center justify-center m-20">
        <h1 className="text-4xl text-center font-bold mt-5 ">
          Dhaka Prayer Times
        </h1>
        <h3 className="text-xl text-green-800 mt-20 mx-40 font-bold">
          Prayer times in dhaka today begin at 4:34 am am with the fajr prayer
          and end at 7:04 PM with the isha prayer. fasting today will last 13
          hours and 15 minutes. in dhaka city, the next prayer is fajr at 4:34
          am.
        </h3>
        <div className="bg-gradient-to-r from-green-700 to-yellow-400 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex items-center justify-center">
              <img
                src="/logo/bismillah-2.png"
                alt="bismi"
                className="flex items-center"
              />
            </div>
            <div className="grid grid-rows-2 justify-items-center text-center">
              <div className="flex items-center">
                <div className="w-14 h-3 bg-yellow-500 my-6"></div>
                <h1 className="text-4xl mx-5 font-bold text-white">Fajr</h1>
                <div className="w-14 h-3 bg-yellow-500 my-6"></div>
              </div>
              <h1 className="p-3 text-3xl font-semibold text-white">
                00:00:00
              </h1>
              <h1 className="pb-4 text-3xl font-semibold text-white">
                Remaining to Fajr azan
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/logo/bismillah-2.png"
                alt="bismi"
                className="flex items-center"
              />
            </div>
          </div>
        </div>
        <div className="my-10 ">
          <h1 className="text-4xl font-bold">
            Prayer Time in Dhaka, Bangladesh
          </h1>
          <div className="my-10 flex justify-center items-center">
            <div className="bg-blue-100 m-auto w-40 py-10">
              <h1 className="text-xl font-semibold">Fajr</h1>
              <hr className="border-t border-gray-800 my-4 w-20 mx-auto" />
              <h1 className="text-2xl font-bold">11:49 Am</h1>
            </div>

            <div className="bg-blue-200 m-auto w-40 py-10">
              <h1 className="text-xl font-semibold">Sunrise</h1>
              <hr className="border-t border-gray-800 my-4 w-20 mx-auto" />
              <h1 className="text-2xl font-bold">5:49 Am</h1>
            </div>

            <div className="bg-blue-300 m-auto w-40 py-10">
              <h1 className="text-xl font-semibold">Dhuhr</h1>
              <hr className="border-t border-gray-800 my-4 w-20 mx-auto" />
              <h1 className="text-2xl font-bold">11:49 Am</h1>
            </div>

            <div className="bg-pink-200 m-auto w-40 py-10">
              <h1 className="text-xl font-semibold">Asr</h1>
              <hr className="border-t border-gray-800 my-4 w-20 mx-auto" />
              <h1 className="text-2xl font-bold">4:09 Pm</h1>
            </div>

            <div className="bg-purple-200 m-auto w-40 py-10">
              <h1 className="text-xl font-semibold">Maghrib</h1>
              <hr className="border-t border-gray-800 my-4 w-20 mx-auto" />
              <h1 className="text-2xl font-bold">5:49 Pm</h1>
            </div>
            {/* card w*/}
            <div className="bg-blue-200 m-auto w-40 py-10">
              <h1 className="text-xl font-semibold"> Isha</h1>
              <hr className="border-t border-gray-800 my-4 w-20 mx-auto" />
              <h1 className="text-2xl font-bold">7:05 Pm</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
