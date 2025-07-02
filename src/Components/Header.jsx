import React from 'react';
import logo from '../../Images/logo.png';
import lightMode from '../../Images/lightm.png';


const Header = () => {
  return (

    <header className="relative z-10">
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg">Void Note</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200">Features</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200">Pricing</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200">About us</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200">Contact</a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 cursor-pointer text-white/90 hover:text-white transition-colors duration-200">
                Log in
              </button>
              <button className="px-2 py-2 ">
              
                  <img src={lightMode} alt="Light Mode" className="w-8 h-8 cursor-pointer " />
                
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
 

    
    
  );
};

export default Header;