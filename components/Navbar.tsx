"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const homePages = [
    { img: "/images/pages/Home-1.jpg", label: "Home 01", link: "/" },
    { img: "/images/pages/Home-2.jpg", label: "Home 02", link: "/home-2" },
    { img: "/images/pages/Home-3.jpg", label: "Home 03", link: "/home-3" },
    { img: "/images/pages/Home-4.jpg", label: "Home 04", link: "/home-4" },
    { img: "/images/pages/Home-5.jpg", label: "Home 05", link: "/home-5" },
    { img: "/images/pages/Home-6.jpg", label: "Home 06", link: "/home-6" },
    { img: "/images/pages/Home-7.jpg", label: "Home 07", link: "/home-7" },
    { img: "/images/pages/Home-8.jpg", label: "Home 08", link: "/home-8" },
  ];

  return (
    <nav className="relative z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 overflow-visible">
        {/* LOGO */}
        <img src="/images/logo.svg" alt="Logo" className="h-10" />

        {/* MENU */}
        <div className="hidden md:flex items-center justify-center gap-4 font-semibold">
          {/* HOME MEGA MENU */}
          <div className="relative group">
            <span className="cursor-pointer py-6 inline-block">Home</span>

            {/* DROPDOWN */}
            <div
              className="
              absolute top-full left-1/2 -translate-x-1/2
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
            "
            >
              {/* hover buffer */}
              <div className="h-2"></div>

              <div className="bg-white border-t shadow-2xl">
                <div className="w-[1400px] px-10 py-10">
                  {/* GRID */}
                  <div className="grid grid-cols-4 gap-8">
                    {homePages.map((item) => (
                      <Link key={item.label} href={item.link} className="block">
                        {/* CARD */}
                        <div className="w-full overflow-hidden rounded-lg border">
                          <img
                            src={item.img}
                            alt={item.label}
                            className="
                              w-full h-[180px]
                              object-cover
                              transition-transform duration-300
                              hover:scale-105
                            "
                          />
                        </div>

                        {/* LABEL */}
                        <div
                          className="
                          mt-3 text-center text-sm font-semibold
                          bg-gray-100 rounded py-2
                          hover:bg-green-700 hover:text-white transition
                        "
                        >
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER LINKS */}
          <Link href="/about">About</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/services">Service</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-4">
          <Search className="w-10 h-10 p-2 rounded-full bg-gray-100" />
          <User className="w-10 h-10 p-2 rounded-full bg-gray-100" />
          <button className="bg-green-700 text-white px-6 py-3 rounded">
            Quick Join Now
          </button>
        </div>

        {/* MOBILE */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={30} />
        </button>
      </div>
    </nav>
  );
}
