"use client";

export default function IslamicInstitute() {
  const plans = [
    {
      price: "$32",
      classes: "2 Classes Per Week",
      students: "2,000+ Students Enrolled",
      features: [
        "8 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: "$48",
      classes: "3 Classes Per Week",
      students: "3,000+ Students Enrolled",
      features: [
        "12 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: "$60",
      classes: "4 Classes Per Week",
      students: "5,000+ Students Enrolled",
      features: [
        "16 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: "$80",
      classes: "5 Classes Per Week",
      students: "6,000+ Students Enrolled",
      features: [
        "20 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <p className="text-green-600 font-semibold mb-2 text-sm sm:text-base">
          WHY TO CHOOSE US
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-14">
          Why Choose Our Islamic Institute
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-[28px] p-6 sm:p-8
                         bg-[#FBF7EA]
                         flex flex-col items-center
                         hover:shadow-xl transition"
            >
              {/* Price Circle */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full
                              bg-yellow-400 flex flex-col
                              items-center justify-center mb-6 border">
                <span className="text-xl sm:text-2xl font-bold">
                  {plan.price}
                </span>
                <span className="text-xs sm:text-sm font-medium">/Mo</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold mb-3 text-center">
                {plan.classes}
              </h3>

              {/* Students */}
              <div className="bg-yellow-200 text-xs sm:text-sm
                              px-4 py-2 rounded-md mb-5">
                {plan.students}
              </div>

              {/* Features */}
              <ul className="text-gray-600 text-xs sm:text-sm
                             space-y-2 mb-6 text-left w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className="mt-auto w-full
                           bg-green-800 text-white
                           px-6 py-2.5 rounded-md
                           text-sm font-semibold
                           hover:bg-yellow-400 hover:text-black
                           transition"
              >
                Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
