import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { SiAudiobookshelf } from "react-icons/si";
import { FaCheckDouble } from "react-icons/fa";
import AutoSlideImages from "../../Components/serviceAutoslide";

export default function ServiceDetails() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="relative w-full">
        <img src="/home/page-title.jpg" alt="reading" className="w-full" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-60 
                rounded-full bg-yellow-500 w-20 h-20 flex items-center justify-center z-10"
        >
          <SiAudiobookshelf size={32} className="text-black absolute" />
        </div>

        <h1
          className="absolute inset-0 text-4xl 
                    text-white font-bold text-center justify-center
                     flex items-center"
        >
          Services Details
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <div className="relative p-5 flex text-center justify-center">
        <img
          src="/Service/service-detail.png"
          alt="background"
          className="w-full rounded-lg"
        />
        <div className="absolute top-52 right-2 left-4 text-center text-white text-2xl font-bold">
          <h1 className="text-4xl font-bold ">Quranic Junior Al-Hafiz</h1>
          <p className="text-lg text-gray-400 mt-5">
            This class focuses mainly on Quran memorisation and revision of
            <br />
            surahs that have already been memorised.
          </p>
          <h1 className="mt-20">Service Overview</h1>
          <p className="px-56 text-lg mt-16">
            In-class activities will also incorporate some lessons on Hadith and
            Quranic Arabic alongside surah understanding.Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="px-5">
          <h1 className="text-2xl font-bold">Surah Al-Takwir recitation</h1>
          <p className="text-lg text-gray-400 font-semibold pt-4">
            This class is for students who can fluently read Qur’an. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum.
          </p>
          <p className="text-lg text-gray-400 font-semibold pt-4">
            Unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="flex justify-between items-center text-gray-500">
            <div className="bg-black p-5 w-12 rounded-xl mt-5 text-white">
              <FaCheckDouble />
            </div>
            <h1 className="mx-5 text-lg font-semibold">
              This class focuses mainly on Qur’an memorisation and revision of
              surahs that have already been memorised.
            </h1>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <div className="bg-black p-5 w-12 rounded-xl mt-5 text-white">
              <FaCheckDouble />
            </div>
            <h1 className="mx-5 text-lg font-semibold">
              Sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </h1>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <div className="bg-black p-5 w-12 rounded-xl mt-5 text-white">
              <FaCheckDouble />
            </div>
            <h1 className="mx-5 text-lg font-semibold">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis qui dolorem eum.
            </h1>
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <div className="bg-black p-5 w-12 rounded-xl mt-5 text-white">
              <FaCheckDouble />
            </div>
            <h1 className="mx-5 text-lg font-semibold">
              In-class activities will also incorporate some lessons on Hadith
              and Quranic Arabic alongside surah understanding.
            </h1>
          </div>
        </div>
        <div>
          <img src="/Service/service.png" alt="mosque" />
        </div>
      </div>
      <AutoSlideImages />
      <Footer />
    </>
  );
}
