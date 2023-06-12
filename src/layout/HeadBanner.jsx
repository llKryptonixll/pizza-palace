import React from 'react';
import { motion } from 'framer-motion';

const HeadBanner = ({ image, textTop, textBottom }) => {
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
        <div style={{ backgroundImage: `url(${image})`}} className={`h-[600px] bg-center bg-fixed grid content-center justify-center text-center`}>
            <motion.p {...framerMotionSpanTop} className='text-accent font-accent sm:text-6xl text-5xl md:relative'>{textTop}</motion.p>
            <motion.p {...framerMotionSpanBottom} className='text-softWhite font-lexend sm:text-6xl text-5xl md:relative'>{textBottom}</motion.p>
        </div>
    )
}

export default HeadBanner