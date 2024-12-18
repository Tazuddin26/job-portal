import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

const Mainlayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Mainlayout;
