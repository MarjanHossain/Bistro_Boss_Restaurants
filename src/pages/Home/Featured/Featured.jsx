import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <section className=" md:my-20 bg-fixed  featured-item text-white ">
            {/* Heading */}

            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}
            />
            {/*-- Details-- */}
            <div className="flex items-center py-8 px-16 bg-black bg-opacity-40 ">
                {/* image */}
                <div >
                    <img className="px-10" src={featuredImg} alt="" />
                </div>
                {/* text */}
                <div >
                    <div className="space-y-1">
                        <h3 className="text-xl font-sans ">March 20, 2023</h3>
                        <h2 className="text-xl font-xl uppercase">WHERE CAN I GET SOME?</h2>
                        <p className="text-lg font-sans">   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                    </div>
                    <div className="mt-5 ">
                        <button className="btn btn-outline border-purple-600 hover:bg-purple-600 hover:text-white text-white text-xl border-0 border-b-4 ">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;