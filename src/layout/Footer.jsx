import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({isOpenEffect}) => {
    return (
        <footer className={`${isOpenEffect} font-lexend bg-softDark lg:h-[450px] sm:h-[600px] h-[900px] grid items-center sm:grid-rows-[85%_15%] grid-rows-[90%_10%] text-softWhite mt-32`}>
            <div className='lg:flex grid gap-16 sm:space-x-16 items-center justify-center'>
                <div className='grid gap-10 justify-center'>
                    <img src="/images/logo.webp" alt="company-logo" />
                    <div className='flex justify-center space-x-4'>
                        <a aria-label='our-facebook-page' href="#">
                            <img src="/icons/facebook.webp" alt="facebook-icon"/>
                        </a>
                        <a aria-label='our-instagram-page' href="#">
                            <img src="/icons/instagram.webp" alt="instagram-icon"/>
                        </a>
                        <a aria-label='our-twitter-page' href="#">
                            <img src="/icons/twitter.webp" alt="twitter-icon"/>
                        </a>
                    </div>
                </div>

                <div className='sm:flex grid gap-8 justify-center sm:space-x-16 sm:text-left text-center'>
                    <div className='space-y-4'>
                        <p>OVERVIEW</p>
                        <div className='grid gap-2'>
                            <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/our-chefs">Our Chefs</Link>
                            <Link to="/contact">Contact us</Link>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <p>RESOURCES</p>
                        <div className='grid gap-2'>
                            <a href='#'>Help Center</a>
                            <a href='#'>Terms of use</a>
                            <a href='#'>Privacy Policy</a>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <p>LOCATION</p>
                        <p className='grid'>
                            <span>20095 Hamburg Altstadt,</span>
                            <span>Hermannstraße 5</span>
                        </p>
                    </div>
                </div>
            </div>
            <p className='bg-dark flex items-center justify-center border-t-[1px] h-full'>© Copyright Pizza Palace </p>
        </footer>
    )
}

export default Footer