import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import ButtonContent from "../../Components/CourseDetailsButton";
import { ImPhone } from "react-icons/im";

export default function CourseDetails() {
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
          Course Details
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-fit w-full ">
          <div className="ml-10">
            <img
              src="/Course/course-6.jpg"
              alt="reading"
              className="max-w-[900px] w-full h-auto rounded-2xl"
            />
            <h1 className="text-4xl font-bold pt-5">
              Online Quran Memorization Course
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 shadow-gray-400 shadow-xl p-6">
              <div className="">
                <h1>Adul Nobi</h1>
                <p className="text-green-600">Arabic Teacher</p>
              </div>
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 text-center ">
                  <div className="border-r-2 border-gray-500">
                    <p className="text-green-600 font-bold">20</p>
                    <p className="">lessons</p>
                  </div>
                  <div className="border-r-2 border-gray-500">
                    <p className="text-green-600 font-bold">10</p>
                    <p>weeks</p>
                  </div>
                  <div className="">
                    <p className="text-green-600 font-bold">50</p>
                    <p>enroll</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-yellow-400 font-bold text-3xl">$92.00</h1>
                <h3 className="text-green-600">Course Fee</h3>
              </div>
            </div>
            <h1 className="text-2xl mt-7 font-bold">Overview</h1>
            <p className="mt-7 text-gray-400 font-semibold">
              This class is for students who can fluently read Qur’an. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum. Unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
            </p>

            <ButtonContent />
          </div>
          <div>
            <div className="flex justify-end text-right h-fit mr-36">
              <div className="w-full max-w-sm rounded-lg bg-[#FAF7F2] p-6 shadow-md">
                <h2 className="mb-4 text-xl font-bold text-gray-900 text-left">
                  Course Features
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Course Fee
                    </div>
                    <span className="font-semibold text-green-600">$92.00</span>
                  </div>

                  <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
                    <span className="text-gray-600">Lessons</span>
                    <span className="font-semibold text-green-600">12</span>
                  </div>

                  <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-green-600">
                      12 hours
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold text-green-600">50</span>
                  </div>

                  <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-green-600">Islam</span>
                  </div>

                  <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold text-green-600">
                      Advanced
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-md bg-yellow-400 py-3 font-semibold text-gray-900 hover:bg-yellow-500 transition">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="flex-1 mt-20">
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
                      If you have any further query then you can contact our
                      helpline
                    </h1>
                    <h1 className="text-2xl font-medium  mt-20 ">
                      Helpline: 0241-21131
                    </h1>
                    <h2 className="text-white text-xl">(10AM-5PM)</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
