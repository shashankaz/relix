import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      <h1 className="text-[13vw] text-center tracking-tighter font-semibold uppercase">
        Satisfaction
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
      <div className="h-[30vh] mt-8 bg-[url('https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg')] bg-cover bg-center bg-fixed flex items-center overflow-hidden">
        <h1></h1>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
