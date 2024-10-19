import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from './../MenuCategory/MenuCategory';
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (

        <section>
            <Helmet>
                <title>Bistro Boss  | menu</title>
            </Helmet>
            {/* ----------Menu-------------- */}
            <Cover img={menuImg} title={"our menu"} />
            {/* //?-----Offered---------- */}
            {/* Heading */}
            <SectionTitle subHeading={"Don't Miss"} heading={'todays offer'} />
            {/* details */}
            <MenuCategory items={offered} />

            {/* //? -----Dessert----------- */}
            <MenuCategory items={dessert} img={dessertBg} title={'Desserts'} />
            {/* //? -----Pizza----------- */}
            <MenuCategory items={pizza} img={pizzaBg} title={'pizza'} />

            {/* //? -----salad----------- */}
            <MenuCategory items={salad} img={saladBg} title={'Salads'} />

            {/* //? -----Soup----------- */}
            <MenuCategory items={soup} img={soupBg} title={'Soups'} />



        </section >
    );
};

export default Menu;