import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'


const Menu = () => {
    return (

        <section>
            <Helmet>
                <title>Bistro Boss  | menu</title>
            </Helmet>
            {/* ------------------------ */}
            <Cover img={menuImg} title={"our menu"} />
        </section>
    );
};

export default Menu;