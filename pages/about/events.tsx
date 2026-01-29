
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Prefooter from "@/components/Prefooter";
import TopPrefooter from "@/components/TopPrefooter";
import Courses from "@/components/Courses";

export default function events() {
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
          Events
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <Courses />
      <TopPrefooter />
      <Prefooter />
      <Footer />
    </>
  );
}
