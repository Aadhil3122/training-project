import TopNavbar from "../../Components/TopNavBar";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import AnimationRender from "../../Components/AnimationRender";

export default function ScholardDetails() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="relative w-full ">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start">
        <div>
          <img
            src="/home/4.jpg"
            alt="reading"
            className=" rounded-xl w-[500px] mx-16"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">Abdelrahman M</h1>
          <p className="text-xl text-green-600 font-bold pt-3">
            Quran & Arabic Teacher
          </p>
          <p className="text-lg text-gray-400 font-semibold pr-8 mt-3">
            There are many variations of passages of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil
          </p>
          <p className="text-lg text-gray-400 font-semibold pr-8 mt-3">
            Harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minusid quod maxime placeat facere possimus
          </p>
          <p className="text-green-600 pt-5 font-semibold text-xl">
            Advance Teaching Tools
          </p>
          <p className="text-green-600 pt-2 font-semibold text-xl">
            Modern Teaching Methods
          </p>
          <p className="text-green-600 pt-2 font-semibold text-xl">
            Special Training For Teachers
          </p>
          <div className="bg-green-800 border-spacing-5">
            <div className="bg-yellow-600 border-spacing-2 border-yellow-300"></div>
          </div>
        </div>
      </div>
      <AnimationRender />
      <Footer />
    </>
  );
}
