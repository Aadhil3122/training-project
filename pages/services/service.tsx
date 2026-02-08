import IslamicInstitute from "@/components/IslamicInstitute";

export default function Services() {
  return (
    <>
      <div className="relative w-full">
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="w-full"
        />
        <h1
          className="absolute inset-0 text-4xl 
                    text-white font-bold text-center justify-center
                     flex items-center"
        >
          Our Service
        </h1>
        <p className="text-xl font-bold text-white text-center items-center justify-center">
          Home
        </p>
      </div>
      <IslamicInstitute />
    </>
  );
}
