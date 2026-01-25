export default function Footer() {
  return (
    <footer className="relative text-gray-300 text-sm">
      {/* Background Image */}
      <img
        src="/images/background/footer-bg_2.jpg"
        alt="footer"
        className="w-full object-cover lg:h-24 h-48"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 sm:py-2">
        {/* Left */}
        <p className="text-white text-sm mb-2 sm:mb-0 text-center sm:text-left">
          All rights reserved 2025 © template_mr
        </p>

        {/* Right */}
        <div className="flex gap-4 text-white text-sm">
          <span className="cursor-pointer hover:text-green-500 transition">
            Terms of use
          </span>
          <span className="cursor-pointer hover:text-green-500 transition">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
