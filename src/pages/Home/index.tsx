import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

import Collections from "./_components/Collections";
import Announcement from "./_components/Announcement";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="md:pt-10">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase w-fit">
        Inspired Living
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6">
        <p className="lg:w-1/2 text-lg md:text-xl text-gray-700 leading-relaxed">
          Transform your spaces with elegance and functionality. Explore our
          services, get inspired by our designs, and create your dream interiors
          today!
        </p>
        <div className="flex items-center gap-4">
          <Link to="/contact">
            <Button>
              <motion.div whileTap={{ scale: 0.9 }}>Get Started</motion.div>
            </Button>
          </Link>
          <Link to="/catalogue">
            <Button variant="outline">
              <motion.div whileTap={{ scale: 0.9 }}>View Catalogue</motion.div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-10 md:my-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { number: "88k+", label: "Happy Clients" },
          { number: "98k+", label: "Premium Products" },
          { number: "868k+", label: "Projects Completed" },
          { number: "150k+", label: "Design Consultations" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {stat.number}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between md:h-[70vh] mt-8 gap-2">
        <div className="md:w-4/5 h-full rounded-3xl flex flex-col md:flex-row gap-2">
          <div className="md:w-1/4 h-full flex flex-row md:flex-col gap-2">
            <div className="w-full h-48 md:h-1/2 bg-black rounded-3xl grid place-content-center">
              <h4 className="text-white text-3xl md:text-4xl font-extralight text-center">
                Style. <br /> Elegance. <br /> Space.
              </h4>
            </div>
            <div className="w-full h-48 md:h-1/2 bg-black rounded-3xl overflow-hidden">
              <img
                src="/product1.jpg"
                alt="Product 1"
                className="h-full w-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          <div className="md:w-3/4 h-48 md:h-full bg-black overflow-hidden rounded-3xl">
            <img
              src="/product2.jpg"
              alt="Product 2"
              className="h-full w-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
        <div className="md:w-1/5 h-full flex flex-row md:flex-col gap-2">
          <div className="h-48 w-1/2 md:w-full md:h-1/2 bg-black overflow-hidden rounded-3xl">
            <img
              src="/product3.jpg"
              alt="Product 3"
              className="h-full w-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="h-48 w-1/2 md:w-full md:h-1/2 bg-black rounded-3xl flex items-center justify-center">
            <Link to="/catalogue">
              <ArrowUpRight
                className="text-white size-[10rem] md:size-[13rem] hover:scale-110 transition-all duration-300"
                strokeWidth={1}
              />
            </Link>
          </div>
        </div>
      </div>
      <Services />
      <Announcement />
      <Collections />
      <Testimonials />
    </div>
  );
};

export default Home;
