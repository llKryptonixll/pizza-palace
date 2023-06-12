import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FoodGrid = () => {

  const containerStyles = "flex flex-col";
  const foodImgStyles = "lg:w-[420px] w-[320px] h-full object-cover";
  const pizzaTextStyles = "flex items-center justify-between p-4 text-dark";
  const pizzaNameStyles = "font-bold text-2xl";
  const pizzaPriceStyles = "text-xl";

  const framerMotionSpanTop = {
    initial: { scale: 0, opacity: 0, left: -300 },
    whileInView: { scale: 1, opacity: 1, left: 0 },
    transition: { duration: 1 },
    viewport: {once: true}
  }
  const framerMotionSpanBottom = {
    initial: { scale: 0, opacity: 0, right: -300 },
    whileInView: { scale: 1, opacity: 1, right: 0 },
    transition: { duration: 1 },
    viewport: {once: true}
  }

  return (
    <section className='grid font-lexend'>
      <div className='h-[500px] bg-[url("/public/images/delicious-banner-bg.webp")] bg-cover bg-center grid items-center justify-center'>
        <p className='grid text-center'>
          <motion.span {...framerMotionSpanTop} className='font-accent text-accent sm:text-7xl text-5xl md:relative'>Amazing</motion.span>
          <motion.span {...framerMotionSpanBottom} className='text-softWhite sm:text-7xl text-5xl md:relative'>DELICIOUS</motion.span>
        </p>
      </div>

      <div className='grid xl:grid-cols-4 gap-4 justify-items-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:pl-[70px] pl-[20px] lg:pr-[70px] pr-[20px] lg:pt-[70px] pt-[20px]'>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-pepperoni.webp" alt="pizza-pepperoni"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Pepperoni</span>
            <span className={pizzaPriceStyles}>$14.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-hawaiian.webp" alt="pizza-hawaiian"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Hawaiian</span>
            <span className={pizzaPriceStyles}>$11.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-mexican.webp" alt="pizza-mexican"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Mexican</span>
            <span className={pizzaPriceStyles}>$13.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-funghi.webp" alt="pizza-funghi"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Funghi</span>
            <span className={pizzaPriceStyles}>$10.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-parma.webp" alt="pizza-parma"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Parma</span>
            <span className={pizzaPriceStyles}>$17.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-special.webp" alt="pizza-special"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Special</span>
            <span className={pizzaPriceStyles}>$17.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-veggie.webp" alt="pizza-veggie"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Veggie</span>
            <span className={pizzaPriceStyles}>$15.9</span>
          </p>
        </div>
        <div className={containerStyles}>
          <img className={foodImgStyles} src="/public/images/pizza-veggie2.webp" alt="pizza-veggie2"/>
          <p className={pizzaTextStyles}>
            <span className={pizzaNameStyles}>Pizza Veggie 2</span>
            <span className={pizzaPriceStyles}>$15.9</span>
          </p>
        </div>
      </div>

      <Link className='border-[1px] border-accent text-lg w-[120px] h-[40px] justify-self-center hover:bg-accent hover:text-softWhite transition-colors mt-8 grid place-items-center' to="/menu">View all</Link>
    </section>
  )
}

export default FoodGrid