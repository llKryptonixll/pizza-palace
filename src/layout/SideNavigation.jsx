import React from 'react';
import { Link } from 'react-router-dom';
import useCurrentLocation from '../hooks/useCurrentLocation';

const SideNavigation = ({isOpen, setIsOpen}) => {

    const { getClassName } = useCurrentLocation();
    const linkHoverStyle = "hover:text-accent transition-colors";

    return (
        <aside onClick={() => setIsOpen(false)} className={`fixed top-0 bg-black w-full h-full overflow-x-hidden duration-500 ${isOpen === true ? "z-40 bg-opacity-80" : "-z-10 bg-opacity-0"}`}>
            <nav className={`text-white bg-dark min-h-[280px] w-[280px] h-full duration-500 absolute grid justify-center ${isOpen === true ? "right-[0]" : "right-[-280px]"}`}>
                <ul className='self-center font-bold text-2xl grid gap-2'>
                    <li className={`${getClassName("/")} ${linkHoverStyle}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`${getClassName("/menu")} ${linkHoverStyle}`}>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className={`${getClassName("/our-chefs")} ${linkHoverStyle}`}>
                        <Link to="/our-chefs">Our Chefs</Link>
                    </li>
                    <li className={`${getClassName("/contact")} ${linkHoverStyle}`}>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>

                <ul className='flex space-x-4 self-end pb-4'>
                    <li>
                        <a aria-label='our-facebook-page' href="#">
                            <img src="/public/icons/facebook.webp" alt="facebook-icon"/>
                        </a>
                    </li>
                    <li>
                        <a aria-label='our-instagram-page' href="#">
                            <img src="/public/icons/instagram.webp" alt="instagram-icon"/>
                        </a>
                    </li>
                    <li>
                        <a aria-label='our-twitter-page' href="#">
                            <img src="/public/icons/twitter.webp" alt="twitter-icon"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideNavigation