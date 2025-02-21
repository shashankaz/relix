import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router";

import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const MainLayout = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Fragment>
      <div className="px-4 sm:px-8 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Outlet />
          <Newsletter />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
};

export default MainLayout;
