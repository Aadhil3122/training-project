import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export default function BlogDetails() {
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
          Blog Detail
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <div className="p-5 grid grid-cols-3 bg-yellow-100 mr-10">
        <div className="grid col-span-2 bg-yellow-200">
          <img src="/Card/news-11.jpg" alt="quraan" className="rounded-2xl" />
          <div className="p-5 flex items-center gap-4">
            <img
              src="/Card/author-11.png"
              alt=" author"
              className="rounded-full"
            />
            <h1 className="font-bold">Admin</h1>
            <p className="text-gray-400">03 comment</p>
            <p className="text-gray-400">October 18 2025</p>
          </div>
          <div className="p-5 ">
            <h1 className="text-5xl font-bold">
              Islamic Studies for kids and the Prophet Sunnh
            </h1>
            <p className="text-gray-400 mt-5 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>

            <h2 className="text-2xl font-bold">
              online Islamic lessons for kids
            </h2>
            <p className="text-gray-400 mt-5 font-semibold">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p className="text-gray-400 mt-3 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>

            <div className="bg-white p-10 border border-spacing-1 text-2xl mt-4 ">
              <h1 className="text-green-600">
                “Omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis
                et quasi architecto beatae vitae dicta sunt explicabo”
              </h1>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-semibold">
                Sunnah in everyday life: Islamic Studies online
              </h1>
              <p className="text-gray-400 mt-3 font-semibold">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Teach children to recite morning and evening prayers to seek
                Allah’s protection and blessings.
              </p>

              <div className="flex items-center mt-5">
                <HiOutlineChevronDoubleRight className="bg-black text-white" />
                <h1 className="font-semibold pl-3">
                  This class focuses mainly on Qur’an memorisation and revision
                  of surahs that have already been memorised.
                </h1>
              </div>
              <div className="flex items-center mt-5">
                <HiOutlineChevronDoubleRight className="bg-black text-white" />
                <h1 className="font-semibold pl-3">
                  Salah (Prayer): Encourage children to pray regularly from
                  childhood, making it a fun and interactive experience
                </h1>
              </div>
              <div className="flex items-center mt-5">
                <HiOutlineChevronDoubleRight className="bg-black text-white" />
                <h1 className="font-semibold pl-3">
                  Kindness and Generosity: Explain the importance of being
                  righteous and kind to others, as exemplified by the Prophet
                  Muhammad S.A.W. in his daily life.
                </h1>
              </div>

              <h2 className="text-gray-400 font-semibold pt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Teach children to recite morning and
                evening prayers to seek Allah’s protection and blessings.
              </h2>

              <div className="flex items-center mt-10">
                <h1 className="text-3xl font-bold">Tags:</h1>
                <div className="bg-yellow-300 p-4 mx-4">
                  <button className="">Web Design</button>
                </div>
                <div className="bg-yellow-300 p-4 mx-4">
                  <button>Quran Class</button>
                </div>
                <div className="bg-yellow-300 p-4 mx-4">
                  <button>Online</button>
                </div>

                <div className="text-2xl flex items-center gap-3 border border-b">
                  <h1 className="font-bold">Share post :</h1>
                  <SiFacebook />
                  <FaSquareInstagram />
                  <FaTwitter />
                </div>
              </div>
              <hr className="mt-5 border-black" />
            </div>

            <h1 className="text-xl font-bold m-5">2 Comments</h1>

            <div className="flex items-center">
              <img
                src="/Recorder/class-6.webp"
                alt="author"
                className="rounded-full w-24 h-24 "
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold ml-5">Alen Martin</h1>
                <h1 className="text-sm text-gray-500 font-semibold ml-5">
                  november 05, 2025
                </h1>
                <p className="mt-6 ml-5 ">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur
                </p>
              </div>
            </div>
            <div className="flex items-center mt-10">
              <img
                src="/Recorder/class-1.webp"
                alt="author"
                className="rounded-full w-24 h-24 "
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold ml-5">John Kabir</h1>
                <h1 className="text-sm text-gray-500 font-semibold ml-5">
                  november 05, 2025
                </h1>
                <p className="mt-6 ml-5 ">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h1 className="text-2xl font-bold">Leave A reply</h1>
              <input
                name="input1"
                placeholder="Full Name"
                className="border border-spacing-1 w-full p-3 my-5"
              />
              <input
                name="input2"
                placeholder="Your Email"
                className="border border-spacing-1 w-full p-3 my-2"
              />
              <input
                name="input3"
                placeholder="Enter Your Comment"
                className="border border-spacing-1 w-full pb-20 my-2"
              />
              <button className="px-7 py-3 bg-green-800 text-white">
                Post Comment
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 mx-auto">
            <h1 className="font-bold p-3 border border-spacing-1 border-black text-2xl">
              Blog Categories
            </h1>
            <div className="grid grid-cols-3 p-7">
              <div className="col-span-2">
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Web Design
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Online Class
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Digital Class
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Lear About islam
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Digital business
                </h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">
                  Learn Quran
                </h1>
              </div>
              <div>
                <h1 className="font-bold p-3 text-gray-400 text-xl">10</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">07</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">09</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">15</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">11</h1>
                <h1 className="font-bold p-3 text-gray-400 text-xl">02</h1>
              </div>
            </div>
          </div>
          <div className="mt-10 mr-10">
            <div className="bg-gray-100 ">
              <h1 className="font-semibold text-2xl p-3">Lastest News</h1>
              <div className="flex items-center gap-4 border border-spacing-1 p-5">
                <img
                  src="/Blog/post-thumb-3.png"
                  alt="quran"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h1 className="text-sm text-gray-500">12 Sep 2025</h1>
                  <h1 className="font-semibold">
                    Best Online Female Quran Tutors
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-spacing-1 p-5">
                <img
                  src="/Blog/post-thumb-2.webp"
                  alt="quran"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h1 className="text-sm text-gray-500">12 Sep 2025</h1>
                  <h1 className="font-semibold">
                    Dua E Hajat and How to Perform
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-spacing-1 p-5">
                <img
                  src="/Blog/post-thumb-1.webp"
                  alt="quran"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h1 className="text-sm text-gray-500">12 Sep 2025</h1>
                  <h1 className="font-semibold">
                    Benefits Of Taharah And Its Importance In Islam
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mr-10">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h1 className="text-2xl font-bold p-3 border-b border-gray-300">
                Our Tags
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Web Design
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Quran Class
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Online
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  School
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Learning
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition">
                  Arabic Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
