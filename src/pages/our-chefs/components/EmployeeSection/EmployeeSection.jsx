import React from 'react';
import data from "/public/data/data.json";
import EmployeeItem from './EmployeeItem';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperCustomBullets.css";

const Employee = () => {

    const swiperOptions = {
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
        },
        spaceBetween: 30,
        pagination:{
            clickable: true,
        },
        modules:[Pagination],
        className:"mySwiper h-full cursor-grab pb-12"
    }

    return (
        <section className='lg:pl-[70px] pl-[20px] lg:pr-[70px] pr-[20px] pt-20 h-[600px]'>
            <p className='text-3xl font-bold pb-4'>Kitchen Team</p>
            <Swiper {...swiperOptions}>
                {data.kitchenEmployee.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <EmployeeItem 
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                workPosition={item.workPosition}
                                description={item.description}
                                attributionLink={item.attributionLink}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Employee