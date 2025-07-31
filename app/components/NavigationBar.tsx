
import { Link } from '@remix-run/react';
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';


const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    maxHeight: isMenuOpen ? 400 : 0,
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (isMenuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Attach click event listener to handle clicks outside the menu
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed bg-black z-10 w-screen ">
      <div className=" mx-[8rem]  px-2 ">
      <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
            <div className="flex  flex-shrink-0 items-center mt-2">
              {/* <img className="object-contain h-3 w-auto" src={logoImage} alt="Your Company" /> */}
              <p className='text-white'>XFOLIO</p>
            </div>
       
            <div className="hidden  sm:mt-2  sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="hover:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:text-white" aria-current="page">Home</Link>
                <Link to="/service" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Services</Link>
                <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link>
                <Link to="/blog" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                <Link to="/contact" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link>
              </div>
            </div>

            <button className="mt-4 text-[0.8rem] sm:text-sm bg-white hover:bg-blue-700 ml-[20rem] text-black font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            Let's Talk
        
          </button>
          </div>
        <div className="relative flex h-16 hidden items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex mr-4 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                aria-hidden="true"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                aria-hidden="true"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <animated.div className={`bg-white/50 backdrop-blur-md mt-6 right-4 rounded-lg absolute sm:hidden`} ref={dropdownRef} style={menuAnimation}>
          <div className="space-y-1 pl-2 pr-40 pb-3 pt-2">
            <Link to="/" className="text-white hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Services</Link>
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About us</Link>
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Blog</Link>
            <Link to="/" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact us</Link>
          </div>
        </animated.div>
        </div>
     
      </div>
    </nav>
  );
};

export default NavigationBar;





