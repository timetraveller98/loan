"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full py-2 bg-gray-100/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={50}
            priority
            className="object-contain p-1"
          />
        </Link>
        {/* <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Services
          </Link>
        </div> */}
        {isMobile && (
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 hover:bg-gray-200 transition md:hidden"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        )}
      </nav>

      {/* Mobile Menu Items */}
      {isMobile && isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-md px-4 py-3 space-y-2">
          <Link
            href="/"
            className="block text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-gray-900 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
