import React from 'react';
import FishItem from './FishItem';
import data from '/public/data/data.json'

const FishTab = ({ gridStyles, imageLoader }) => {
  return (
    <div className='grid font-lexend'>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {
          data.fish.map((fish, index) => {
            return (
              <FishItem 
                gridStyles={gridStyles}
                imageLoader={imageLoader}
                name={fish.name}
                price={fish.price}
                image={fish.image}
                key={fish.id}
                index={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default FishTab