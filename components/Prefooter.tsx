import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Prefooter() {
  return (
    <div className="relative text-white">
      {/* Background Image */}
      <img
        src="/images/background/footer-bg.jpg"
        alt="prefooter"
        className="w-full object-cover  lg:h-100 h-64"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6  grid grid-cols-1 md:grid-cols-4 gap-8"></div>

      {/*coloum 1*/}
      <div>
        <div className="absolute top-30 left-30 text-white text-sm">
          <img src="/images/logo.svg" alt="al quaraan" />
          {/* Black thick line */}
          <hr className="border-t-1 border-white w-49" />

          <p className="text-sm mt-4 mb-2">58 Howard Street #2 cairo.</p>
          <p className="text-sm mb-0">CA 941</p>
          <p className="text-sm mt-4 mb-2">(+88)311-2121101</p>
          <div className="flex space-x-2 mt-11">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-11 h-11 rounded-full bg-[#1f4855] flex items-center justify-center shadow-lg group hover:bg-yellow-500 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-white group-hover:text-black transition-colors " />
              </div>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-11 h-11 rounded-full bg-[#1f4855] flex items-center justify-center shadow-lg group hover:bg-yellow-500 cursor-pointer">
                <Twitter className="w-4 h-4 text-white   group-hover:text-black transition-colors" />
              </div>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-11 h-11 rounded-full bg-[#1f4855] flex items-center justify-center shadow-lg group hover:bg-yellow-500 cursor-pointer">
                <Youtube className="w-4 h-4 text-white   group-hover:text-black transition-colors" />
              </div>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-11 h-11 rounded-full bg-[#1f4855] flex items-center justify-center shadow-lg group hover:bg-yellow-500 cursor-pointer">
                <Instagram className="w-4 h-4 text-white   group-hover:text-black transition-colors" />
              </div>
            </a>
          </div>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-0">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Scholars</li>
            <li>Courses</li>
            <li>Latest News</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
