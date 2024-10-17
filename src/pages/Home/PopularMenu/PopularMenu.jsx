import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { useEffect, useState, } from 'react';

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         }
    //         )
    // }, [])
    return (
        <section className="mx-20">
            {/* //? -----Heading--------- */}
            <SectionTitle subHeading={'Check it out'} heading={'from our menu'} />

            {/* //?=======Popular Menu======== */}
            <div className="grid grid-cols-2 gap-10 my-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            {/* Button */}
            <div className="flex justify-center">
                <button className="btn btn-outline border-purple-600 hover:bg-purple-600 hover:text-white text-black text-xl border-0 border-b-4  "> View Full Menu</button>
            </div>


        </section>
    );
};

export default PopularMenu;