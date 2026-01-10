"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-6">
      <div className="max-w-7xl mx-auto pl-0 px-4 py-4 flex items-center justify-between">
        {/* Logo */}

        <img src="/images/logo.svg" alt="al quaraan" />

        {/* Menu */}
        <div className="hidden md:flex space-x-6 font-bold gap-3.5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/services">Service</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 gap-4">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />

          <button className="bg-green-700 text-white px-8 py-3 rounded hover:bg-black-500">
            Quick Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}
