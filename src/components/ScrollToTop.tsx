import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "motion/react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <motion.button
        onClick={handleClick}
        className="fixed bottom-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <ChevronUp />
      </motion.button>
    )
  );
};

export default ScrollToTop;
