import React from 'react';
import { motion } from 'framer-motion';

const EmployeeItem = ({id, name, img, workPosition, description, attributionLink}) => {

    const framerMotionKitchenTeam = {
        initial: { top: 100, opacity: 0 },
        whileInView: { top: 0, opacity: 1 },
        transition: { duration: id/4 <= 1 ? id/4 : 1 },
        viewport: {once: true}
    }
    
    return (
        <motion.div {...framerMotionKitchenTeam} className='grid grid-rows-4 h-full relative'>
            <div className='row-span-4 relative'>
                <img className='h-full w-full rounded-lg' src={img} alt={name} />
                {attributionLink === undefined ? "" : 
                    <a className='absolute bottom-0 rounded-bl-lg bg-softDark h-[30px] grid place-items-center pl-4 pr-4 text-softWhite' href={attributionLink}>Image by Freepik</a>
                }
            </div>
            <p className='text-lightGray tracking-widest text-sm pt-4'>{workPosition}</p>
            <p className='grid content-center gap-2'>
                <span className='text-softDark font-bold text-2xl'>{name}</span>
                <span className=' text-gray-600 text-[0.9rem]'>
                    {description}
                </span>
            </p>
        </motion.div>
    )
}

export default EmployeeItem