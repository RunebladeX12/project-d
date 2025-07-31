import React from 'react';
import { Link } from '@remix-run/react';

const OurServices: React.FC = () => {

    const Footer = (
        <div className='ml-[5rem] w-[70rem] mt-[5rem]'>
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
  return (
    <div className=''>
     <div className='ml-4 mb-[12rem] sm:w-[65rem] sm:mx-auto '>
        <h1 className='text-3xl sm:text-7xl pt-[14rem] ml-[1.5rem] text-white'>
         Our <span className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'> Services </span>
        </h1>
        <div className=''>
         <div className={` bg-opacity-60 p-4 text-white sm:p-8  lg:mt-0 lg:pt-[4rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]`}>
          <h1 className="text-3xl sm:text-5xl font2 w-10/12 sm:w-4/5 lg:w-3/5">
            Web Design
          </h1>
          <p className="sm:mt-6 text-md sm:text-xl ">
           Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow
          </p>
          <button className="mt-6 text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            Hire Me
        
          </button>
        </div>
        <div className='mt-6 picture2 h-[30rem] ml-8 w-[55rem] rounded-md'>

        </div>
        </div>
        
        <div className=''>
         <div className={` bg-opacity-60 p-4 text-white sm:p-8  lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]`}>
          <h1 className="text-3xl sm:text-5xl font2 w-10/12  lg:w-4/5">
            Graphics Design
          </h1>
          <p className="sm:mt-6 text-md sm:text-xl ">
           Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow
          </p>
          <button className="mt-6 text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            Hire Me
        
          </button>
        </div>
        <div className='mt-6 picture h-[30rem] ml-8 w-[55rem] rounded-md'>

        </div>
        </div>

        <div className=''>
         <div className={` bg-opacity-60 p-4 text-white sm:p-8  lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]`}>
          <h1 className="text-3xl sm:text-5xl font2 w-10/12 sm:w-4/5 lg:w-3/5">
            UI/UX Design
          </h1>
          <p className="sm:mt-6 text-md sm:text-xl ">
           Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow
          </p>
          <button className="mt-6 text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            Hire Me
        
          </button>
        </div>
        <div className='mt-6 picture3 h-[30rem] ml-8 w-[55rem] rounded-md'>

        </div>
        </div>
     </div>
     {Footer}
    </div>
  );
};

export default OurServices;
