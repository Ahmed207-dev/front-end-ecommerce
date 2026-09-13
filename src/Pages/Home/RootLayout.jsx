import { NavBarLogin } from "../../Components/utils/NavbarLogin";
import { Footer } from "../../Components/utils/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../Components/utils/ScrollToTop";

export const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarLogin />
      <Outlet />
      <Footer />
    </>
  );
};
