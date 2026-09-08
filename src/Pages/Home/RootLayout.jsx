import { NavBarLogin } from "../../Components/utils/NavbarLogin";
import { Footer } from "../../Components/utils/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <NavBarLogin />
      <Outlet />
      <Footer />
    </>
  );
};
