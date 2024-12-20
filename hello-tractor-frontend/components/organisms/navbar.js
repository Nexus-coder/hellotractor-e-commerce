import Link from "next/link";
import Image from "next/image";

import { Heart } from 'lucide-react'

import { links } from "@/lib/links";
import UserAvatarMenu from "./user-avatar-menu";

export default function Header() {

  return (
    <div className="w-full bg-[#FCFCFC] shadow-sm">
      {/* Header Section */}
      <div className="w-full h-16 px-6 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center ml-10">
            <Image
              src="/HT_LOGO_RGB_Orange 1.png"
              alt="logo"
              className="w-36 h-auto"
              width={144}
              height={36}
            />
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:flex items-center space-x-6 text-gray-600 text-sm">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search for tractor or Spare Part"
                className="w-96 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex items-center space-x-6 mr-10">
            <button className="bg-primary px-6 py-2 text-sm font-medium  hover:bg-orange-600 text-white font-semibold rounded-lg">
              Sell
            </button>
            <Link
              href="/wishlist"
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Go to wishlist</span>
              <Heart className="h-6 w-6" />
            </Link>
            <UserAvatarMenu />
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-[#FCFCFC] shadow-sm">
        <nav className="flex items-center justify-center px-6 py-3">
          <div className="flex text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 px-10 py-2 hover:bg-gray-200 font-manrope font-semibold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
