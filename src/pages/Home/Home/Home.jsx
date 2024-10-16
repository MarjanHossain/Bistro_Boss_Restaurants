import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            {/* --Banner Section in Home--- */}
            <Banner />
            {/* --Category Section in Home--- */}
            <Category />
            {/* --Category Section in Home--- */}
            <PopularMenu />
            {/* --Featured Section in Home--- */}
            <Featured />
            {/* --Featured Section in Home--- */}
            <Testimonials />




        </div>
    );
};

export default Home;