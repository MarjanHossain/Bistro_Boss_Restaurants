import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <section className="my-20 ">
            {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-2 gap-10 my-20 mx-10 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            {/* button */}
            <div className=" my-5 flex justify-center">
                <Link to={`/order/${title}`}>
                    <button className="button">Order Now</button>
                </Link>

            </div>
        </section>
    );
};

export default MenuCategory;