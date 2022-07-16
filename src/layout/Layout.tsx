import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
