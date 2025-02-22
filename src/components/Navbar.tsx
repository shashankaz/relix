import { useState, useEffect } from "react";
import {
  Cog,
  Equal,
  FileQuestion,
  Grid,
  Home,
  MessageCircle,
  Notebook,
  Phone,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
// import gsap from "gsap";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

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
      className={cn(
        "h-20 backdrop-blur-sm bg-white/50 flex items-center justify-between z-10",
        !isOpen
          ? "sticky top-0 left-0 right-0 transition-transform"
          : "fixed inset-0 z-[9999]",
        showNavbar && !isOpen ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center gap-8">
        <Link to="/">
          <motion.h1
            whileTap={{ scale: 0.9 }}
            className="text-2xl font-bold font-comfortaa"
          >
            Relix
          </motion.h1>
        </Link>
        <ul className="hidden md:flex items-center gap-5">
          <Link to="/">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-mediu hover:cursor-pointer"
            >
              Home
            </motion.li>
          </Link>
          <Link to="/about">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 font-mediu hover:cursor-pointer"
            >
              About
            </motion.li>
          </Link>
          <Link to="/catalogue">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 font-mediu hover:cursor-pointer"
            >
              Catalogue
            </motion.li>
          </Link>
          <Link to="/services">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 font-mediu hover:cursor-pointer"
            >
              Services
            </motion.li>
          </Link>
          <Link to="/blog">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 font-mediu hover:cursor-pointer"
            >
              Blog
            </motion.li>
          </Link>
          <Link to="/faq">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-1 font-mediu hover:cursor-pointer"
            >
              FAQ
            </motion.li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex gap-3">
        <Link to="/contact">
          <Button>
            <motion.div whileTap={{ scale: 0.9 }}>Contact</motion.div>
          </Button>
        </Link>
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
            <OverLay setIsOpen={setIsOpen} location={location.pathname} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

interface OverLayProps {
  setIsOpen: (isOpen: boolean) => void;
  location: string;
}

const OverLay = ({ setIsOpen, location }: OverLayProps) => {
  return (
    <div id="mobile-menu" className="bg-white h-screen mt-20">
      <button
        className="fixed right-3 top-[6.5rem] bg-black text-white p-2 rounded-full"
        onClick={() => setIsOpen(false)}
      >
        <X className="size-4" />
      </button>
      <ul className="flex flex-col gap-4 justify-center h-full text-xl font-medium px-10">
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/">
            Home
          </Link>
          <span>
            <Home />
          </span>
        </li>
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/about" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/about">
            About
          </Link>
          <span>
            <MessageCircle />
          </span>
        </li>
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/catalogue" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/catalogue">
            Catalogue
          </Link>
          <span>
            <Grid />
          </span>
        </li>
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/services" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/services">
            Services
          </Link>
          <span>
            <Cog />
          </span>
        </li>
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/blog" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/blog">
            Blog
          </Link>
          <span>
            <Notebook />
          </span>
        </li>
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/faq" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/faq">
            FAQ
          </Link>
          <span>
            <FileQuestion />
          </span>
        </li>
        <li
          className={`flex items-center flex-row-reverse justify-end gap-2 ${
            location !== "/contact" ? "text-gray-400" : ""
          }`}
        >
          <Link onClick={() => setIsOpen(false)} to="/contact">
            Contact
          </Link>
          <span>
            <Phone />
          </span>
        </li>
      </ul>
    </div>
  );
};
