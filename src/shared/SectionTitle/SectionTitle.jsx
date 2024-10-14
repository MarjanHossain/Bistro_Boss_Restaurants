
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <section className="text-center w-4/12 mx-auto my-4 py-4 ">
            <p className="text-yellow-500 text-xl font-sans">---- {subHeading} -------</p>
            <h3 className="text-3xl font-sans uppercase border-y-4 my-4 py-3 font-semibold">{heading}</h3>
        </section>
    );
};

export default SectionTitle;