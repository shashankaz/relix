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
          <SmallCard />
          <BigCard />
        </div>
        <div className="flex flex-col gap-6">
          <BigCard />
          <SmallCard />
        </div>
        <div className="flex flex-col gap-6">
          <SmallCard />
          <BigCard />
        </div>
      </div>
    </div>
  );
};

export default Collections;

const SmallCard = ({ title = "lorem ipsum" }) => {
  return (
    <div className="h-1/3 bg-black p-5 rounded-3xl flex flex-col justify-end">
      <div className="flex justify-between">
        <h1 className="text-2xl text-white">{title}</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white p-2 rounded-full text-black cursor-pointer"
        >
          <ArrowUpRight />
        </motion.div>
      </div>
    </div>
  );
};

const BigCard = ({ title = "lorem ipsum" }) => {
  return (
    <div className="h-2/3 bg-black p-5 rounded-3xl flex flex-col justify-end">
      <div className="flex justify-between">
        <h1 className="text-2xl text-white">{title}</h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white p-2 rounded-full text-black cursor-pointer"
        >
          <ArrowUpRight />
        </motion.div>
      </div>
    </div>
  );
};
