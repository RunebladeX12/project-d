import React from 'react';

const AboutHome: React.FC = () => {


  return (
    <div className=''>
         <div className={` bg-opacity-60 p-4 text-white sm:p-8 ml-4 sm:ml-8 lg:ml-[5rem] lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]`}>
          <h1 className="text-3xl sm:text-5xl font2 w-10/12 sm:w-4/5 lg:w-3/5">
            Hi, I am <br /> <span className='mt-4 block'>  Kartik Bansal</span>
          </h1>
          <p className="sm:mt-6 text-md w-4/5 sm:text-xl ">
           Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow
          </p>
          <div className="flex gap-x-6 sm:gap-x-4  mt-4">
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className="icon-[basil--facebook-solid] w-4 h-4 text-white "> </span></div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[mdi--twitter] w-4 h-4 text-white "> </span> </div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[ri--linkedin-fill] w-4 h-4 text-white "></span></div> 
        <div className='bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full'>   <span className=" icon-[ri--instagram-line] w-4 h-4 text-white "></span></div>


          
          
          
        </div>
        </div>
        <div className='flex justify-between w-[59rem] ml-[7rem]'>
            <div className='picture h-[25rem] w-[17rem] rounded-md'>

            </div>
            <div className='picture2 h-[25rem] w-[23rem] rounded-md'>

            </div>
            <div className='flex flex-col gap-y-[1rem] h-[25rem] w-[17rem] rounded-md'>
            <div className='picture2 h-[12rem] w-[17rem] rounded-md'>

             </div>
           <div className='picture3 h-[12rem] w-[17rem] rounded-md'>

            </div>
            </div>
        </div>
    </div>
  );
};

export default AboutHome;
