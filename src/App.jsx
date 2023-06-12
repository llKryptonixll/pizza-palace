import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import OurChefs from "./pages/our-chefs/OurChefs";
import Contact from "./pages/contact/Contact";
import Navbar from "./layout/Navbar";
import TopNavigation from "./layout/TopNavigation";
import SideNavigation from "./layout/SideNavigation";
import Footer from "./layout/Footer"

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const isOpenEffect = `${isOpen === true ? "left-[-280px]" : "left-[0]"} relative duration-500`;

  function openSidebar() {
    setIsOpen(true);
  }

  return (
    <>
      <BrowserRouter>
        <TopNavigation 
          isOpenEffect={isOpenEffect}
        />
        <Navbar 
          setIsOpen={openSidebar}
        />
        <SideNavigation 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Routes>
          <Route index element={<Home isOpenEffect={isOpenEffect}/>} />
          <Route path="menu" element={<Menu isOpenEffect={isOpenEffect} />} />
          <Route path="our-chefs" element={<OurChefs isOpenEffect={isOpenEffect} />} />
          <Route path="contact" element={<Contact isOpenEffect={isOpenEffect} />} />
        </Routes>
        <Footer 
          isOpenEffect={isOpenEffect}
        />
      </BrowserRouter>
    </>
  )
}

export default App