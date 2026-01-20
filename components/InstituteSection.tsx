import React from "react";

export default function InstituteSection() {
  const instituteData = [
    {
      id: 1,
      image: "/images/icons/quran.png",
      title: "Expert Quran Tutor",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
      bg: "bg-[#FFFBEF]",
    },
    {
      id: 2,
      image: "/images/icons/pray.png",
      title: "We Value Our Students",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
      bg: "bg-[#EEF8F4]",
    },
    {
      id: 3,
      image: "/images/icons/teach.png",
      title: "Male Female Teachers",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
      bg: "bg-[#FFFDF9]",
    },
    {
      id: 4,
      image: "/images/icons/time.png",
      title: "Flexible Timings",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
      bg: "bg-[#F6F8EF]",
    },
  ];

  return (
    <section className="w-full py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-teal-600 text-sm font-semibold mb-2 uppercase tracking-wide">
            WHY TO CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Our Islamic
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Institute
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instituteData.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden
              rounded-[30px] border border-black/80
              // ${item.bg} px-6 py-22 text-center
              transition-all duration-700
              hover:bg-gradient-to-b hover:from-green-500 hover:to-yellow-400`}
            >

              {/* HOVER BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 mt-4 bg-center bg-no-repeat bg-contain
                opacity-0 transition-opacity duration-700
                group-hover:opacity-100"
                style={{
                  backgroundImage: "url('/images/icons/bismillah-5.png')",
                }}
              ></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* Rotating Icon + Color */}
                <div
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center
                  rounded-full bg-yellow-400
                  transition-all duration-700 ease-in-out
                  group-hover:rotate-[360deg]
                  group-hover:bg-gradient-to-r
                  group-hover:from-green-500
                  group-hover:to-yellow-400"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-4 leading-relaxed group-hover:text-white transition-colors duration-500">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
