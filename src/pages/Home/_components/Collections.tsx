import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const Collections = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-6xl font-medium capitalize w-1/2">
          Explore our proudly work
        </h1>
      </div>
      <div className="grid grid-cols-3 h-screen gap-6 mt-16">
        <div className="flex flex-col gap-6">
          <SmallCard title="Timeless Aesthetics" imgSrc="/products/1.jpg" />
          <BigCard title="Curated Elegance" imgSrc="/products/2.jpg" />
        </div>
        <div className="flex flex-col gap-6">
          <BigCard title="Elevated Living" imgSrc="/products/3.jpg" />
          <SmallCard title="Designed to Inspire" imgSrc="/products/4.jpg" />
        </div>
        <div className="flex flex-col gap-6">
          <SmallCard title="Modern Harmony" imgSrc="/products/5.jpg" />
          <BigCard title="Sophisticated Spaces" imgSrc="/products/6.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Collections;

interface CardProps {
  title: string;
  imgSrc: string;
}

const SmallCard = ({ title, imgSrc }: CardProps) => {
  return (
    <div className="h-1/3 bg-black p-5 rounded-3xl overflow-hidden flex flex-col justify-end relative">
      <div className="flex justify-between z-10">
        <h1 className="text-2xl text-white">{title}</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-2 rounded-full text-black cursor-pointer"
        >
          <ArrowUpRight />
        </motion.div>
      </div>
      <img
        src={imgSrc}
        alt={title}
        className="h-full w-full object-cover absolute inset-0"
      />
      <div className="h-full w-full bg-black/20 hover:bg-transparent transition-all duration-300 absolute inset-0"></div>
    </div>
  );
};

const BigCard = ({ title, imgSrc }: CardProps) => {
  return (
    <div className="h-2/3 bg-black p-5 rounded-3xl overflow-hidden flex flex-col justify-end relative">
      <div className="flex justify-between z-10">
        <h1 className="text-2xl text-white">{title}</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-2 rounded-full text-black cursor-pointer"
        >
          <ArrowUpRight />
        </motion.div>
      </div>
      <img
        src={imgSrc}
        alt={title}
        className="h-full w-full object-cover absolute inset-0"
      />
      <div className="h-full w-full bg-black/20 hover:bg-transparent transition-all duration-300 absolute inset-0"></div>
    </div>
  );
};
