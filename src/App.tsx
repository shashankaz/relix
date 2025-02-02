import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "@/layout/MainLayout.tsx";
import { Toaster } from "@/components/ui/toaster";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));

const App = () => {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
