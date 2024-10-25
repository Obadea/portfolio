import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a>
      <svg
        onClick={scrollToTop}
        className={`${isVisible ? 'block' : 'hidden'} `}
        class="with-icon_icon__MHUeb"
        data-testid="geist-icon"
        fill="none"
        height="46"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="46"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12l-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    </a>
  );
};

export default ScrollToTopButton;
