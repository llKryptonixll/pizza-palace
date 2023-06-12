import React from 'react';
import PastaItem from './PastaItem';
import data from '/public/data/data.json'

const PastaTab = ({ gridStyles, imageLoader }) => {
  return (
    <div className='grid font-lexend'>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {
          data.pasta.map((pasta, index) => {
            return (
              <PastaItem 
                gridStyles={gridStyles}
                imageLoader={imageLoader}
                name={pasta.name}
                price={pasta.price}
                image={pasta.image}
                key={pasta.id}
                index={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default PastaTab