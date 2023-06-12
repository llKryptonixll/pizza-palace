import React from 'react'

const TopNavigation = ({isOpenEffect}) => {
  return (
    <nav className={`${isOpenEffect} font-lexend sm:h-[50px] h-[100px] w-full bg-accent flex lg:justify-between justify-center lg:pl-[70px] pl-[20px] lg:pr-[70px] pr-[20px] sm:text-base text-xs`}>
        <div className='text-softWhite sm:flex grid sm:gap-0 gap-2 justify-items-center sm:space-x-4 sm:items-center content-center'>
            <p className='flex items-center space-x-1'>
            <img src="/icons/location.webp" alt="location-dot" />
            <span>20095 Hamburg Altstadt, Hermannstraße 5</span>
            </p>
            <p className='flex items-center space-x-1'>
            <img src="/icons/phone.webp" alt="phone-icon" />
            <span>+49(323)541-97-40</span>
            </p>
        </div>

        <div className='lg:flex hidden space-x-4 items-center'>
            <a href="#" aria-label='our-facebook-page'>
            <img src="/icons/facebook.webp" alt="facebook-icon" />
            </a>
            <a href="#" aria-label='our-instagram-page'>
            <img src="/icons/instagram.webp" alt="instagram-icon" />
            </a>
            <a href="#" aria-label='our-twitter-page'>
            <img src="/icons/twitter.webp" alt="twitter-icon" />
            </a>
        </div>
    </nav>
  )
}

export default TopNavigation