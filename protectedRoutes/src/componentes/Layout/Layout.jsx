import { Outlet } from "react-router-dom";
import Header from "../Header/HEader";
export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
