import React from 'react';
import { Link } from '@remix-run/react';

import icon1 from '../assets/icon/07.svg';
import icon2 from '../assets/icon/08.svg';
import icon3 from '../assets/icon/09.svg';
import icon4 from '../assets/icon/04.svg';
import icon5 from '../assets/icon/05.svg';

const EducationSection = (

    <div className="sm:w-[40rem] ml-[5rem] mt-[2rem] text-white mb-8">
    {/* Content for Core Division 2 */}
    <h2 className="text-5xl font2 mb-8">
    Education
    </h2>
    <div className="sm:w-[38rem] mb-4">
      <p className="flex justify-between items-center px-2 sm:px-0">
        <span className="font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full">
        STANFORD UNIVERSITY <br /> <span className='text-gray-600 mt-4 text-[1.2rem]'> Frontend Web Developer Degree </span>
        </span>
        <span className="text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]">
          - 2016-2020
        </span>
      </p>
      <hr className=" bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4"/>
    </div>
    <div className="sm:w-[38rem] mb-4">
    <p className="flex justify-between items-center px-2 sm:px-0">
        <span className="font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full">
        MIT UNIVERSITY <br /> <span className='text-gray-600 mt-4 text-[1.2rem]'> User Experience Master </span>
        </span>
        <span className="text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]">
          - 2012-2016
        </span>
      </p>
      <hr className=" bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4"/>
    </div>
    <div className="sm:w-[38rem] mb-4">
    <p className="flex justify-between items-center px-2 sm:px-0">
        <span className="font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full">
        NEW YORK UNIVERSITY <br /> <span className='text-gray-600 mt-4 text-[1.2rem]'> Wev Development Degree </span>
        </span>
        <span className="text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]">
          - 2012-2017
        </span>
      </p>
      <hr className=" bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4"/>
    </div>
    {/* Additional content for Core Division 2 */}
  </div>
  
  
   );
 const ExperienceSection = (

    <div className="sm:w-[40rem] ml-[5rem] mt-[3rem] my-[2rem] text-white ">
    {/* Content for Core Division 2 */}
    <h2 className="text-5xl font2 mb-8">
    Work Experience
    </h2>
    <div className="sm:w-[38rem] mb-4">
      <p className="flex justify-between items-center px-2 sm:px-0">
        <span className="font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full">
        Twitter Inc <br /> <span className='text-gray-600 mt-4 text-[1.2rem]'> Product Mananger </span>
        </span>
        <span className="text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]">
          - 2016-2020
        </span>
      </p>
      <hr className=" bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4"/>
    </div>
    <div className="sm:w-[38rem] mb-4">
    <p className="flex justify-between items-center px-2 sm:px-0">
        <span className="font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full">
        Tesla <br /> <span className='text-gray-600 mt-4 text-[1.2rem]'> Visual Designer </span>
        </span>
        <span className="text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]">
          - 2012-2016
        </span>
      </p>
      <hr className=" bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4"/>
    </div>
    <div className="sm:w-[38rem] mb-4">
    <p className="flex justify-between items-center px-2 sm:px-0">
        <span className="font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full">
        Apple <br /> <span className='text-gray-600 mt-4 text-[1.2rem]'> UI Designer </span>
        </span>
        <span className="text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]">
          - 2012-2017
        </span>
      </p>
      <hr className=" bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4"/>
    </div>
    {/* Additional content for Core Division 2 */}
  </div>
  
  
   );
   const Logo = (
    <div className='ml-[5rem] mt-[5rem]'>
        <h1 className='text-white text-5xl mt-[3rem]'>
            Companies I've <br /> <span className='mt-3 block'> Worked with</span> 
        </h1>
           <div className="flex justify-between items-center -ml-[2rem] -mt-[5rem] sm:w-[40rem] py-4">
      <img src={icon1} alt="Logo 1" className="sm:mr-4 mx-2 w-20 h-10 sm:w-[20rem] sm:h-[20rem]" />
      <img src={icon2} alt="Logo 1" className="sm:mx-4 mx-2 w-10 h-10 sm:w-[20rem] sm:h-[20rem]" />
      <img src={icon3} alt="Logo 1" className="sm:mx-4 mx-2 w-10 -mt-[4.5rem] h-10 sm:w-[20rem] sm:h-[20rem]" />
     
    </div>
    </div>
   );
   const FollowMe = (
    <div className='picture4 h-[35rem] w-[35rem] ml-[5rem] rounded-md'>
        <div className='relative top-[10rem] flex flex-col items-center justify-center left-[25rem] w-[30rem] py-[2rem] bg-white text-black rounded-md'>
            <h1 className='font-bold text-3xl w-[26rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text '>
                Follow Me
            </h1>
            <p className='text-lg font-medium mt-[1.5rem] w-[26rem] mb-[1rem]'>
                I'm Karthic Bansal, a designer who works with <br /> startups to build brands
            </p>
            <hr className='bg-black w-[26rem] h-[0.15rem]' />
            <div className="flex gap-x-6 sm:gap-x-10 w-[26rem] mt-[1rem]">
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className="icon-[basil--facebook-solid] w-4 h-4 text-white "> </span></div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[mdi--twitter] w-4 h-4 text-white "> </span> </div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[ri--linkedin-fill] w-4 h-4 text-white "></span></div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[ri--instagram-line] w-4 h-4 text-white "></span></div>
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className="icon-[basil--facebook-solid] w-4 h-4 text-white "> </span></div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[mdi--twitter] w-4 h-4 text-white "> </span> </div> 
        


          
          
          
        </div>
        </div>
    </div>
   );
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
const StickerSection = () => {
  return (
    <div>
    <div className="w-full  py-10">
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500  h-[4rem] w-full'>
    <div className='bg-white w-full h-[4rem] items-centertransform -rotate-2 flex gap-x-4'>
        <div className='relative -left-[1rem] flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
        <div className='flex items-center gap-x-4'>
            <p className='text-lg font-medium'>
                Design
            </p>
            <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white "> </span>
        </div>
         </div>
    </div>
    </div>
    {EducationSection}
    {ExperienceSection}
    {Logo}
    {FollowMe}
    {Footer}
    </div>
  );
};

export default StickerSection;
