import { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios, { AxiosError } from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}newsletter/subscribe`,
        {
          email: email,
          src: "Relix ltd",
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        setEmail("");
      }
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error(error.response.data.message);
        } else if (error.response?.status === 500) {
          toast.error("Something went wrong. Please try again later.");
        }
      } else {
        toast.error("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-slate-700 text-white p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 my-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold font-montserrat mb-3">
          Join our weekly newsletter
        </h1>
        <p className="text-sm sm:text-base">
          Stay up to date with the latest news, announcements, and articles.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-1 bg-white p-1 rounded-lg border w-full md:w-fit"
      >
        <Input
          placeholder="Enter your email"
          className="border-none shadow-none outline-none w-full md:w-80 ring-0 text-black text-sm"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
        <Button type="submit" className="bg-slate-700 hover:bg-slate-600">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
