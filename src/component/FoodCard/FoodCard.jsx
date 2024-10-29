import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="card glass w-96 relative">
            <figure>
                <img
                    className="w-full"
                    src={image}
                    alt="car!" />
                <p className="bg-black text-xl text-white font-bold absolute right-5 px-3 py-2 top-5 ">${price}</p>
            </figure>
            <div className="card-body bg-lime-400 ">
                <h2 className="card-title text-xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <Link className="w-full">
                        <button className=" w-full button text-white">Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;