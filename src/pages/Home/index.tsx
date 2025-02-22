import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import Collections from "./_components/Collections";
import Announcement from "./_components/Announcement";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

const Home = () => {
  return (
    <div>
      <h1 className="text-[12vw] flex md:justify-between font-semibold uppercase">
        <span>S</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>S</span>
        <span>F</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <p className="lg:w-1/2 text-start leading-relaxed text-gray-600">
          Transforming spaces with elegance and functionality. Explore our
          services, get inspired by our blog, and connect with us to create your
          dream interiors.
        </p>
        <div className="lg:w-1/2 flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-0">
          <div className="flex lg:flex-col items-center justify-between lg:justify-center">
            <h1 className="text-4xl lg:text-6xl font-medium">
              88k<span>+</span>
            </h1>
            <p className="text-2xl">Happy Client</p>
          </div>
          <div className="flex lg:flex-col items-center justify-between lg:justify-center">
            <h1 className="text-4xl lg:text-6xl font-medium">
              98k<span>+</span>
            </h1>
            <p className="text-2xl">Premuim Product</p>
          </div>
          <div className="flex lg:flex-col items-center justify-between lg:justify-center">
            <h1 className="text-4xl lg:text-6xl font-medium">
              868k<span>+</span>
            </h1>
            <p className="text-2xl">Project Finished</p>
          </div>
        </div>
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
