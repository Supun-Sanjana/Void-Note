import React from 'react';
import logo from '../../Images/logo.png';
import lightMode from '../../Images/lightm.png';


const Header = () => {
  return (
    <header className="bg-[#5a4fff] backdrop-blur-3xl opacity-50 rounded-b-[20px]">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="logo flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h3 className="text-xl font-bold text-[#f8f9ff]">Void Note</h3>
        </div>

        {/* Navigation Links */}
        <div className="nav-links flex space-x-4">
          <a href="#" className="hover:text-[#ffffff]">Features</a>
          <a href="#" className="hover:text-[#ffffff]">Pricing</a>
          <a href="#" className="hover:text-[#ffffff]">About us</a>
          <a href="#" className="hover:text-[#ffffff]">Contact</a>
        </div>

        <div className="flex space-x-4 justify-between items-center"> 
          <button className='w-[110px] h-[42px] bg-[#676BEB] text-white rounded-xl '> Login</button>
          <img src={lightMode} alt="light mode toggle button"
          className=''
           />
        </div>

        
      </div>
    </header>
  );
};

export default Header;