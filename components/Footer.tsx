export default function Footer() {
  return (
    <div className="relative text-gray-300 text-sm">
      <img
        src="/images/background/footer-bg_2.jpg"
        alt="footer"
        className="w-full object-cover lg:h-24 h-48"
      />
          
      <p className="absolute bottom-8 left-5 text-white text-sm">
        All rights reserved 2025 © template_mr
      </p>
      <p className="absolute bottom-8 right-5 text-white text-sm gap-4 flex flex-row">
        <span className="cursor-pointer hover:text-green-500">
          Terms of use
        </span>
        <span className="cursor-pointer hover:text-green-500">
          Privacy Policy
        </span>
      </p>
    </div>
  );
}
