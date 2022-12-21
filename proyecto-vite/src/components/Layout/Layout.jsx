import { HomeMenu } from "../../const/HomeMenu.js";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Header/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar menuItems={HomeMenu} />
      <Outlet />
      <Footer />
    </>
  );
}
