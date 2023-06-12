import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import useCurrentLocation from '../hooks/useCurrentLocation';

const Navbar = ({setIsOpen}) => {
  const { getClassName } = useCurrentLocation();
  const linkHoverStyle = "hover:text-accent transition-colors";

  const [reachedTop, setReachedTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setReachedTop(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='font-lexend'>
      <nav className={`flex justify-between fixed lg:pl-[70px] pl-[20px] lg:pr-[70px] z-30 pr-[20px] left-0 w-full text-softWhite items-center duration-500 ${reachedTop === true ? "sm:top-[80px] top-[120px]" : "sm:top-0 top-0 bg-dark h-[100px]"}`}>
        <h1 aria-label='Pizza Palace'>
          <img className='sm:w-auto w-[220px]' src="/public/images/logo.webp" alt="company-logo" />
        </h1>
        <ul className='md:flex hidden space-x-4'>
          <li className={`${linkHoverStyle} ${getClassName('/')}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${linkHoverStyle} ${getClassName('/menu')}`}>
            <Link to="/menu">Menu</Link>
          </li>
          <li className={`${linkHoverStyle} ${getClassName('/our-chefs')}`}>
            <Link to="/our-chefs">Our Chefs</Link>
          </li>
          <li className={`${linkHoverStyle} ${getClassName('/contact')}`}>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

        <button onClick={setIsOpen} className='md:hidden grid gap-1 w-[20px] group'>
          <span className='bg-softWhite w-full h-[3px] group-hover:bg-accent'></span>
          <span className='bg-softWhite w-full h-[3px] group-hover:bg-accent'></span>
        </button>
      </nav>
    </header>
  
  )
}

export default Navbar