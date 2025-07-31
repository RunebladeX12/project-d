import React, { useEffect, useRef } from 'react';
import { useGSAP ,} from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);




import icon1 from '../assets/icon/07.svg';
import icon2 from '../assets/icon/08.svg';
import icon3 from '../assets/icon/09.svg';
import TypingAnimation from "./TypingAnimation";


const IndexPage: React.FC = () => {

  const container = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  useGSAP(() => {
   
    gsap.fromTo(".box1", { opacity: 0 }, { opacity: 1, duration: 3, delay : 1 });
    
    gsap.fromTo(".box2", { opacity: 0 }, { opacity: 1, duration: 3, delay: 2});

    gsap.fromTo(".box3", { opacity: 0 }, { opacity: 1, duration: 3, delay: 3});
    gsap.to(circle.current, { rotation: "-=360", duration: 3, repeat: -1 });
  }, { scope: container });



  useGSAP(() => {
  
    gsap.from(".trigger", {
      opacity: 0,
      y: 100,
      duration: 10,
      scrollTrigger: {
        trigger: ".trigger",
    start: "top center",
    end: "+=500",
        scrub: true,
      
      },
    });
    
  });

  const Logo = (
        <div  className='ml-[5rem] mt-[5rem]'>
            <h1 className='text-white font-bold text-2xl mt-[3rem]'>
                Trusted by leading brands
            </h1>
               <div ref={container}  className="flex justify-between items-center -ml-[2rem] -mt-[5rem] sm:w-[40rem] py-4">
          <img   src={icon1} alt="Logo 1" className="box1 sm:mr-4 mx-2 w-20 h-10 sm:w-[20rem] sm:h-[20rem]" />
          <img   src={icon2} alt="Logo 1" className="box2 sm:mx-4 mx-2 w-10 h-10 sm:w-[20rem] sm:h-[20rem]" />
          <img  src={icon3} alt="Logo 1" className="box3 sm:mx-4 mx-2 w-10 -mt-[4.5rem] h-10 sm:w-[20rem] sm:h-[20rem]" />
         
        </div>
        </div>
       );
       

  return (
    <div className=''>
         <div className={`w-[70rem]  text-white lg:pt-[10rem] flex flex-col items-center`}>
          <div className='rounded-full h-[17rem] w-[17rem] blog-details-picture1 '>

          </div>
          <h1 className="text-3xl mt-[1rem] font-bold  sm:text-5xl ">
            <span className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'> <TypingAnimation /></span> 
          </h1>
          <p className="sm:mt-6 text-md w-[55rem] text-center sm:text-lg ">
           Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow
          </p>
          <div className='flex mt-[1rem] gap-x-[1rem]'>
     <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-3 sm:px-8  rounded-md sm:rounded-3xl">
     Get in touch
    
      </button>
      <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  border border-white text-white font-bold py-3 sm:py-3 sm:px-8  rounded-md sm:rounded-3xl">
        View all works
    
      </button>
     </div>
        </div>
       {Logo}
    
    </div>
  );
};

export default IndexPage;
