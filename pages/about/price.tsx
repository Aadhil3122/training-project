import Link from "next/link";
import IslamicInstitute from "@/components/IslamicInstitute";

export default function Price() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/images/About/page-title.jpg"
          alt="reading"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-3">
            Pricing Plan
          </h1>

          <p className="text-lg font-semibold">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span>
            <span>Pricing Plan</span>
          </p>
        </div>
      </div>

      {/* Next Section */}
      <IslamicInstitute />
    </>
  );
}
