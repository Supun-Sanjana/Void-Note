"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import downloadIcon from "@/public/downloadicon.png"; // ✅ place image in /public folder
import { toast } from "sonner"
import { useState } from "react";

const Hero = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/registration"); // ✅ Next.js navigation
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl text-white mb-8 leading-tight">
          Focus. Simplify. Achieve.
        </h1>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          VoidNote is your minimalist companion for distraction-free to-dos and notes, designed
          for students and creatives who value clarity and efficiency
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleRegisterClick}
            className="text-[#676BEB] px-8 py-3 bg-white cursor-pointer font-semibold rounded-lg
           hover:bg-[#676BEB] hover:text-white transition-colors duration-200 shadow-lg w-65"
          >
            Get Started
          </button>

          <button
            className="px-8 py-3 backdrop-blur-md cursor-pointer bg-white/10 border
           border-white/20 text-white font-semibold rounded-lg hover:bg-white/20
           transition-all duration-200 flex items-center space-x-2"

            onClick={() => {
              toast.info("Download for Desktop coming soon!")
            }}
          >
            <Image
              src={downloadIcon}
              alt="download icon"
              width={20}
              height={20}
            />
            <span>Download for Desktop</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
