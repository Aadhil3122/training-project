import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
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
          Contact
        </h1>
        <p className="text-xl font-bold text-white text-center items-center ">
          Home
        </p>
      </div>
      <div>
        <div className="bg-gray-200 grid grid-cols-3 mx-28  ">
          <div className="flex flex-col py-20 gao-4  items-center ">
            <div
              className="w-28 h-28 rounded-full bg-black text-white text-5xl 
                                    flex items-center justify-center transition-transform duration-300 hover:scale-x-[-1]"
            >
              <FaLocationDot />
            </div>
            <h1 className="text-3xl font-bold text-center pt-5">Our Address</h1>
            <p className="text-xl font-semibold text-gray-400 text-center">
              Metro City Shop 11 floor
            </p>
            <p className="text-xl font-semibold text-gray-400 text-center border border-r-2 z-10">
              Fiolveien 230, Norway
            </p>
          </div>

          <div className="flex flex-col py-20 gao-4  items-center ">
            <div
              className="w-28 h-28 rounded-full bg-black text-white text-5xl 
                                    flex items-center justify-center transition-transform duration-300 hover:scale-x-[-1]"
            >
              <FaPhoneAlt />
            </div>
            <h1 className="text-3xl font-bold text-center pt-5">Our Phone</h1>
            <p className="text-xl font-semibold text-gray-400 text-center">
              ( +088 ) 48 26 48 26
            </p>
            <p className="text-xl font-semibold text-gray-400 text-center  z-10">
              Let’s Talk +88 01 27 14 101
            </p>
          </div>

          <div className="flex flex-col py-20 gao-4  items-center ">
            <div
              className="w-28 h-28 rounded-full bg-black text-white text-5xl 
                                    flex items-center justify-center transition-transform duration-300 hover:scale-x-[-1]"
            >
              <MdEmail />
            </div>
            <h1 className="text-3xl font-bold text-center pt-5">
              Email Address
            </h1>
            <p className="text-xl font-semibold text-gray-400 text-center">
              Isalm_quran@gmail.com
            </p>
            <p className="text-xl font-semibold text-gray-400 text-center border border-r-2 z-10">
              Info_hr@gmail.com
            </p>
          </div>
        </div>
        <div>
          <div className="mt-7 ml-20">
            <h1 className="text-2xl font-bold">
              Feel free to write Islamic anytime
            </h1>
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
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://maps.app.goo.gl/3yJKh4YxizoZysbt8"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
