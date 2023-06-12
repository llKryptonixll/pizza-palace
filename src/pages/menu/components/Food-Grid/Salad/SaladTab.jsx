import React from 'react';
import SaladItem from './SaladItem';
import data from '/public/data/data.json'

const SaladTab = ({ gridStyles, imageLoader }) => {
  return (
    <div className='grid font-lexend'>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pl-8 pr-8'>
        {
          data.salads.map((salad, index) => {
            return (
              <SaladItem 
                gridStyles={gridStyles}
                imageLoader={imageLoader}
                name={salad.name}
                price={salad.price}
                image={salad.image}
                key={salad.id}
                index={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default SaladTab