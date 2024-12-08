import React from "react";
import Link from "next/link"

const AboutUsHeader = () => {
  return (
    <header className="bg-white border-b border-red-500">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-center text-sm py-1">
        Free delivery on all orders over £50 with code <span className="font-bold">easter</span> at checkout
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 lg:px-16 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Avion</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="#" className="hover:text-red-500">All products</Link>
          <Link href="#" className="hover:text-red-500">Plant pots</Link>
          <Link href="#" className="hover:text-red-500">Ceramics</Link>
          <Link href="#" className="hover:text-red-500">Tables</Link>
          <Link href="#" className="hover:text-red-500">Tables</Link>
          <Link href="#" className="hover:text-red-500">Chairs</Link>
          <Link href="#" className="hover:text-red-500">Crockery</Link>
          <Link href="#" className="hover:text-red-500">Tableware</Link>
          <Link href="#" className="hover:text-red-500">Cutlery</Link>
        </nav>

        {/* Right Links */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-red-500">About us</Link>
          <Link href="#" className="hover:text-red-500">Contact</Link>
          <Link href="#" className="hover:text-red-500">Blog</Link>
          <div className="flex space-x-3">
            <button className="hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18M3 3v18M3 21h18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutUsHeader;