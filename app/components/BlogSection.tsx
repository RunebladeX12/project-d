import React from 'react';
import { Link } from '@remix-run/react';
const BlogSection: React.FC = () => {


  
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
       const articles = [
        {
          id: 1,
          title: "Let's get solutions for building construction work",
          date: '3rd October, 2023',
          buttonLabel: 'Kitchen design',
          blog:'blog1',
        },
        {
          id: 2,
          title: "Low cost latest invented interior designing ideas",
          date: '23rd november, 2023',
          buttonLabel: 'Living design',
          blog:'blog2',
        },
    
     
      ]; 
       const sticker = (
        <div className="w-full mt-[5rem] py-10">
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
       );
       const articleshori = [
        {
          id: 1,
          title: "Let's get solutions for building construction work",
          date: '3rd October, 2023',
          buttonLabel: 'Kitchen design',
          blog:'blog1',
        },
        {
          id: 2,
          title: "Low cost latest invented interior designing ideas",
          date: '23rd november, 2023',
          buttonLabel: 'Living design',
          blog:'blog2',
        },
        {
          id: 3,
          title: "Best for any office and business interior solution",
          date: '3rd january, 2024',
          buttonLabel: 'Interior design',
          blog:'blog3',
        },
        {
          id: 4,
          title: "Let's get solutions for building construction work",
          date: '3rd October, 2023',
          buttonLabel: 'Kitchen design',
          blog:'blog2',
        },
        {
          id: 5,
          title: "Low cost latest invented interior designing ideas",
          date: '23rd november, 2023',
          buttonLabel: 'Living design',
          blog:'blog5',
        },
        {
          id: 6,
          title: "Best for any office and business interior solution",
          date: '3rd january, 2024',
          buttonLabel: 'Interior design',
          blog:'blog6',
        },
      ];
  return (
    <div className=''>
    <div className='pt-[10rem] ml-[7.5rem] '>
      <div className='w-[65rem]'>
    
        <h1 className='text-3xl font-bold -ml-[8rem] sm:text-7xl  mb-[7rem] text-center text-white'>
        Blogs & articles <br /> <span className='bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text'>for buisness growth</span>
        </h1>
        <div className="grid grid-cols-1 w-[55rem] md:grid-cols-2 sm:px-4">
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]">
          <div className={`p-4 w-full h-[12rem] flex flex-col justify-end rounded-t-[0.4rem] ${article.blog}`}>
          
          </div>
          <Link to= {`/blog-details`}>
          <div className="py-[1.2rem] px-[1.2rem] w-full flex flex-col gap-y-[1.2rem]">
          <div className='flex gap-x-[1rem]'>
         <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
          web design
        
          </button>
          <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            ui/ux design
        
          </button>
         </div>
            <h2 className="text-2xl font-bold text-white font2 w-10/12 ">{article.title}</h2>
            <p className="text-md  text-white font2 w-10/12 mt-[0.5rem] ">By Karthic Bansal</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
       
      </div>
    </div>
    {sticker}
    <div className='pt-[10rem] ml-[7.5rem] '>
        <div className='w-[65rem] '>
    
        <h1 className='text-3xl font-bold  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text ml-[1rem] sm:text-7xl  mb-[2rem]  '>
        Recent insights
        </h1>
        <div className='flex gap-x-[1rem] mb-[2rem] ml-[1.3rem]'>
         <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl">
          All post
        
          </button>
          <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl">
          Design
        
          </button>
          <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl">
            Technology
        
          </button>
          <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl">
            Webflow
        
          </button>
         </div>
        <div className="grid grid-cols-1 w-[55rem]  sm:px-4">
      {articleshori.map((articlehori) => (
        <div key={articlehori.id} className="flex  w-[50rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]">
          <div className={`p-4 w-full h-[18rem] max-w-[25rem] flex flex-col justify-end rounded-t-[0.4rem] ${articlehori.blog}`}>
          
          </div>
          <Link to= {`/blog-details`}>
          <div className="px-[1.5rem] h-[18rem] w-full mt-[1rem]  flex flex-col gap-y-[2.3rem]">
          <div className='flex gap-x-[1rem]'>
         <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
          web design
        
          </button>
          <button className=" text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl">
            ui/ux design
        
          </button>
         </div>
            <h2 className="text-2xl font-bold text-white font2 w-10/12 ">{articlehori.title}</h2>
            <p className="text-md  text-white font2 w-10/12 mt-[0.5rem] ">By Karthic Bansal</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
       
      </div>
      </div>
      <div className='ml-[7.5rem] w-[65rem] mt-[3rem] '>
        <p className='text-white font-bold text-[4rem]'>
          See the impact of good,<br /> <span className='relative -top-[1.5rem]'>conversation-oriented design</span> <br /> <span className='relative -top-[3rem]'> on your business </span>
        </p>
        <div className="sm:w-[50rem] mt-[0.5rem] mb-2">
                <div className="flex justify-between mx-auto items-center">
                  <p className="font-bold text-[4rem]  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text  flex items-center">
                    Let's Work Together
                  </p>
                  <span className="icon-[eva--diagonal-arrow-right-up-fill] bg-gradient-to-r block from-red-500 to-blue-500  w-[8rem] h-[8rem]"></span>
                </div>
                <hr className=" bg-gradient-to-r block -mt-[1rem] from-red-500 to-blue-500  w-full sm:w-[50rem] h-[0.2rem] rounded-4"/>
              </div>
      </div>
        {Footer}
       
    </div>
  );
};

export default BlogSection;
