import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
    return (
        <section className="">
            <Navbar />

            <Outlet />
            <Footer />
        </section>
    );
};

export default Main;