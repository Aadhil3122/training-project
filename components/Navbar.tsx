"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, X, ChevronRight, Menu } from "lucide-react";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ added

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

        {/* ================= MAIN MENU (DESKTOP ONLY) ================= */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <HomeMegaMenu homePages={homePages} />

          <MenuDropdown title="About">
            <HoverItem href="/about-us" label="About Us" />
            <HoverItem href="/prices" label="Price" />
            <SubMenu label="Events">
              <HoverItem href="/events" label="Events" />
              <HoverItem href="/pastevents" label="Event Details" />
            </SubMenu>
          </MenuDropdown>

          <MenuDropdown title="Pages">
            <HoverItem href="/faqs" label="FAQ'S" />
            <HoverItem href="/prayertime" label="Prayer Time" />
            <HoverItem href="/recordedclass" label="Record Class" />
            <HoverItem href="/register" label="Register" />
            <HoverItem href="/notfound" label="Not Found" />
            <SubMenu label="Scholars">
              <HoverItem href="/Scholars" label="Scholars" />
              <HoverItem href="/Scholarsdetails" label="Scholars Details" />
            </SubMenu>
          </MenuDropdown>

          <MenuDropdown title="Service">
            <HoverItem href="/service" label="Service" />
            <HoverItem href="/servicedetails" label="Service Details" />
          </MenuDropdown>

          <MenuDropdown title="Courses">
            <HoverItem href="/courses" label="Courses" />
            <HoverItem href="/coursedetails" label="Course Details" />
          </MenuDropdown>

          <MenuDropdown title="Blog">
            <HoverItem href="/ourblog" label="Our Blog" />
            <HoverItem href="/blogclassic" label="Blog Classic" />
            <HoverItem href="/blogdetails" label="Blog Details" />
          </MenuDropdown>

          <Link
            href="/contact"
            className="py-6 inline-block hover:text-green-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* ================= RIGHT ICONS (DESKTOP ONLY) ================= */}
        <div className="hidden md:flex items-center gap-4 relative">
          <button onClick={() => setShowSearch(!showSearch)} className="p-2">
            {showSearch ? <X size={20} /> : <Search size={20} />}
          </button>

          <Link href="/contact">
            <User size={20} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded bg-green-700 text-white hover:bg-black transition"
          >
            Quick Join Now
          </Link>
        </div>

        {/* ================= MOBILE HAMBURGER (ONLY MOBILE) ================= */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col p-6 space-y-4 font-medium">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/prices" onClick={() => setMobileOpen(false)}>
              Price
            </Link>
            <Link href="/events" onClick={() => setMobileOpen(false)}>
              Events
            </Link>
            <Link href="/faqs" onClick={() => setMobileOpen(false)}>
              FAQ'S
            </Link>
            <Link href="/prayertime" onClick={() => setMobileOpen(false)}>
              Prayer Time
            </Link>
            <Link href="/recordedclass" onClick={() => setMobileOpen(false)}>
              Record Class
            </Link>
            <Link href="/register" onClick={() => setMobileOpen(false)}>
              Register
            </Link>
            <Link href="/service" onClick={() => setMobileOpen(false)}>
              Service
            </Link>
            <Link href="/courses" onClick={() => setMobileOpen(false)}>
              Courses
            </Link>
            <Link href="/ourblog" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-green-700 text-white px-4 py-3 rounded text-center"
            >
              Quick Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ================= SAME REUSABLE COMPONENTS ================= */

function MenuDropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <span className="py-6 inline-block cursor-pointer">{title}</span>
      <ul className="absolute top-full left-0 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        {children}
      </ul>
    </div>
  );
}

function HoverItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="block px-5 py-3 hover:bg-gray-50">
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
      <div className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 cursor-pointer">
        {label}
        <ChevronRight className="w-4 h-4 ml-2" />
      </div>
      <ul className="absolute top-0 left-full w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible">
        {children}
      </ul>
    </li>
  );
}

function HomeMegaMenu({ homePages }: { homePages: any[] }) {
  return (
    <div className="relative group">
      <Link href="/" className="py-6 inline-block">
        Home
      </Link>
      <div className="absolute left-1/2 top-full -translate-x-1/2 w-screen max-w-[1400px] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
        <div className="bg-white border-t shadow-2xl">
          <div className="px-10 py-10 grid grid-cols-4 gap-8">
            {homePages.map((item) => (
              <Link key={item.label} href={item.link}>
                <div className="cursor-pointer">
                  <div className="overflow-hidden rounded-lg h-[180px]">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover hover:scale-110 transition"
                    />
                  </div>
                  <div className="mt-3 text-center bg-gray-100 py-2 rounded hover:bg-green-700 hover:text-white transition">
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
