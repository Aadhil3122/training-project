import React from "react";
import { Clock, MessageCircle } from "lucide-react";

export default function NewsUpdate() {
  const news = [
    {
      id: 1,
      title: "Abandoning Prayer – Why To Avoid At All Costs?",
      image: "/images/resource/news-1.jpg",
      authorImage: "/images/resource/author-2.png",
    },
    {
      id: 2,
      title: "What Are The Conditions Of The Shahadah In Islam",
      image: "/images/resource/news-2.jpg",
      authorImage: "/images/resource/author-3.png",
    },
    {
      id: 3,
      title: "Types Of Khawf (Fear) And Tawakkul (Reliance) In Islam",
      image: "/images/resource/news-3.jpg",
      authorImage: "/images/resource/author-4.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-14 px-4 sm:px-0">
        <p className="text-green-600 font-semibold uppercase mb-2 text-sm sm:text-base">
          Our News Updates
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Latest News & Articles From
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          The Blog
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-md
                       hover:shadow-2xl transition duration-500 group"
          >
            {/* IMAGE */}
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover
                           scale-110 group-hover:scale-100
                           transition-transform duration-700"
              />

              {/* WAVE EFFECT */}
              <div
                className="absolute -top-full -left-full
                           w-[200%] h-[200%]
                           bg-gradient-to-br
                           from-white/70 via-gray-200/40 to-transparent
                           transition-all duration-700
                           group-hover:top-0 group-hover:left-0"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-6">
              {/* DATE + COMMENT */}
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>October 18, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={14} />
                  <span>03 Comment</span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                There are many variations of passages of lorem ipsum available
                islam courses.
              </p>

              {/* AUTHOR + BUTTON */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.authorImage}
                    alt="author"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white"
                  />
                  <span className="text-sm sm:text-base font-medium">
                    Amir Khan
                  </span>
                </div>

                <button
                  className="bg-green-700 text-white px-4 sm:px-5 py-2 rounded
                             hover:bg-yellow-500 transition text-sm sm:text-base"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
