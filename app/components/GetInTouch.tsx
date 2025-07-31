import React from 'react';
import { Link } from '@remix-run/react';
const GetInTouch: React.FC = () => {


    const FormSection =  (
        <form className="">
          <fieldset className="ml-[6.5rem]">
           
    
            <div className=" mb-2">
            <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-white font-bold mb-4">Your Name</label>
            <input
            className="bg-gray-800 w-[50rem] py-2 pl-[1rem] h-[3rem] text-white rounded-md focus:outline-none focus:shadow-outline text-sm"
            id="name"
           type="text"
           placeholder="Enter your name"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-white font-bold mb-4">Your E-mail</label>
            <input
            className="bg-gray-800 w-[50rem] text-white py-2 pl-[3rem] h-[3rem] rounded-md focus:outline-none focus:shadow-outline text-sm"
            id="name"
           type="text"
           placeholder="Enter your e-mail"
            />
              <span className="relative -left-[49rem] top-[0.45rem] bg-gray-400 icon-[ic--baseline-email]  w-6 h-6 "></span>
            
            </div>
            <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-white font-bold mb-4">Your Budget</label>
            <input
            className="bg-gray-800 w-[50rem] text-white py-2 pl-[3rem] h-[3rem] rounded-md focus:outline-none focus:shadow-outline text-sm"
            id="name"
           type="text"
           placeholder="1k-3k"
            />
            <span className="relative -left-[49rem] top-[0.45rem] bg-gray-400 icon-[solar--dollar-bold]  w-6 h-6 "></span>
            </div>
            </div>
    
            <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-white font-bold mb-4"> Tell me more a bit what you are looking for</label>
          <textarea
          className="bg-gray-800 text-white w-[50rem] h-[7rem] py-2 px-[1rem] rounded-md focus:outline-none focus:shadow-outline text-sm"
          id="message"
          placeholder="Hello! I am interested in..."
           ></textarea>
           
</div>

    
            <div>
              <button className="mt-6 w-[8rem] bg-gradient-to-r from-red-500 to-blue-500 sm:w-[9rem] text-[0.8rem] sm:text-lg flex items-center gap-x-2  text-white hover:bg-blue-700  font-bold py-3 sm:py-3 sm:pl-4 pl-4 rounded-md sm:rounded-xl">
                Submit now
              </button>
            </div>
          </fieldset>
        </form>
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
       const ProjectQuestionsSection = (
        <div className="sm:w-screen mt-[10rem] ml-[6.5rem] mb-[2rem]">
          <h2 className="text-2xl sm:text-5xl  text-white font-bold">
            Frequently Asked <br /> <span className='mt-6 ml-2 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'> Questions</span>
          </h2>
          <p className='text-base text-gray-200 my-[1.5rem]'>
            Answers to the burning questions in your mind
          </p>
          <div>
              <button className="mt-6 w-[10rem] bg-gradient-to-r from-red-500 to-blue-500 sm:w-[9rem] text-lg  flex items-center gap-x-2  text-white hover:bg-blue-700  font-bold py-3 sm:py-2 sm:pl-6 pl-4 rounded-md sm:rounded-3xl">
                contact me 
              </button>
            </div>
          <div className="">
      
            <div className="sm:w-[50rem] mt-[3rem] mb-[3rem] sm:mb-[0rem]">
              <div className="sm:w-[50remrem] mb-2">
                <div className="flex justify-between mx-auto items-center py-[1rem] mb-4">
                  <p className="font-medium font1 text-xl text-white flex items-center">
                    How long does a website take to build?
                  </p>
                  <span className="icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]"></span>
                </div>
                <hr className=" bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4"/>
              </div>
              <div className="sm:w-[50rem] mb-4">
              <div className="flex justify-between mx-auto py-[1rem] items-center mb-4">
                  <p className="font-medium font1 text-xl text-white flex items-center">
                    How much does a website cost?
                  </p>
                  <span className="icon-[iconamoon--arrow-right-2] text-white w-[1.5rem] h-[1.5rem]"></span>
                </div>
                <p className="sm:w-[48rem] text-justify text-white text-lg mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  hendrerit eros id justo eleifend, vel aliquet urna porttitor. Ut
                  non volutpat justo. Vivamus nec orci vel mauris vulputate
                  fermentum. Nulla facilisi.
                </p>
                <hr className=" bg-white w-full sm:w-[50rem] h-[0.15rem] rounded-4"/>
              </div>
              <div className="sm:w-[50remrem] mb-2">
                <div className="flex justify-between mx-auto py-[1rem] items-center mb-4">
                  <p className="font-medium font1 text-xl text-white flex items-center">
                    I don't have a design can you build it for me?
                  </p>
                  <span className="icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]"></span>
                </div>
                <hr className=" bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4"/>
              </div>
              <div className="sm:w-[50remrem] mb-2">
                <div className="flex justify-between mx-auto py-[1rem] items-center mb-4">
                  <p className="font-medium font1 text-xl text-white flex items-center">
                    Do you provide seo as well?
                  </p>
                  <span className="icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]"></span>
                </div>
                <hr className=" bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4"/>
              </div>
              <div className="sm:w-[50remrem] mb-2">
                <div className="flex justify-between mx-auto py-[1rem] items-center mb-4">
                  <p className="font-medium font1 text-xl text-white flex items-center">
                    Will my website load quickly?
                  </p>
                  <span className="icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]"></span>
                </div>
                <hr className=" bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4"/>
              </div>
            </div>
          </div>
        </div>
      );
  return (
    <div className=''>
         <div className={`  p-4 text-white sm:p-8 ml-4 sm:ml-8 lg:ml-[5rem] lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]`}>
          <h1 className="text-3xl sm:text-5xl font-bold font2 w-10/12 sm:w-4/5 lg:w-3/5 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
            Get in touch
          </h1>
          <p className="sm:mt-6 text-md w-4/5 sm:text-xl ">
           Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow
          </p>
          <div className="mt-[2rem] ">
          <div className="flex items-center w-[14rem] mb-4">
            {/* SVG Icon */}
              <span className="bg-gradient-to-r from-red-500 to-blue-500  icon-[ic--baseline-email]  w-10 h-10 "></span>
            
            {/* email */}
            <p className="ml-4 text-sm text-white">info@yourdomain.com</p>
          </div>
          <div className="flex items-center w-[14rem] mb-4">
            {/* SVG Icon */}
              <span className="bg-gradient-to-r from-red-500 to-blue-500  icon-[ic--baseline-call]  w-10 h-10 "></span>
            
            {/* email */}
            <p className="ml-4 text-sm text-white">+888-776-899</p>
          </div>
        </div>
        </div>
        {FormSection}
        {ProjectQuestionsSection}
        {Footer}
      
    </div>
  );
};

export default GetInTouch;
