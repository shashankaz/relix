import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "@/layout/MainLayout.tsx";
import { Toaster } from "@/components/ui/toaster";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Catalogue = lazy(() => import("@/pages/Catalogue"));
const Services = lazy(() => import("@/pages/Services"));
const Blog = lazy(() => import("@/pages/Blog"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));

const App = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
