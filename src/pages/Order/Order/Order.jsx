import Cover from "../../../shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const Order = () => {
    const categories = ['salad', "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(category)
    const [menu] = useMenu();
    const drink = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <section>
            <Helmet>
                <title>Bistro Boss  | Order</title>
            </Helmet>
            <Cover img={coverImg} title={'Order Now'} />
            {/* Tabs */}
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    {/* --Salad---- */}
                    <TabPanel>
                        <OrderTab items={salad} />
                    </TabPanel>
                    {/* --pizza---- */}
                    <TabPanel>
                        <OrderTab items={pizza} />
                    </TabPanel>
                    {/* --soup---- */}
                    <TabPanel>
                        <OrderTab items={soup} />
                    </TabPanel>
                    {/* --dessert---- */}
                    <TabPanel>
                        <OrderTab items={dessert} />
                    </TabPanel>
                    {/* --drink---- */}
                    <TabPanel>
                        <OrderTab items={drink} />
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Order;