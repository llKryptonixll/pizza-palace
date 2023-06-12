import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {

    const framerMotionSpanBottom = {
        initial: {
          opacity: 0,
          transform: "translateX(-200px)",
        },
        whileInView: {
          opacity: 1,
          transform: "translateX(0)",
        },
        transition: { duration: 1 },
        viewport: { once: true }
    };

    const framerMotionText1= {
        initial: {
          opacity: 0,
          transform: "translateY(-50px)",
        },
        whileInView: {
          opacity: 1,
          transform: "translateY(0)",
        },
        viewport: { once: true }
    };
      

    return (
        <section className='grid lg:grid-cols-2 lg:gap-0 gap-12 place-items-center pt-[50px]'>
            <motion.figure {...framerMotionSpanBottom} className='relative'>
                <img className='object-cover w-full h-auto' src="/images/about_us_illustration.webp" alt="About Us Illustration" />
            </motion.figure>
            <article className='text-center grid gap-4 lg:pr-[70px] lg:pl-0 pl-[20px] pr-[20px]'>
                <div className='grid gap-2 font-accent text-2xl'>
                    <motion.p {...framerMotionText1} transition={{ duration: 0.5 }} className='text-5xl font-bold text-accent relative'>Our Story</motion.p>
                    <motion.p {...framerMotionText1} transition={{ duration: 1 }} className='text-softDark relative'>We passionately serving you the best pizza.</motion.p>
                </div>
                <motion.p {...framerMotionText1} transition={{ duration: 1.5 }} className='relative'>
                    For us, running a restaurant is not solely about making money; it is fueled by our love and passion for what we do. 
                    Our ultimate goal is to craft the finest pizza experience exclusively for you. We pour our heart and soul into every slice, meticulously selecting the freshest ingredients and perfecting our recipes to ensure each bite is a taste sensation that lingers in your memory. 
                    Your satisfaction is our driving force, motivating us to constantly innovate and deliver an exceptional culinary journey with every visit.
                </motion.p>
            </article>
        </section>
    )
}

export default AboutUs