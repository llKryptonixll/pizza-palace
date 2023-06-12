import React, { useState } from 'react';
import PizzaTab from './Pizza/PizzaTab';
import SaladTab from './Salad/SaladTab';
import PastaTab from './Pasta/PastaTab';
import FishTab from './Fish/FishTab';

const FoodGrid = () => {
  const gridStyles = {
    containerStyles: "grid grid-rows-1 h-[500px]",
    foodImgStyles: "w-full h-full object-cover",
    pizzaTextStyles: "flex items-center justify-between p-4 text-dark",
    pizzaNameStyles: "font-bold text-2xl",
    pizzaPriceStyles: "text-xl"
  };

  const buttonStyles = "flex space-x-1 text-softDark items-center justify-center border-[1px] border-accent w-[100px] h-[40px] rounded-md duration-[250ms] hover:tracking-[1px] focus:bg-[#FFEACD] focus:outline-none";

  const [tab, setTab] = useState("pizza");

  function switchTab(tab) {
    setTab(tab);
  }

  const imageLoader = () => {
    return (
      <div className="h-[450px] grid grid-rows-1 items-center justify-items-center">
        <span className="border-[5px] w-12 h-12 rounded-full border-softDark border-b-accent animate-spin"></span>
      </div>
    );
  };

  const RenderTab = () => {
    switch (tab) {
      case "pizza":
        return <PizzaTab gridStyles={gridStyles} imageLoader={imageLoader} />;
      case "salad":
        return <SaladTab gridStyles={gridStyles} imageLoader={imageLoader} />;
      case "pasta":
        return <PastaTab gridStyles={gridStyles} imageLoader={imageLoader} />;
      case "fish":
        return <FishTab gridStyles={gridStyles} imageLoader={imageLoader} />;
      default:
        return null;
    }
  };

  return (
    <section className="font-lexend text-softDark">
      <nav className="md:space-x-4 min-h-[100px] md:flex grid sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 pt-4 pb-4 items-center md:pl-8">
        <button autoFocus className={buttonStyles} onClick={() => switchTab("pizza")}>
          <span>Pizza</span>
          <img src="/public/icons/pizza2.webp" alt="pizza-icon" />
        </button>
        <button className={buttonStyles} onClick={() => switchTab("salad")}>
          <span>Salad</span>
          <img src="/public/icons/salad.webp" alt="salad-icon" />
        </button>
        <button className={buttonStyles} onClick={() => switchTab("pasta")}>
          <span>Pasta</span>
          <img src="/public/icons/pasta.webp" alt="pasta-icon" />
        </button>
        <button className={buttonStyles} onClick={() => switchTab("fish")}>
          <span>Fish</span>
          <img src="/public/icons/fish.webp" alt="fish-icon" />
        </button>
      </nav>

      <RenderTab />
    </section>
  );
};

export default FoodGrid;