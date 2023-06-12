import React from 'react';
import data from "/public/data/data.json";
import PizzaItem from './PizzaItem';

const PizzaTab = ({gridStyles, imageLoader}) => {
  return (
      <div className='grid font-lexend'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {
            data.pizzas.map((pizza, index) => {
              return (
                <PizzaItem 
                  gridStyles={gridStyles}
                  imageLoader={imageLoader}
                  name={pizza.name}
                  price={pizza.price}
                  image={pizza.image}
                  key={pizza.id}
                  index={index}
                />
              )
            })
          }
        </div>
      </div>
  )
}

export default PizzaTab