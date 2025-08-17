"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import logo from "@/public/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginClick = () => router.push("/login");

  const sections = ["features", "pricing", "testimonial", "newsletter"];

  // Scroll to section and close mobile menu if open
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu
  };

  return (
    <header className="z-50 sticky top-0">
      <nav className="rounded-b-[40px] backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border-b border-white/20 dark:border-gray-700 shadow-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src={logo} alt="Logo" className="w-8 h-8 cursor-pointer" />
              </Link>
              <span className="text-white dark:text-gray-200 font-semibold text-lg cursor-pointer">
                Void Note
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className="text-white/90 dark:text-gray-200/90 hover:text-white dark:hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 dark:hover:border-gray-400 hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleLoginClick}
                className="hidden sm:block cursor-pointer text-white/90 dark:text-gray-200/90 hover:text-white dark:hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200"
              >
                Log in
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
              >
                <div
                  className={`w-5 h-0.5 bg-white dark:bg-gray-200 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-white dark:bg-gray-200 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-white dark:bg-gray-200 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20 dark:border-gray-700 mt-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className="block w-full text-left text-white/90 dark:text-gray-200/90 hover:text-white dark:hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <button
                onClick={handleLoginClick}
                className="block w-full text-left text-white/90 dark:text-gray-200/90 hover:text-white dark:hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
