import React, { useEffect, useRef } from 'react';
import { Link } from '@remix-run/react';
import icon1 from '../assets/icon/07.svg';
import icon2 from '../assets/icon/08.svg';
import icon3 from '../assets/icon/09.svg';
import { useGSAP ,} from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);
  const buttonRef1 = useRef(null);
  useGSAP(() => {
    gsap.fromTo(".span1", {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: ".span1",
        start: "top center",
        end: "+=500",
       
      },
    });

    gsap.fromTo(".span2", {
      opacity: 0,
      x: -100,
    }, {
      opacity: 1,
      x: 0,
      duration: 3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: ".span2",
        start: "top center",
        end: "+=500",
       
      
      },
    });
    gsap.fromTo(".span3", {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 3,
      scale: 1,
      duration: 3,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: ".span3",
        start: "top center",
        end: "+=500",
      
      },
    });
    
  }, { scope: container });

    const articles = [
        {
          id: 1,
          title: "Finance Landing Page",
          date: '3rd October, 2023',
          buttonLabel: 'Kitchen design',
          blog:'blog1',
        },
        {
          id: 2,
          title: "Interior Design Website",
          date: '23rd november, 2023',
          buttonLabel: 'Living design',
          blog:'blog2',
        },
        {
            id: 3,
            title: "Russel Morgan Portfolio",
            date: '3rd October, 2023',
            buttonLabel: 'Kitchen design',
            blog:'blog1',
          },
          {
            id: 4,
            title: "Sonali Landing Page",
            date: '23rd november, 2023',
            buttonLabel: 'Living design',
            blog:'blog2',
          },
    
     
      ]; 
       
      const Footer = (
        <div className='ml-[5rem] relative -top-[5rem] h-[2rem] w-[70rem] ]'>
         <hr className=' w-[70rem] h-[0.15rem] bg-white' />
         <div className='flex  mt-[2.6rem] w-[70rem] items-center justify-between '>
           <h1  className='text-white font-bold text-4xl'>
            XFOLIO
           </h1>
           <div className="flex gap-x-6">
                    <Link to="/" className="hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white" aria-current="page">Home</Link>
                    <Link to="/casestudy" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium">Case-study</Link>
                    <Link to="/testimonial" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium">Testimonial</Link>
                    
                  </div>
         </div>
         <div className='flex  my-[1.5rem] w-[70rem] items-center justify-between '>
           <h1  className='text-white  text-xl'>
            @Designed by TechAngels 
           </h1>
           <div className="flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ">
            <div className='border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className="icon-[basil--facebook-solid] w-4 h-4 text-white "> </span></div> 
            <div className='border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[mdi--twitter] w-4 h-4 text-white "> </span> </div> 
            <div className='border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[ri--linkedin-fill] w-4 h-4 text-white "></span></div> 
          
              
              
              
            </div>
         </div>
        </div>
       );
       const handleClick1 = () => {
        // Trigger the animation
        gsap.fromTo(buttonRef1.current, {
          background: 'linear-gradient(to right, #ff3a3a, #0022ff)', // Original gradient
          scale: 1.0,
        }, {
          background: 'linear-gradient(to right, #a61a1a, #0000a6)', // Lightened darker gradient
          scale: 1.1,
          duration: 0.2,
          ease: 'power4.out',
          onComplete: () => {
            // After animation completion, transition back to the original state
            gsap.to(buttonRef1.current, {
              background: 'linear-gradient(to right, #ff3a3a, #0022ff)', // Original gradient
              scale: 1.0,
              duration: 0.2,
              ease: 'power4.out',
            });
          },
        });
      };
      const handleClick = () => {
        // Trigger the animation
        gsap.fromTo(buttonRef.current, {
         
          scale: 1.0,
        }, {
          
          scale: 1.1,
          duration: 0.2,
          ease: 'power4.out',
          onComplete: () => {
            // After animation completion, transition back to the original state
            gsap.to(buttonRef.current, {
             
              scale: 1.0,
              duration: 0.2,
              ease: 'power4.out',
            });
          },
        });
      };
  return (
   <div>
     <div className='bg-customColor '>
         <div className={`w-[70rem]  text-white lg:pt-[10rem] pb-[8rem] flex flex-col ml-[6rem]`}>
         
          <h1 ref={container} className="text-3xl mt-[1rem] font-bold  sm:text-5xl ">
            <span className='span1'> Design that solves</span> <br />    <span className="span2 block flex ml-[7rem] items-center">
                <span className="icon-[fluent--line-horizontal-1-16-regular]  w-[4rem] h-[4rem]"></span>
                  <p className="flex items-center">
                    problems, one
                  </p>
                
                </span>
           <br /> <span className='span3 block -mt-[3.5rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'> product at a time</span>
      </h1>
      
          <div className='flex mt-[2rem] gap-x-[1rem]'>
     <button   ref={buttonRef1}
        onClick={handleClick1} className=" text-[0.8rem] text-black sm:text-lg text-white  bg-gradient-to-r from-red-500 to-blue-500 font-bold py-3 sm:py-[0.5rem] sm:px-[1.5rem]  rounded-md sm:rounded-3xl">
     Get in touch
    
      </button>
      <button  ref={buttonRef}
        onClick={handleClick}  className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  border border-white text-white font-bold py-3 sm:py-[0.5rem] sm:px-[1.5rem]  rounded-md sm:rounded-3xl">
        View all works
    
      </button>
     </div>
     <hr className=' w-[60rem] mt-[4rem] h-[0.15rem] bg-white' />
     <div className="sm:w-[60rem] border-2 border border-b-white border-t-customColor border-x-customColor">
                <div className="flex justify-between mx-auto items-center">
                  <p className="py-[1rem] px-[1rem]  text-[3rem] flex items-center">
                    UI/UX Design
                  </p>
                  <span className="icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]"></span>
                </div>
              </div>
              <div className="sm:w-[60rem] border-2 border border-b-customColor border-t-customColor border-x-customColor">
                <div className="flex justify-between mx-auto items-center">
                  <p className="py-[1rem] px-[1rem]  text-[3rem] flex items-center">
                    Graphic Design
                  </p>
                  <span className="icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]"></span>
                </div>
              </div>
              <div className="sm:w-[60rem] border-0 border border-b-customColor border-t-customColor border-x-customColor bg-gradient-to-r from-red-500 to-blue-500 ">
                <div className="flex justify-between mx-auto items-center">
                  <p className="py-[1rem] px-[1rem]  text-[3rem] flex items-center">
                    Web Design
                  </p>
                  <span className="icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]"></span>
                </div>
              </div>
              <div className="sm:w-[60rem] border-2 border border-b-white border-t-customColor border-x-customColor">
                <div className="flex justify-between mx-auto items-center">
                  <p className="py-[1rem] px-[1rem]  text-[3rem] flex items-center">
                    Product Design
                  </p>
                  <span className="icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]"></span>
                </div>
              </div>
        </div>
    
    </div>
    <div className='w-[65rem] ml-[6rem] mb-[5rem]'>
    
    <h1 className='text-3xl font-bold  sm:text-7xl mt-[7rem]   text-white'>
    Look at My  <br /> <span className='bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text'>Projects</span>
    </h1>
    <p className=' text-[1.2rem] mt-[3rem] w-[46rem] text-white  mb-[7rem]'>
      Lorem ipsum dolor sit amet consectetur. Consequat tempus rhoncus cum in. Vel id donec adipiscing elit morbi amet. Fermentum aliquam sed vitae placerat quam nec convallis.
    </p>
    <div className="grid grid-cols-1 w-[55rem]  md:grid-cols-2 gap-y-[3rem] ">
  {articles.map((article) => (
    <div key={article.id} className="flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1  mx-8 px-4  rounded-[2rem]">
      <div className={` w-full h-[17rem] flex flex-col rounded-t-[0.4rem] justify-end  ${article.blog}`}>
      
      </div>
      <Link to= {`/blogs/${article.id}`}>
      <div className="py-[1.4rem] px-[1.4rem] w-[25rem] flex flex-col gap-y-[1.2rem]">
   
        <h2 className="text-2xl font-bold text-white  ">{article.title}</h2>
        <p className="text-md  text-white font2 w-10/12 mt-[0.5rem] ">Dribble Shot</p>
      </div>
      </Link>
    </div>
  ))}
</div>
   
  </div>
   <div className='bg-customColor '>
    <div className='w-[65rem] pb-[15rem] ml-[6rem]'>
    <div className='pt-[7rem] '>
        <h1 className='text-3xl font-bold  sm:text-7xl   text-white'>
       Karthic Bansal
        </h1>
        <div className='flex mt-[2rem] w-[55rem] gap-x-[1rem]'>
            <p className='text-[1.2rem]  text-white '>
            Lorem ipsum dolor sit amet consectetur. Aliquam consectetur id massa nec
elementum nisi. Aliquet in tempor sociis
ut. Condimentum porttitor metus ridiculus tempor in scelerisque facilisis. Gravida pulvinar amet fringilla
            </p>
            <p className='text-[1.2rem]  text-white '>
            Lorem ipsum dolor sit amet consectetur. Aliquam consectetur id massa nec
elementum nisi. Aliquet in tempor sociis
ut. Condimentum porttitor metus ridiculus tempor in scelerisque facilisis. Gravida pulvinar amet fringilla
            </p>
        </div>
        <div className="flex justify-between items-center  w-[65rem]  font-medium p-4 sm:py-8  ">
        {/* Division 1 */}
        <div className="w-1/4 h-20 flex items-center justify-start ">
          {/* Content for Division 1 */}
          <div className="sm:hidden">
            <span className="font1 text-5xl text-customColor2">12</span><br />
            <span className="text-xs">years of <br />experience</span>
          </div>
          <div className="hidden mt-4  sm:block sm:flex flex-col items-center justify-center">
            <span className=" text-5xl font-bold  bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text">15+</span>
            <span className="text-md text-white">Products Done</span>
            

          </div>
        </div>

        {/* Division 2 */}
        <div className="w-1/4 h-20 flex items-center justify-start">
          {/* Content for Division 2 */}
          <div className="sm:hidden">
            <span className="text-5xl text-white">85</span><br />
            <span className="text-xs">success <br />projects</span>
          </div>
          <div className="hidden mt-4 sm:block sm:flex flex-col items-center justify-center">
            <span className="text-5xl font-bold bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text">07</span>
            <span className="text-md text-white">years of experience</span>
        
          </div>
        </div>

        {/* Division 3 */}
        <div className="w-1/4 h-20 flex items-center justify-start ">
          {/* Content for Division 3 */}
          <div className="sm:hidden">
            <span className="font1 text-5xl text-customColor2">15</span><br />
            <span className="text-xs">Active </span><br />
            <span className="text-xs">projects </span>
          </div>
          <div className="hidden mt-4 sm:block sm:flex flex-col items-center justify-center">
            <span className="font-bold text-5xl block bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text">100%</span>
            <span className="text-md text-white">clients satisfaction</span>
          </div>
        </div>

   
      </div>
    </div>
    <div className='flex mt-[2rem] justify-between'>
            <div className='picture h-[25rem] w-[20rem] rounded-md'>

            </div>
            <div className='picture2 h-[25rem] w-[23rem] rounded-md'>

            </div>
            <div className='flex flex-col gap-y-[1rem] h-[25rem] w-[20rem] rounded-md'>
            <div className='picture2 h-[12rem] w-[20rem] rounded-md'>

             </div>
           <div className='picture3 h-[12rem] w-[20rem] rounded-md'>

            </div>
            </div>
        </div>
       
    </div>
   </div>
   <div className="w-[65rem] relative -top-[13rem] ml-[6rem]  p-6 rounded-b-3xl bg-gradient-to-r from-red-500 to-blue-500 sm:rounded-b-[8rem] sm:py-[3rem] sm:flex sm:flex-col sm:justify-center sm:items-center">
      <h2 className="text-3xl sm:text-7xl font-bold sm:text-center  mb-2 sm:mb-2 text-white sm:w-3/4">Interested in <br /> <span className='mt-[1.7rem] block'> Working with me?</span></h2>
      
      <button className=" text-[1.3rem] text-black  mt-[3.5rem] hover:bg-blue-700 bg-white font-bold py-3 sm:py-5 sm:px-[3.2rem]  rounded-md sm:rounded-[3rem]">
     Get in touch
    
      </button>
    </div>
    {Footer}
   </div>
  );
};

export default Skills;
