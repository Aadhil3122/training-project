import React from "react";

export default function InstituteSection() {
  const instituteData = [
    {
      id: 1,
      image: "/images/icons/quran.png",
      title: "Expert Quran Tutor",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
    },
    {
      id: 2,
      image: "/images/icons/pray.png",
      title: "We Value Our Students",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
    },
    {
      id: 3,
      image: "/images/icons/teach.png",
      title: "Male Female Teachers",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
    },
    {
      id: 4,
      image: "/images/icons/time.png",
      title: "Flexible Timings",
      desc: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-24 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-teal-600 text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wide">
            WHY TO CHOOSE US
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Our Islamic
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Institute
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {instituteData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden
              rounded-3xl border border-black/70
              px-6 py-10 sm:py-12 text-center
              transition-all duration-700
              bg-white
              hover:bg-gradient-to-b hover:from-green-500 hover:to-yellow-400"
            >

              {/* Hover Arabic Background */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-contain
                opacity-0 transition-opacity duration-700
                group-hover:opacity-100"
                style={{
                  backgroundImage: "url('/images/icons/bismillah-5.png')",
                }}
              />

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5
                  flex items-center justify-center
                  rounded-full bg-yellow-400
                  transition-all duration-700
                  group-hover:rotate-[360deg]
                  group-hover:bg-gradient-to-r
                  group-hover:from-green-500
                  group-hover:to-yellow-400"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed group-hover:text-white transition-colors duration-500">
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
