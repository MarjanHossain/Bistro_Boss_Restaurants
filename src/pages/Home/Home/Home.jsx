import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            {/* --Banner Section in Home--- */}
            <Banner />
            {/* --Category Section in Home--- */}
            <Category />
            {/* --Category Section in Home--- */}
            <PopularMenu />

        </div>
    );
};

export default Home;