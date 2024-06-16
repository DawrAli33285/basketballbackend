import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="max-w-[1000px] mx-auto px-3 lg:px-0">
        {!(pathname === "/login" || pathname === "/sign-up") && <Navbar />}
        <Outlet />
      </div>

      {!(pathname === "/login" || pathname === "/sign-up") && <Footer />}
    </div>
  );
};

export default Layout;
