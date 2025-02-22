import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative px-4 sm:px-8 md:px-16 py-4 sm:py-8 md:py-16 mt-10">
      <div className="z-10 bg-white rounded-xl px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 pb-16 pt-8 border-b">
          <div className="w-full lg:w-2/6">
            <h1 className="text-3xl font-bold font-comfortaa">Relix</h1>
            <p className="mt-3">
              Transforming spaces with elegance and functionality. Explore our
              services, get inspired by our blog, and connect with us to create
              your dream interiors.
            </p>
          </div>
          <div className="w-full lg:w-4/6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ul className="space-y-2 font-medium">
              <li className="text-sm mb-3 text-gray-700">Services</li>
              <motion.li
                whileHover={{ x: 12 }}
                className="hover:underline hover:cursor-pointer"
              >
                Interior Design
              </motion.li>
              <motion.li
                whileHover={{ x: 12 }}
                className="hover:underline hover:cursor-pointer"
              >
                Custom Furniture
              </motion.li>
              <motion.li
                whileHover={{ x: 12 }}
                className="hover:underline hover:cursor-pointer"
              >
                3D Visualization
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
                Project Management
              </motion.li>
            </ul>

            <ul className="space-y-2 font-medium">
              <li className="text-sm mb-3 text-gray-700">Company</li>
              <motion.li
                whileHover={{ x: 12 }}
                className="hover:underline hover:cursor-pointer"
              >
                About Us
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
                Testimonials
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
                Design Trends
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
                Twitter
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
            </ul>
          </div>
        </div>
        <div className="min-h-20 py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm font-light text-center sm:text-left">
            &copy;2025 Relix. All rights reserved.
          </p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <motion.div whileHover={{ y: -3 }}>
              <Instagram
                strokeWidth="1.2"
                className="h-5 md:h-6 w-5 md:w-6 text-gray-400 hover:cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Twitter
                strokeWidth="1.2"
                className="h-5 md:h-6 w-5 md:w-6 text-gray-400 hover:cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Linkedin
                strokeWidth="1.2"
                className="h-5 md:h-6 w-5 md:w-6 text-gray-400 hover:cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <Youtube
                strokeWidth="1.2"
                className="h-5 md:h-6 w-5 md:w-6 text-gray-400 hover:cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-cover.jpg"
          alt="Footer Cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 -z-10"></div>
    </div>
  );
};

export default Footer;
