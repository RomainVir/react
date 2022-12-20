import { HomeMenu } from "../../const/HomeMenu";
import { NavBar } from "../Header/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Header/Navbar";
import { Carroussel } from "./components/Carroussel/Carroussel";
import "../../App.css";
import "../Footer/Footer.css";
import "./Header/Header.css";

export default function Layout() {
  return (
    <>
      <NavBar menuItems={HomeMenu} />
      <Header />
      <Carroussel />
      <Outlet />
      <Footer />
    </>
  );
}
