import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="bg-primary text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 my-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold font-montserrat mb-3">
          Join our weekly newsletter
        </h1>
        <p>
          Stay up to date with the latest news, announcements, and articles.
        </p>
      </div>
      <div className="flex gap-1 bg-white p-1 rounded-lg border w-full md:w-fit">
        <Input
          placeholder="Enter your email"
          className="border-none shadow-none outline-none w-full md:w-80 ring-0 text-black"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default Newsletter;
