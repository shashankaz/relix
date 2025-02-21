import { motion } from "motion/react";
import { Dribbble, Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 pb-16 pt-8 border-b">
        <div className="w-full lg:w-2/6">
          <h1 className="text-3xl font-bold">Reactify UI</h1>
          <p className="mt-3">
            Transforming spaces with elegance and functionality. Explore our
            services, get inspired by our blog, and connect with us to create
            your dream interiors.
          </p>
        </div>
        <div className="w-full lg:w-4/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Services</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Interior Design Consultation
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Custom Furniture & Decor
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              3D Design Visualization
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Space Planning
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Home Styling
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Project Management
            </motion.li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Company</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              About us
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Our Team
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Client Testimonials
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Portfolio
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
              Contact Us
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
              Design Trends
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Home Improvement Tips
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Case Studies
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              FAQs
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
              Instagram
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Pinterest
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
              LinkedIn
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              YouTube
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Twitter
            </motion.li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li className="text-sm mb-3 text-gray-700">Legal</li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Terms & Conditions
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Privacy Policy
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Copyright Notice
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Cookie Policy
            </motion.li>
            <motion.li
              whileHover={{ x: 12 }}
              className="hover:underline hover:cursor-pointer"
            >
              Licensing
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
