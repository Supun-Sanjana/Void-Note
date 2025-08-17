import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex bg-[#6A67E9] text-white flex-col py-6 md:py-8 lg:py-[30px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[300px] rounded-tl-4xl rounded-tr-4xl'>

        {/* Main Footer Content */}
        <div className='flex flex-col lg:flex-row border-b pb-6 md:pb-8 lg:pb-[30px] gap-8 lg:gap-0 lg:justify-between lg:items-start'>
        
        {/* Company Info Section */}
        <div className='flex-1'>
            <h3 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 lg:mb-[30px]'>Void Note</h3>
            <div className='space-y-2 md:space-y-3 text-sm md:text-base'>
                <div>Email: info@voidnote.com</div>
                <div>Phone: 555-567-8901</div>
                <div>Address: 1234 Main St <br />
                    Moonstone City, Stardust State 12345</div>
            </div>
        </div>

        {/* Navigation Links Section */}
        <div className='flex-1 flex justify-start lg:justify-center'>
            <div className='flex-row  sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-2'>
                <a href="" className='pr-3 underline hover:no-underline transition-all duration-200 text-sm md:text-base'>About Us</a>
                <a href="" className='pr-3 underline hover:no-underline transition-all duration-200 text-sm md:text-base'>Pricing</a>
                <a href="" className='pr-3 underline hover:no-underline transition-all duration-200 text-sm md:text-base'>Contact</a>
                <a href="" className='underline hover:no-underline transition-all duration-200 text-sm md:text-base'>Features</a>
            </div>
        </div>

        {/* Social Media Section */}
        <div className='flex gap-4 md:gap-6 flex-1 justify-start lg:justify-end'>
            <FaGithub className='size-6 md:size-7 lg:size-8 cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-200'/>
            <FaLinkedinIn className='size-6 md:size-7 lg:size-8 cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-200'/>
            <FaTwitter className='size-6 md:size-7 lg:size-8 cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-200'/>
        </div>
        
        </div>

        {/* Copyright Section */}
        <div className='flex flex-col sm:flex-row py-4 md:py-5 lg:py-[20px] justify-between items-center sm:items-start gap-3 sm:gap-0'>
            <h2 className='text-sm md:text-base text-center sm:text-left'>2025 Void Note . All Rights Reserved.</h2>
            <a href="" className='underline hover:no-underline transition-all duration-200 text-sm md:text-base'>Privacy Policy</a>
        </div>

    </div>
  )
}

export default Footer