import React from "react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Quran Intermediate Course brother",
      image: "/images/resource/course-1.jpg",
      iconsimage: "/images/icons/service-1.svg",
      lessons: 20,
      weeks: 10,
      enroll: 50,
      price: "$32.00",
      oldPrice: "$45.00",
    },
    {
      id: 2,
      title: "Online Quran Classes For Ladies",
      image: "/images/resource/course-2.jpg",
      iconsimage: "/images/icons/service-2.svg",
      lessons: 20,
      weeks: 10,
      enroll: 50,
      price: "$32.00",
      oldPrice: "$45.00",
    },
    {
      id: 3,
      title: "Online Quran Classes For Kids",
      image: "/images/resource/course-3.jpg",
      iconsimage: "/images/icons/service-3.svg",
      lessons: 20,
      weeks: 10,
      enroll: 50,
      price: "$32.00",
      oldPrice: "$45.00",
    },
    {
      id: 4,
      title: "Hifz Quran (Quran Memorization Course)",
      image: "/images/resource/course-4.jpg",
      iconsimage: "/images/icons/service-4.svg",
      students: 50,
      weeks: 10,
      enroll: 50,
      price: "$32.00",
      oldPrice: "$45.00",
      highlight: true,
    },
  ];

  return (
    <section
      className="relative w-full pt-10 pb-40 px-4
                 bg-cover bg-center bg-no-repeat overflow-visible"
      style={{
        backgroundImage: "url('/images/background/courses-one_bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-600 text-sm font-semibold mb-2 uppercase tracking-wide">
            Popular Courses
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Arabic & Islamic Courses
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden
                         hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500 group-hover:scale-110"
                />

                {/* Floating Icon */}
                <div className="absolute -bottom-4 left-4 bg-white rounded-full p-2">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <img
                      src={course.iconsimage}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 min-h-[60px]">
                  {course.title}
                </h3>

                <div className="flex justify-between text-center mb-4">
                  <div>
                    <p className="text-2xl font-bold">
                      {course.lessons || course.students}
                    </p>
                    <p className="text-xs text-gray-500">
                      {course.lessons ? "lessons" : "students"}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{course.weeks}</p>
                    <p className="text-xs text-gray-500">weeks</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{course.enroll}</p>
                    <p className="text-xs text-gray-500">enroll</p>
                  </div>
                </div>

                <p
                  className={`text-sm mb-4 ${
                    course.highlight
                      ? "text-blue-600 bg-blue-50 p-2 rounded"
                      : "text-gray-500"
                  }`}
                >
                  There are many variations of lorem Ipsum available online.
                </p>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-green-600 text-white px-6 py-2 rounded
                                     hover:bg-yellow-500 transition"
                  >
                    Study Now
                  </button>
                  <div>
                    <span className="text-gray-400 mr-2 line-through">
                      {course.oldPrice}
                    </span>
                    <span className="text-teal-600 font-bold">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BOX – HALF OUTSIDE */}
      <div className="absolute left-0 right-0 -bottom-18 z-30 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400
                          shadow-2xl rounded-lg px-16 py-10
                          flex items-center justify-between"
          >
            <img
              src="/images/background/cta-one_bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Do Not Let Shaitan Delay You From Starting
              </h3>
              <p className="text-white text-xl md:text-2xl font-semibold">
                To Learn Your Deen.
              </p>
            </div>

            <div className="relative z-10">
              <button
                className="bg-green-800 text-white px-6 py-3 rounded
                                 font-bold hover:bg-black transition"
              >
                Quick Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
