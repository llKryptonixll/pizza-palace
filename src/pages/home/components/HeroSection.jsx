import { React } from 'react';
import { motion } from "framer-motion";

const HeroSection = ({isOpenEffect}) => {

    const heroSectionBG_style = "bg-[url('/public/images/hero-section-bg.webp')] bg-cover bg-center";
    const framerMotionWelcomeText = {
        initial: { scale: 0, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        transition: { duration: 0.5 },
        viewport: {once: true}
    }
    const framerMotionSpanText = {
        initial: { rotate: -25, opacity: 0 },
        whileInView: { rotate: 0, opacity: 1 },
        viewport: {once: true}
    }
    const framerMotionMainText = {
        initial: { opacity:0, top: 50 },
        whileInView: { opacity: 1, top: 0 },
        transition: { duration: 1, delay: 0.5 },
        viewport: {once: true}
    }

    return (
        <article className={`${heroSectionBG_style} ${isOpenEffect} h-screen min-h-[600px] grid font-lexend relative duration-500`}>
            <div className='grid items-center lg:pl-[70px] pl-[20px] lg:pr-[70px] pr-[20px]'>
                <div className='text-white sm:text-left text-center'>
                    <motion.p {...framerMotionWelcomeText} className='font-accent sm:text-8xl text-5xl text-accent inline-block'>
                        Welcome to
                    </motion.p>
                    <h1 className='pb-4 sm:text-[7rem] text-5xl'>
                        <motion.span {...framerMotionSpanText} transition={{duration: 0.3, delay: 0.3}} className='text-italyGreen inline-block'>Pi</motion.span>
                        <motion.span {...framerMotionSpanText} transition={{duration: 0.3, delay: 0.6}} className='inline-block'>zz</motion.span>
                        <motion.span {...framerMotionSpanText} transition={{duration: 0.3, delay: 0.9}} className='text-italyRed inline-block'>a&nbsp;</motion.span>
                        <motion.span {...framerMotionSpanText} transition={{duration: 0.3, delay: 1.2}} className='text-italyGreen inline-block'>Pa</motion.span>
                        <motion.span {...framerMotionSpanText} transition={{duration: 0.3, delay: 1.5}} className='inline-block'>la</motion.span>
                        <motion.span {...framerMotionSpanText} transition={{duration: 0.3, delay: 1.8}} className='text-italyRed inline-block'>ce</motion.span>
                    </h1>
                    <motion.p {...framerMotionMainText} className='sm:w-[600px] sm:text-2xl text-xl relative'>
                        Fresh, handcrafted pizza baked to perfection. 
                        Come taste the difference at our cozy joint.
                    </motion.p>
                </div>
            </div>
        </article>        
    )
}

export default HeroSection