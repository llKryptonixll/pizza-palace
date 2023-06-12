import { React } from 'react'
import HeroSection from './components/HeroSection';
import VisitBanner from './components/VisitBanner';
import FoodGrid from './components/FoodGrid';
import useDomTitleChange from '../../hooks/useDomTitleChange';
import AboutUs from './components/AboutUs';

const Home = ({isOpenEffect}) => {

  useDomTitleChange("Home");

  return (
    <>
      <main className={isOpenEffect}>
        <HeroSection />
        <VisitBanner />
        <FoodGrid />
        <AboutUs />
      </main>
    </>
  )
}

export default Home