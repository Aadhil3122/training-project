import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopPrefooter from "@/components/TopPrefooter";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";

import IslamicInstitute from "@/components/IslamicInstitute";

export default function Price() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="relative w-full">
        <img src="/images/About/page-title.jpg" alt="reading" className="w-full" />
        <h1
          className="absolute inset-0 text-4xl 
                    text-white font-bold text-center justify-center
                     flex items-center"
        >
          Price
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <IslamicInstitute />
        <TopPrefooter />
        <Prefooter />
      <Footer />
    </>
  );
}
