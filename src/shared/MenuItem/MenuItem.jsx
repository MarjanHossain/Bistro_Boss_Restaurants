
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <section className="flex space-x-4">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-medium">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-cyan-400 font-semibold text-xl">${price}</p>
        </section>
    );
};

export default MenuItem;