import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import BoafoWidgetInitializer from "../BoafoWidgetInitializer";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <BoafoWidgetInitializer />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
