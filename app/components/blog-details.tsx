import React from 'react';
import { Link } from '@remix-run/react';

const BlogDetails: React.FC = () => {

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
  return (
    <div className=''>
     <div className=' '>
     <div className=' w-[65rem] flex flex-col  sm:ml-8 lg:ml-[3rem] items-center pt-[10rem] '>
        <p className='text-white text-center font-bold text-[4rem]'>
          7 Tips to improve your <br /> <span className='relative -top-[1.5rem]'> UI/UX designs for your</span> <br /> <span className='relative -top-[3rem]'> new projects.</span>
        </p>
        <div className="relative -top-[2rem]">
                <div className="flex gap-x-[0.6rem] mx-auto items-center">
                <span className="icon-[fluent--line-horizontal-1-16-regular] rounded-xl bg-gradient-to-r block from-red-500 to-blue-500  w-[4rem] h-[4rem]"></span>
                  <p className="font-bold text-[2rem]  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text  flex items-center">
                    By Karthic Bansal
                  </p>
                
                </div>
    
              </div>
              <div className='mt-[1.6rem] blog-details-banner h-[30rem] w-[90rem] '>

</div>
      </div>
        <div className='bg-customColor'>
         <div className={`  text-white sm:p-8  ml-[4rem] lg:mt-0 lg:pt-[4rem] `}>
          <h1 className="text-3xl font-bold  sm:text-5xl ">
            overview
          </h1>
          <p className="sm:mt-6 text-xl w-[55rem] text-white">
       
Lorem ipsum dolor sit amet consectetur. Vulputate quam mattis non suscipit adipiscing diam. Ultricies nullam cras arcu sed cursus condimentum erat pulvinar. Eu viverra tellus nullam sed magna donec sed elit eget.
            </p>
         
        </div>
       <div className='mt-[2rem] flex flex-col gap-y-[2rem] ml-[6rem]'>
           <h1 className='text-3xl font-bold text-white  sm:text-5xl lg:w-3/5'> Lorem ipsum dolor sit amet</h1>
           <div className=' blog-details-picture1  h-[30rem]  w-[55rem] rounded-md'>

           </div>
           <p className='sm:mt-6 text-xl w-[55rem] text-white'>
             
Lorem ipsum dolor sit amet consectetur. Sed malesuada rutrum convallis id eu est convallis. Mattis quis dolor maecenas platea purus euismod nisi quis. Donec placerat libero ac eu ac volutpat quis sit. Et in posuere pellentesque purus orci. Nibh ut fringilla quis volutpat mauris. Amet tempus mauris augue eu urna sed nec. Condimentum quam rhoncus lectus eleifend duis. Sit cursus porta eu nullam et blandit. Et luctus arcu at penatibus id eleifend est. At volutpat aliquet gravida condimentum sed turpis purus. Nunc ullamcorper phasellus cursus elementum morbi. Scelerisque arcu interdum feugiat commodo aenean. Enim a tortor sit augue euismod id non pharetra duis. Dui feugiat diam consectetur mus nibh facilisi arcu nunc vulputate. Venenatis id sem blandit vestibulum nunc amet scelerisque urna. Massa odio enim vel at porttitor.
           </p>
       </div>
       <div className='mt-[2rem] flex pb-[9rem] flex-col gap-y-[2rem] ml-[6rem]'>
           <h1 className='text-3xl font-bold text-white  sm:text-5xl lg:w-3/5'> Lorem ipsum dolor sit amet</h1>
           <div className=' blog-details-picture2 h-[30rem]  w-[55rem] rounded-md'>

           </div>
           <p className='sm:mt-6 text-xl w-[55rem] text-white'>
             
Lorem ipsum dolor sit amet consectetur. Sed malesuada rutrum convallis id eu est convallis. Mattis quis dolor maecenas platea purus euismod nisi quis. Donec placerat libero ac eu ac volutpat quis sit. Et in posuere pellentesque purus orci. Nibh ut fringilla quis volutpat mauris.
 <br /><span className='block mt-[1.6rem] '>Amet tempus mauris augue eu urna sed nec. Condimentum quam rhoncus lectus eleifend duis. Sit cursus porta eu nullam et blandit. Et luctus arcu at penatibus id eleifend est. At volutpat aliquet gravida condimentum sed turpis purus.</span>
 <br /><span className='block mt-[1.6rem] '>Nunc ullamcorper phasellus cursus elementum morbi. Scelerisque arcu interdum feugiat commodo aenean. Enim a tortor sit augue euismod id non pharetra duis. Dui feugiat diam consectetur mus nibh facilisi arcu nunc vulputate. .</span>
  <br /> <span className='block mt-[2.6rem] '>Venenatis id sem blandit vestibulum nunc amet scelerisque urna. Massa odio enim vel at porttitor..</span>
           </p>
       </div>
    
        </div>
        <div className='w-[65rem] mt-[6rem]  sm:ml-8 lg:ml-[6rem]'>
    
    <h1 className='text-3xl font-bold -ml-[6rem] sm:text-7xl  mb-[3rem] text-center '>
    <span className='bg-gradient-to-r  block from-red-500 to-blue-500 text-transparent bg-clip-text'>More articles</span>
    </h1>
    <div className="grid grid-cols-1 w-[55rem] ml-[2rem] md:grid-cols-2 sm:px-4">
  {articles.map((article) => (
    <div key={article.id} className="flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]">
      <div className={`p-4 w-full h-[12rem] flex flex-col justify-end rounded-t-[0.4rem] ${article.blog}`}>
      
      </div>
      <Link to= {`/blogs/${article.id}`}>
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
     {Footer}
    </div>
  );
};

export default BlogDetails;
