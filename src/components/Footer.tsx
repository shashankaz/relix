import { motion } from "motion/react";
import { Dribbble, Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 pb-16 pt-8 border-b">
        <div className="w-full lg:w-2/6">
          <h1 className="text-3xl font-bold">Reactify UI</h1>
          <p className="mt-3">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div className="w-full lg:w-4/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Product</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Overview
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Features
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Solutions
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Tutorials
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Pricing
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Releases
            </motion.li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Company</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              About us{" "}
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Careers
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Press
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              News
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Media kit
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Contact
            </motion.li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Resources</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Blog
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Newsletter
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Events
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Help center
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Tutorials
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Support
            </motion.li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Social</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Twitter
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Linkedin
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Facebook
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              GitHub
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              AngelList
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Dribbble
            </motion.li>
          </ul>
          <ul className="space-y-2 font-medium">
            <motion.li
              whileHover={{ x: 12 }}
              className="text-sm mb-3 text-gray-700"
            >
              Legal
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Terms
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Privacy
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Cookies
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Licenses
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Settings
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Contact
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="min-h-20 py-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm font-light text-center sm:text-left">
          &copy;2025 Untitled. All rights reserved.
        </p>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <motion.div whileHover={{ y: -3 }} className="border rounded-md p-1">
            <Twitter
              strokeWidth="1.2"
              className="h-5 md:h-6 w-5 md:w-6 text-gray-400"
            />
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="border rounded-md p-1">
            <Linkedin
              strokeWidth="1.2"
              className="h-5 md:h-6 w-5 md:w-6 text-gray-400"
            />
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="border rounded-md p-1">
            <Facebook
              strokeWidth="1.2"
              className="h-5 md:h-6 w-5 md:w-6 text-gray-400"
            />
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="border rounded-md p-1">
            <Github
              strokeWidth="1.2"
              className="h-5 md:h-6 w-5 md:w-6 text-gray-400"
            />
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="border rounded-md p-1">
            <Dribbble
              strokeWidth="1.2"
              className="h-5 md:h-6 w-5 md:w-6 text-gray-400"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
