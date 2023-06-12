import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SaladItem = ({ gridStyles, imageLoader, name, price, image, index }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fadeInFood = {
    initial: { opacity: 0, transform: "scale(0)" },
    whileInView: { opacity: 1, transform: "scale(1)" },
    transition: { duration: index / 4 },
    viewport: { once: true }
  };

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <>     
      <figure className={gridStyles.containerStyles}>
        {!isImageLoaded && (
          imageLoader()
        )} 
        <motion.img
          onLoad={handleImageLoaded}
          className={gridStyles.foodImgStyles}
          src={image}
          alt="pizza-pepperoni"
          style={{ display: isImageLoaded ? 'block' : 'none' }}
          {...fadeInFood}
        />
        <figcaption>
          <p
            className={gridStyles.pizzaTextStyles}
            style={{ display: isImageLoaded ? 'block' : 'none' }}
          >
            <span className={gridStyles.pizzaNameStyles}>{name} </span>
            <span className={gridStyles.pizzaPriceStyles}>{`$${price}`}</span>
          </p>
        </figcaption>     
      </figure>
    </>
  );
};

export default SaladItem;