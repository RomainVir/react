import { HomeMenu } from "../../const/HomeMenu";
import { NavBar } from "../Header/Navbar";

export default function Layout(){
    return (
        <>
        <NavBar menuItems={HomeMenu}/>
        <Outlet />
        <h2>Footer</h2>
        </>
    )
}