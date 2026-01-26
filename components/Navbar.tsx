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
    <nav className="relative z-50 bg-white shadow overflow-visible">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 overflow-visible">
        {/* LOGO */}
        <img src="/images/logo.svg" alt="Logo" className="h-10" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          {/* HOME MEGA MENU */}
          <div className="relative group">
            <span className="cursor-pointer py-6 inline-block">Home</span>

            <div className="absolute top-full left-0 w-screen opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="h-3"></div>

              <div className="bg-white border-t shadow-2xl">
                <div className="max-w-7xl mx-auto px-10 py-10">
                  <div className="grid grid-cols-4 gap-8">
                    {homePages.map((item) => (
                      <Link key={item.label} href={item.link}>
                        <div className="group">
                          <div className="overflow-hidden rounded-lg border">
                            <img
                              src={item.img}
                              alt={item.label}
                              className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="mt-3 text-center text-sm font-semibold bg-gray-100 rounded py-2 transition group-hover:bg-green-700 group-hover:text-white">
                            {item.label}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer py-6 inline-block">About</span>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2 text-sm font-medium">
                {["About Us", "Price"].map((item) => (
                  <li key={item} className="group/item">
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between px-5 py-3 transition-all duration-200 group-hover/item:pl-7"
                    >
                      <span>{item}</span>
                      <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        →
                      </span>
                    </Link>
                  </li>
                ))}

                {/* EVENTS WITH SUBMENU */}
                <li className="relative group/item">
                  <div className="flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-200 group-hover/item:pl-7">
                    <span>Events</span>
                    <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      →
                    </span>
                  </div>

                  <div className="absolute top-0 left-full ml-1 w-52 bg-white shadow-lg rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                    <ul className="py-2">
                      <li>
                        <Link
                          href="/events"
                          className="block px-5 py-3 hover:pl-7 transition-all"
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/event-detail"
                          className="block px-5 py-3 hover:pl-7 transition-all"
                        >
                          Event Detail
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>



          {/* Pages DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer py-6 inline-block">Pages</span>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2 text-sm font-medium">
                {["FAQ'S", " PRAYER TIME","RECORD CLASS","REGISTER","NOT FOUND"].map((item) => (
                  <li key={item} className="group/item">
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between px-5 py-3 transition-all duration-200 group-hover/item:pl-7"
                    >
                      <span>{item}</span>
                      <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        →
                      </span>
                    </Link>
                  </li>
                ))}

                {/* SCHOLARS WITH SUBMENU */}
                <li className="relative group/item">
                  <div className="flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-200 group-hover/item:pl-7">
                    <span>SCHOLARS</span>
                    <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      →
                    </span>
                  </div>

                  <div className="absolute top-0 left-full ml-1 w-52 bg-white shadow-lg rounded opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                    <ul className="py-2">
                      <li>
                        <Link
                          href="/scholars"
                          className="block px-5 py-3 hover:pl-7 transition-all"
                        >
                          SCHOLAERS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/scholars-detail"
                          className="block px-5 py-3 hover:pl-7 transition-all"
                        >
                          SCHOLARS DETAILS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>


          {/* service DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer py-6 inline-block">Service</span>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2 text-sm font-medium">
                {["SERVICE", " SERVICE DETAILS"].map((item) => (
                  <li key={item} className="group/item">
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between px-5 py-3 transition-all duration-200 group-hover/item:pl-7"
                    >
                      <span>{item}</span>
                      <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* courses DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer py-6 inline-block">Courses</span>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2 text-sm font-medium">
                {["COUSES", " COURSES DETAILS"].map((item) => (
                  <li key={item} className="group/item">
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between px-5 py-3 transition-all duration-200 group-hover/item:pl-7"
                    >
                      <span>{item}</span>
                      <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* OTHER LINKS */}
          {/* <Link href="/services">Pages</Link> */}
          {/* <Link href="/services">Service</Link> */}
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
