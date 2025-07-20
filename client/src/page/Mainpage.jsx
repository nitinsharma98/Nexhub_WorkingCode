import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Mainpage = ({setTheme , theme}) => {

    return (
        <>
        <Navbar setTheme={setTheme} theme={theme} />
        <div className="mainpage">
            <Outlet/>
        </div>
        </>
    )
}

export default Mainpage;