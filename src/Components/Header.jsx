import React, { useState } from 'react';
import logo from '../../Images/logo.png';
import lightMode from '../../Images/light-mode.svg';
import darkMode from '../../Images/dark-mod.svg';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-100 sticky top-0">
      <nav className="rounded-b-[40px] backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-8 h-8 cursor-pointer" />
              <span className="text-white font-semibold text-lg cursor-pointer">Void Note</span>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Features</a>
              <a href="#" className="text-white/90 hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Pricing</a>
              <a href="#" className="text-white/90 hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">About us</a>
              <a href="#" className="text-white/90 hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Contact</a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
                Log in
              </button>
              <button className="relative w-8 h-8 group">
                <img src={lightMode} alt="Light Mode" className="w-full h-full object-contain absolute group-hover:hidden" />
                <img src={darkMode} alt="Dark Mode" className="w-full h-full object-contain " />
              </button>
                onClick={toggleMenu}
                className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
              >
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out 
            ${isMenuOpen ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20 mt-4">
              <a href="#" className="block text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Features</a>
              <a href="#" className="block text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Pricing</a>
              <a href="#" className="block text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">About us</a>
              <a href="#" className="block text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Contact</a>
              <a href="#" className="block text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-[#676BEB] hover:backdrop-blur-md transition-all duration-200">Login</a>
            </div>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;