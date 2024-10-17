import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <section>
            <div className="navbar bg-base-100 fixed z-10 bg-opacity-35 text-white lg:px-5 px-1 flex justify-between">
                {/* logo */}
                <div>
                    <h1 className="text-green-700 text-4xl font-extrabold">BistroBoss</h1>
                </div>

                <div className="navbar-center hidden lg:flex ps-20 font-sans text-xl font-semibold hover">
                    <ul className="flex gap-10 ">
                        <li ><Link to='/'>Home</Link></li>
                        <li><Link to='menu'>Menu</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;