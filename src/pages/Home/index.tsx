import { ArrowUpRight } from "lucide-react";

import Collections from "./_components/Collections";
import Announcement from "./_components/Announcement";
import Services from "./_components/Services";

const Home = () => {
  return (
    <div>
      <h1 className="text-[12vw] flex justify-between font-semibold uppercase">
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
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <p className="md:w-1/2 text-center md:text-start leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum
          quaerat blanditiis quam deleniti quas dolore delectus maiores aliquam
          architecto!
        </p>
        <div className="md:w-1/2 flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
          <div className="flex md:flex-col items-center justify-between md:justify-center">
            <h1 className="text-5xl md:text-6xl font-medium">
              88k<span>+</span>
            </h1>
            <p className="text-2xl">Happy Client</p>
          </div>
          <div className="flex md:flex-col items-center justify-between md:justify-center">
            <h1 className="text-5xl md:text-6xl font-medium">
              98k<span>+</span>
            </h1>
            <p className="text-2xl">Premuim Product</p>
          </div>
          <div className="flex md:flex-col items-center justify-between md:justify-center">
            <h1 className="text-5xl md:text-6xl font-medium">
              868k<span>+</span>
            </h1>
            <p className="text-2xl">Project Finished</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between h-[70vh] mt-8 gap-2">
        <div className="md:w-4/5 h-full rounded-3xl flex flex-col md:flex-row gap-2">
          <div className="md:w-1/4 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 bg-black rounded-3xl"></div>
            <div className="w-full h-1/2 bg-black rounded-3xl"></div>
          </div>
          <div className="md:w-3/4 h-full bg-black rounded-3xl"></div>
        </div>
        {/* <div className="w-4/5 h-full bg-black rounded-3xl flex">
          <div className="w-1/4 h-1/2 rounded-3xl bg-black border-r-8 border-b-8 border-white"></div>
          <div className="size-10 bg-white rounded-tl-3xl"></div>
        </div> */}
        <div className="md:w-1/5 h-full flex flex-col gap-2">
          <div className="h-1/2 bg-black rounded-3xl"></div>
          <div className="h-1/2 bg-black rounded-3xl flex items-center justify-center">
            <ArrowUpRight className="text-white size-[15vw]" strokeWidth={1} />
          </div>
        </div>
      </div>
      <Services />
      <Announcement />
      <Collections />
    </div>
  );
};

export default Home;
