import React from 'react';
import HeadBanner from '../../layout/HeadBanner';
import ChefSection from './components/ChefSection';
import EmployeeSection from './components/EmployeeSection/EmployeeSection';
import useDomTitleChange from '../../hooks/useDomTitleChange';

const OurChefs = ({ isOpenEffect }) => {
  
  useDomTitleChange("Our Chefs")
  
  return (
    <main className={`font-lexend ${isOpenEffect}`}>
      <HeadBanner 
        image={"/images/our-chefs-banner.webp"}
        textTop={"Meet"}
        textBottom={"OUR CHEFS"}
      />
      <ChefSection />
      <EmployeeSection />
    </main>
  )
}

export default OurChefs