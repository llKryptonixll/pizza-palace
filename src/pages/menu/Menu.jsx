import React from 'react';
import HeadBanner from '../../layout/HeadBanner';
import ZitateBanner from './components/ZitateBanner';
import FoodGrid from './components/Food-Grid/FoodGrid';
import useDomTitleChange from '../../hooks/useDomTitleChange';

const Menus = ({isOpenEffect}) => {

  useDomTitleChange("Menu");

  return (
    <main className={isOpenEffect}>
      <HeadBanner 
        image={"/images/pizza-menu-banner.webp"}
        textTop={"Check out"}
        textBottom={"OUR MENUS"}
      />
      <ZitateBanner />
      <FoodGrid />
    </main>
  )
}

export default Menus