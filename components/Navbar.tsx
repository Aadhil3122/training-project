"use client";

import Link from "next/link";
import { Search, User, ChevronRight } from "lucide-react";

export default function Navbar() {
  const homePages = [
    { img: "/images/pagesz/Home-1.jpg", label: "Home 01", link: "/" },
    { img: "/images/pagesz/Home-2.jpg", label: "Home 02", link: "/home-2" },
    { img: "/images/pagesz/Home-3.jpg", label: "Home 03", link: "/home-3" },
    { img: "/images/pagesz/Home-4.jpg", label: "Home 04", link: "/home-4" },
    { img: "/images/pagesz/Home-5.jpg", label: "Home 05", link: "/home-5" },
    { img: "/images/pagesz/Home-6.jpg", label: "Home 06", link: "/home-6" },
    { img: "/images/pagesz/Home-7.jpg", label: "Home 07", link: "/home-7" },
    { img: "/images/pagesz/Home-8.jpg", label: "Home 08", link: "/home-8" },
  ];

  return (
    <nav className="relative z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* LOGO */}
        <img src="/images/logo.svg" alt="Logo" className="h-10" />

        {/* ================= MAIN MENU ================= */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          {/* HOME */}
          <HomeMegaMenu homePages={homePages} />

          {/* ABOUT */}
          <Menu title="About">
            <HoverItem href="/about-us" label="About Us" />
            <HoverItem href="/prices" label="Price" />
            <SubMenu label="Events">
              <HoverItem href="/events" label="Events" />
              <HoverItem href="/pastevents" label="Event Details" />
            </SubMenu>
          </Menu>

          {/* PAGES */}
          <Menu title="Pages">
            <HoverItem href="/faqs" label="FAQ'S" />
            <HoverItem href="/prayertime" label="Prayer Time" />
            <HoverItem href="/recordedclass" label="Record Class" />
            <HoverItem href="/register" label="Register" />
            <HoverItem href="/notfound" label="Not Found" />
            <SubMenu label="Scholards">
              <HoverItem href="/scholards" label="Scholards" />
              <HoverItem href="/scholarddetails" label="Scholards Details" />
            </SubMenu>
          </Menu>

          {/* SERVICE */}
          <Menu title="Service">
            <HoverItem href="/service" label="Service" />
            <HoverItem href="/servicedetails" label="Service Details" />
          </Menu>

          {/* COURSES */}
          <Menu title="Courses">
            <HoverItem href="/courses" label="Courses" />
            <HoverItem href="/coursedetails" label="Course Details" />
          </Menu>

          {/* BLOG */}
          <Menu title="Blog">
            <HoverItem href="/ourblog" label="Our Blog" />
            <HoverItem href="/blogclassic" label="Blog Classic" />
            <HoverItem href="/blogdetails" label="Blog Details" />
          </Menu>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="py-6 inline-block hover:text-green-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* ================= RIGHT ICONS + Quick Join Now ================= */}
        <div className="hidden md:flex items-center gap-4">
          <Search />
          <User />

          {/* Quick Join Now */}
          <Link
            href="/contact/contact"
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

/* Home Mega Menu */
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

/* Parent menu with dropdown */
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

/* Menu item → arrow on hover */
function HoverItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between px-5 py-3 hover:bg-gray-50"
      >
        {label}
        <ChevronRight
          size={14}
          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition text-gray-400"
        />
      </Link>
    </li>
  );
}

/* Nested submenu */
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
        <ChevronRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition text-gray-400"
        />
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
