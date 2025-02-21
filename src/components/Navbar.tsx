import { useState, useEffect } from "react";
import { Equal, X } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "motion/react";
// import gsap from "gsap";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useGSAP(() => {
    // if (isOpen) {
    //   gsap.to("#mobile-menu", {
    //     x: 0,
    //     duration: 0.5,
    //     ease: "power3.out",
    //   });
    // } else {
    //   gsap.to("#mobile-menu", {
    //     x: "100%",
    //     duration: 0.5,
    //     ease: "power3.in",
    //   });
    // }
  }, [isOpen]);

  return (
    <div
      className={`h-20 backdrop-blur-sm bg-white/50 sticky top-0 left-0 right-0 transition-transform ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } flex items-center justify-between z-10`}
    >
      <div className="flex items-center gap-8">
        <motion.h1 whileTap={{ scale: 0.9 }} className="text-2xl font-bold">
          <Link to="/">Reactify UI</Link>
        </motion.h1>
        <ul className="hidden md:flex items-center gap-5">
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="font-mediu hover:cursor-pointer"
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 font-mediu hover:cursor-pointer"
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 font-mediu hover:cursor-pointer"
          >
            <Link to="/catalogue">Catalogue</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 font-mediu hover:cursor-pointer"
          >
            <Link to="/services">Services</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 font-mediu hover:cursor-pointer"
          >
            <Link to="/blog">Blog</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 font-mediu hover:cursor-pointer"
          >
            <Link to="/faq">FAQ</Link>
          </motion.li>
        </ul>
      </div>
      <div className="hidden md:flex gap-3">
        <Button>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link to="/contact">Contact</Link>
          </motion.div>
        </Button>
      </div>
      <div className="flex md:hidden">
        <motion.button whileTap={{ y: -2 }} onClick={() => setIsOpen(true)}>
          <Equal />
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            <OverLay setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

interface OverLayProps {
  setIsOpen: (isOpen: boolean) => void;
}

const OverLay = ({ setIsOpen }: OverLayProps) => {
  return (
    <div id="mobile-menu" className="bg-white h-screen">
      <button className="fixed right-4 top-7" onClick={() => setIsOpen(false)}>
        <X />
      </button>
      <ul className="flex flex-col gap-4 items-center justify-center h-full text-xl font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center gap-1">
          <Link to="/about">About</Link>
        </li>
        <li className="flex items-center gap-1">
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li className="flex items-center gap-1">
          <Link to="/services">Services</Link>
        </li>
        <li className="flex items-center gap-1">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="flex items-center gap-1">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="flex items-center gap-1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
