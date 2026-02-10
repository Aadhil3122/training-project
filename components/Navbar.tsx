"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const homePages = [
    {
      img: "/images/pagesz/Home-1.jpg",
      label: "Home 01",
      link: "/welcomesection",
    },
    { img: "/images/pagesz/Home-2.jpg", label: "Home 02", link: "/" },
    { img: "/images/pagesz/Home-3.jpg", label: "Home 03", link: "/" },
    { img: "/images/pagesz/Home-4.jpg", label: "Home 04", link: "/" },
    { img: "/images/pagesz/Home-5.jpg", label: "Home 05", link: "/" },
    { img: "/images/pagesz/Home-6.jpg", label: "Home 06", link: "/" },
    { img: "/images/pagesz/Home-7.jpg", label: "Home 07", link: "/" },
    { img: "/images/pagesz/Home-8.jpg", label: "Home 08", link: "/" },
  ];

  return (
    <nav className="relative z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* LOGO */}
        <img src="/images/logo.svg" alt="Logo" className="h-10" />

        {/* ================= MAIN MENU ================= */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <HomeMegaMenu homePages={homePages} />

          <Menu title="About">
            <HoverItem href="/about-us" label="About Us" />
            <HoverItem href="/prices" label="Price" />
            <SubMenu label="Events">
              <HoverItem href="/events" label="Events" />
              <HoverItem href="/pastevents" label="Event Details" />
            </SubMenu>
          </Menu>

          <Menu title="Pages">
            <HoverItem href="/faqs" label="FAQ'S" />
            <HoverItem href="/prayertime" label="Prayer Time" />
            <HoverItem href="/recordedclass" label="Record Class" />
            <HoverItem href="/register" label="Register" />
            <HoverItem href="/notfound" label="Not Found" />
            <SubMenu label="Scholars">
              <HoverItem href="/Scholars" label="Scholars" />
              <HoverItem href="/Scholarsdetails" label="Scholars Details" />
            </SubMenu>
          </Menu>

          <Menu title="Service">
            <HoverItem href="/service" label="Service" />
            <HoverItem href="/servicedetails" label="Service Details" />
          </Menu>

          <Menu title="Courses">
            <HoverItem href="/courses" label="Courses" />
            <HoverItem href="/coursedetails" label="Course Details" />
          </Menu>

          <Menu title="Blog">
            <HoverItem href="/ourblog" label="Our Blog" />
            <HoverItem href="/blogclassic" label="Blog Classic" />
            <HoverItem href="/blogdetails" label="Blog Details" />
          </Menu>

          <Link
            href="/contact"
            className="py-6 inline-block hover:text-green-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* ================= RIGHT ICONS + Quick Join Now ================= */}
        <div className="hidden md:flex items-center gap-4 relative">
          {/* SEARCH ICON */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="relative z-50 p-2"
          >
            {showSearch ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* FULL-WIDTH SEARCH OVERLAY */}
          {showSearch && (
            <div className="fixed inset-0 z-40 bg-black/40 flex justify-center items-start pt-20">
              <div className="w-full max-w-5xl px-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type your search here..."
                  className="w-full px-6 py-4 text-xl rounded-lg shadow-lg border-2 border-blue-500 focus:border-green-700 focus:outline-none transition-all duration-300"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* USER ICON */}
          <Link href="/contact">
            <User size={20} />
          </Link>

          {/* Quick Join Now */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded bg-green-700 text-white
                       transition-colors duration-300 hover:bg-black"
          >
            Quick Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function HomeMegaMenu({
  homePages,
}: {
  homePages: { img: string; label: string; link: string }[];
}) {
  return (
    <div className="relative group">
      <Link href="/" className="cursor-pointer py-6 inline-block">
        Home
      </Link>
      <div
        className="absolute left-1/2 top-full -translate-x-1/2 w-screen max-w-[1400px] pt-6
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition-all duration-300"
      >
        <div className="bg-white border-t shadow-2xl">
          <div className="px-10 py-10 grid grid-cols-4 gap-8">
            {homePages.map((item) => (
              <Link key={item.label} href={item.link}>
                <div className="group/item cursor-pointer">
                  <div className="overflow-hidden rounded-lg h-[180px]">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                  </div>
                  <div
                    className="mt-3 text-center bg-gray-100 py-2 rounded
                               group-hover/item:bg-green-700
                               group-hover/item:text-white transition"
                  >
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <span className="py-6 inline-block cursor-pointer">{title}</span>
      <ul
        className="absolute top-full left-0 w-56 bg-white shadow-lg rounded
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      >
        {children}
      </ul>
    </div>
  );
}

function HoverItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between px-5 py-3 hover:bg-gray-50"
      >
        {label}
      </Link>
    </li>
  );
}

function SubMenu({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="relative group/sub">
      <div className="group flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer">
        {label}
        <ChevronRight className="w-4 h-4 ml-2" /> {/* Chevron for submenu */}
      </div>
      <ul
        className="absolute top-0 left-full w-56 bg-white shadow-lg rounded
                   opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible"
      >
        {children}
      </ul>
    </li>
  );
}
