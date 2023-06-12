import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VisitBanner = () => {

  const cardStyles = "lg:w-[400px] w-[100%] bg-center bg-cover rounded-lg";
  const framerMotionLeftCard = {
    initial: { left: -200, opacity: 0, rotate: -25 },
    whileInView: { left: 0, opacity: 1, rotate: 0 },
    transition: { duration: 1.5 },
    viewport: {once: true}
  }
  const framerMotionMiddleCard = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.5},
    viewport: {once: true}
  }
  const framerMotionRightCard = {
    initial: { right: -200, opacity: 0, rotate: 25 },
    whileInView: { right: 0, opacity: 1, rotate: 0 },
    transition: { duration: 1.5 },
    viewport: {once: true}
  }


  return (
    <section className='font-lexend lg:h-[650px] relative lg:flex grid gap-12 items-center lg:justify-center lg:p-0 sm:p-12 p-6'>
      <motion.div {...framerMotionLeftCard} className={`${cardStyles} lg:h-[500px] h-[400px] bg-[url("/public/images/visit-our-table-image1.webp")] lg:mr-[10%] relative`}></motion.div>
      <motion.div {...framerMotionMiddleCard} className={`${cardStyles} absolute justify-self-center bg-softWhite lg:w-[350px] sm:w-[70%] w-[83%] lg:h-[440px] h-[400px] shadow-2xl z-20 grid justify-items-center items-center pl-6 pr-6`}>
        <motion.div className='grid gap-4 justify-items-center text-center'>
          <p className='grid'>
            <span className='font-accent text-accent text-5xl'>Visit Our</span>
            <span className='font-bold text-dark text-4xl'>RESTAURANT</span>
          </p>
          <img src="/icons/salami-pizza.webp" alt="pizza-icon" />
          <p className='text-dark'>
            Come savor our handcrafted pizza in a cozy atmosphere. 
            We can't wait to welcome you and serve you the best pizza in town.
          </p>
        </motion.div>

        <Link className='text-accent underline text-xl' to="/contact">Contact us</Link>
      </motion.div>
      <motion.div {...framerMotionRightCard} className={`${cardStyles} lg:h-[500px] h-[400px] bg-[url("/public/images/visit-our-table-image2.webp")] z-10 relative`}></motion.div>
    </section>
  )
}

export default VisitBanner