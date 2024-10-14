import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section className="bg-white lg:py-5 mx-10">
            {/*//?-------- section  Heading ----------------*/}
            <SectionTitle
                subHeading={"From 11.00 am to 12 pm"}
                heading={"order online"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='uppercase text-4xl text-white text-opacity-70 -mt-16 text-center'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" /> <h3 className='uppercase text-4xl text-white text-opacity-70 -mt-16 text-center'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='uppercase text-4xl text-white text-opacity-70 -mt-10 text-center'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='uppercase text-4xl text-white text-opacity-70 -mt-16 text-center'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='uppercase text-4xl text-white text-opacity-70 -mt-16 text-center'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;