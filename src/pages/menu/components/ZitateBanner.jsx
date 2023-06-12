import { React } from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

const ZitateBanner = () => {

    const framerMotionSpanTop = {
        initial: { scale: 0, opacity: 0, top: -300 },
        whileInView: { scale: 1, opacity: 1, top: 0 },
        transition: { duration: 1 },
        viewport: {once: true}
    }

    return (
        <section className='grid content-center justify-center text-center bg-softWhite gap-8 lg:h-[350px] h-[450px]'>
            <div className='font-lexend grid justify-items-center gap-2 relative'>
                <motion.p {...framerMotionSpanTop} className='lg:w-[800px] w-[95%] text-4xl'>
                    You can't buy happiness, but you can buy pizza, and that's pretty close.
                </motion.p>
                <motion.p {...framerMotionSpanTop} className='text-sm'>
                    OUR FOUNDER MARCO ROSSIE
                </motion.p>
            </div>
            <p className='font-accent text-2xl text-accent font-bold'>
                <Typed
                    strings={['MARCO ROSSIE']}
                    typeSpeed={150}
                />
            </p>
        </section>
    )
}

export default ZitateBanner