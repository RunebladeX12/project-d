import React from 'react';
import { Link } from '@remix-run/react';
const CaseStudy: React.FC = () => {


  
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
    <div className='pt-[10rem] ml-[7.5rem] '>
    <div className=''>
    <h4 className='font-bold text-3xl w-[23rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text '>
                Saas tool Design
            </h4>
        <h1 className='font-bold text-white text-7xl mt-[1rem]'>
   Con Cubo
        </h1>
        <div className='flex mt-[3rem] justify-between w-[50rem]'>
        <div className='font-bold text-white flex flex-col gap-y-[0.3rem]'>
            <h4 className='text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'>
                client
            </h4>
            <h2 className='text-4xl'>
                Con Cuba
            </h2>
            <h2 className='text-4xl'>
                GmbH
            </h2>
        </div>
        <div className='font-bold text-white flex flex-col gap-y-[0.3rem]'>
            <h4 className='text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'>
                My Role
            </h4>
            <h2 className='text-4xl'>
                Product
            </h2>
            <h2 className='text-4xl'>
                Designer
            </h2>
        </div>
        <div className='font-bold text-white flex flex-col gap-y-[0.3rem]'>
            <h4 className='text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'>
                Location
            </h4>
            <h2 className='text-4xl'>
                Hamburg and
            </h2>
            <h2 className='text-4xl'>
                Remote
            </h2>
        </div>
        </div>
        <div className='mt-[4rem] casestudy1 h-[35rem] w-[65rem] rounded-md'>
            
        </div>
     </div>
     <div className='mt-[6rem] w-[65rem] text-white '>
        <h1 className='font-bold text-[2rem] w-[23rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text '>
       ABOUT THE PRODUCT
        </h1>
        <h1 className='font-bold mt-[0.8rem] text-[2.5rem]'>
       Design a Saas tool to visualize and manage complex<br /> <span className='-mt-[0.8rem] block'> organisations</span>
        </h1>
        <p className='text-[1.4rem] mt-[4rem]'>
        The newly founded startup wants to support organisations and teams in the design,control and optimisation of their work
        </p>
        <p className='text-[1.4rem] mt-[2rem]'>
        The tool aims to be an intelligent companion in setting up highly efficent organisation structures to tackle overhead and lacks of transparency
        </p>
     </div>
     <div className='text-white w-[65rem] mt-[5rem]'>
       <h1 className='font-bold text-[3.3rem]'>
      CLIENT'S CHALLENGE
       </h1>
       <p className='text-[1.4rem] my-[2rem]'>
      
Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci.
       </p>
       <div className='mt-[3rem] casestudy2 h-[35rem] w-[65rem] rounded-md'>
            
            </div>
     </div>
     <div className='text-white w-[65rem] mt-[5rem]'>
       <h1 className='font-bold text-[3.3rem]'>
      THE SOLUTION
       </h1>
       <p className='text-[1.4rem] my-[2rem]'>
      
Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci.
       </p>
       <div className='mt-[3rem] casestudy5 h-[35rem] w-[65rem] rounded-md'>
            
            </div>
     </div>
     <div className='text-white w-[65rem] mt-[5rem]'>
       <h1 className='font-bold text-[3.3rem]'>
         DESIGNING WITH COMPONENTS
       </h1>
       <p className='text-[1.4rem] my-[2rem]'>
      
Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci.
       </p>
       <div className='mt-[3rem] casestudy3 h-[35rem] w-[65rem] rounded-md'>
            
            </div>
     </div>
     <div className='text-white w-[65rem] mt-[5rem]'>
       <h1 className='font-bold text-[3.3rem]'>
      PROJECT'S RESULTS
       </h1>
       <p className='text-[1.4rem] my-[2rem]'>
      
Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci.
       </p>
       <div className='mt-[3rem] casestudy4 h-[35rem] w-[65rem] rounded-md'>
            
            </div>
     </div>
     <div className='text-white w-[65rem] mt-[7rem]'>
        <h1 className='font-bold text-[5rem] '>More cool <span className=' bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'> projects</span></h1>
       <div className='flex gap-x-[2rem]'>
       <div className='casestudy6 mt-[2rem] h-[30rem] w-[27rem] rounded-md'>
        <div className='relative top-[19rem] pl-[1rem] '>
         <h1 className='font-bold text-[1.9rem]'>
            Lorem Ipsum
         </h1>
         <h2 className='text-[1.2rem] my-[1rem] font-medium'>
            Technology
         </h2>
         <div className='flex gap-x-[1rem]'>
         <button className=" text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
          web design
        
          </button>
          <button className=" text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            ui/ux design
        
          </button>
         </div>
        </div>
      </div>
      <div className='casestudy7 mt-[2rem] h-[30rem] w-[27rem] rounded-md'>
     {/*  <div className='relative top-[19rem] pl-[1rem] '>
         <h1 className='font-bold text-[1.9rem]'>
            Lorem Ipsum
         </h1>
         <h2 className='text-[1.2rem] my-[1rem] font-medium'>
            Technology
         </h2>
         <div className='flex gap-x-[1rem]'>
         <button className=" text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
          web design
        
          </button>
          <button className=" text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            ui/ux design
        
          </button>
         </div>
  </div> */}
      </div>
       </div>
      <div>

      </div>
     </div>
    </div>
        {Footer}
      
    </div>
  );
};

export default CaseStudy;
