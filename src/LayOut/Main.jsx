import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLogin = location.pathname.includes('login');
    return (
        <section className="l">
            {isLogin || <Navbar />}
            <Outlet />
            {isLogin || <Footer />}
        </section>
    );
};

export default Main;