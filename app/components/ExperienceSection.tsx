import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="w-full  py-10">
      <div className="flex justify-between items-center  max-w-[66rem] font2 font-medium p-4 sm:py-8 sm:ml-[5rem] ">
        {/* Division 1 */}
        <div className="w-1/4 h-20 flex items-center justify-center pr-[5rem] border-r-[0.07rem] border-white">
          {/* Content for Division 1 */}
          <div className="sm:hidden">
            <span className="font1 text-5xl text-customColor2">12</span><br />
            <span className="text-xs">years of <br />experience</span>
          </div>
          <div className="hidden sm:block sm:flex flex-col items-center justify-center">
            <span className=" text-5xl text-white">12+</span>
            <span className="text-sm text-white">years of experience in</span>
            <span className='text-white text-sm'>Design</span>

          </div>
        </div>

        {/* Division 2 */}
        <div className="w-1/4 h-20 flex items-center pr-[5rem] justify-center border-r-[0.07rem] border-white">
          {/* Content for Division 2 */}
          <div className="sm:hidden">
            <span className="text-5xl text-white">85</span><br />
            <span className="text-xs">success <br />projects</span>
          </div>
          <div className="hidden sm:block sm:flex flex-col items-center justify-center">
            <span className="text-5xl text-white">85+</span>
            <span className="text-sm text-white">successful Projects</span>
            <span className='text-sm text-white'> Completed</span>
          </div>
        </div>

        {/* Division 3 */}
        <div className="w-1/4 h-20 flex items-center justify-center ">
          {/* Content for Division 3 */}
          <div className="sm:hidden">
            <span className="font1 text-5xl text-customColor2">15</span><br />
            <span className="text-xs">Active </span><br />
            <span className="text-xs">projects </span>
          </div>
          <div className="hidden sm:block sm:flex flex-col items-center justify-center">
            <span className="font1 text-5xl text-white">15+</span>
            <span className="text-sm text-white">Global Customers</span>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default ExperienceSection;
