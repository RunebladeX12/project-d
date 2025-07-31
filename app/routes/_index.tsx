import type { MetaFunction } from "@remix-run/node";
import React, { useState, useEffect ,useRef} from 'react';
import { useLoaderData } from "@remix-run/react";


import IndexPage from '../components/index';
import NavigationBar from '../components/NavigationBar';
import Skills from '../components/skill';
import StickerSection from '../components/Sticker'; /*
import Article from '../components/Article';
import Join from '../components/Join';
import Footer  from "~/components/Footer";
import DescriptionSection from '../components/DescriptionSection';
*/

export const meta: MetaFunction = () => {
  return [
    { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
    { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
    { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
    { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
    { property: "og:site_name", content: "Interior Decorators Inc." },
  ];
};

export default function Index() {
  const bodyRef = useRef(null);
  // State for Exclusive dropdown in Navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for Exclusive dropdown in Banner
 

  // Toggle function for Exclusive dropdown
  const toggleMenuDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };

  // State for determining if data is loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loaded class to body when the window has loaded
    if (bodyRef.current) {
      bodyRef.current.classList.add('loaded');
    }
  }, []); // This effect runs once when the component mounts


  
  return (
    <div ref={bodyRef} id="body">
  
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
    <NavigationBar isMenuOpen={isMenuOpen} toggleMenuDropdown={toggleMenuDropdown} />
    
      <IndexPage />
    
      <Skills />
    
    
   

     {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <img
        src="https://drive.google.com/uc?export=view&id=1C3oSuF-HK9IlyTlo4gLYGym1LuejiFRS"
        alt="Description of the image"
        className="rounded-lg shadow-lg mt-4"
      />*/}
    </div>
  );
}