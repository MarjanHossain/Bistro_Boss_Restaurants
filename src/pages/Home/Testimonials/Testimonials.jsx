import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from "react-icons/bi";


const Testimonials = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
    return (
        <section className="">
            {/* Heading */}
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={'TESTIMONIALS'}
            />
            {/*------ Details---- */}
            <div className="md:py-10 lg:w-2/3 mx-auto">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    {
                        review.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="lg:px-20 px-4 space-y-3">
                                {/* --Rating-- */}
                                <div className="flex justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                {/* Quotation */}
                                <div className="flex justify-center text-7xl">
                                    <BiSolidQuoteLeft />

                                </div>
                                {/* Details */}
                                <p className="font-sans text-gray-700">{review.details}</p>
                                <h3 className="text-[#D09713] text-2xl font-semibold text-center">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;