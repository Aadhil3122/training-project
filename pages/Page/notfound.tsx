import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

export default function NotFound() {
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
          Recorded Class
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <div className="justify-center">
        <div className="relative flex justify-center items-center">
          <h1 className="text-[200px] font-extrabold text-center">404</h1>
          <img
            src="/logo/quran.png"
            alt="quraan"
            className="absolute w-25 h-25 -mt-10 transition-transform animate-bounce"
          />
        </div>

        <h1 className="text-4xl font-bold text-center">
          Opps! Your On The Wrong Place.
        </h1>
        <p className="text-gray-500 text-center font-semibold p-4">
          We Can Not Seem to Find the Page You are Looking for
        </p>
        <div className="flex justify-center">
          <button
            className="
                    bg-yellow-300 text-black font-bold py-5 px-7 rounded-lg transition-all duration-300 
                    hover:bg-green-800 hover:text-white hover:scale-150 hover:shadow-2xl active:scale-95"
          >
            Back To Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
