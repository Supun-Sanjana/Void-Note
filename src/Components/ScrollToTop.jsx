import React, { useEffect, useState } from 'react'
import scrollIcon from "../../Images/scrollToTop.png"

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

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-0 z-50 
                    transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <img src={scrollIcon} className="w-19 h-12" alt="Scroll to top" />
            </button>
        </div>
    );
};

export default ScrollToTop;