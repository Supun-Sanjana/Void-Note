"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import scrollIcon from "@/public/scroll.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-0 z-50 transition-all duration-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <Image
          src={scrollIcon}
          alt="Scroll to top"
          width={80}
          height={80}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
