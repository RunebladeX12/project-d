import React from 'react';
import { Link } from '@remix-run/react';


import person1Image from '../assets/images/person1.jpg';
import person2Image from '../assets/images/person2.jpg';
import person3Image from '../assets/images/person3.jpg';
import person4Image from '../assets/images/lady3.jpg';
import person5Image from '../assets/images/guy3.jpg';
import person6Image from '../assets/images/lady4.jpg';
import person7Image from '../assets/images/guy4.jpg';
import person8Image from '../assets/images/lady5.jpg';
import person9Image from '../assets/images/guy5.jpg';
import person10Image from '../assets/images/team-lady.jpg';

const testimonies = [
    {
      id: 1,
      img: person1Image,
      name: 'John Doe',
      location: 'Sydney, USA',
      text: 'I had an amazing experience with your services.The quality and attention to detail exceeded my expectations. Highly recommended!',
    },
    {
      id: 2,
      img: person2Image,
      name: 'Benny Roll',
      location: 'Sydney, New York',
      text: ' Your team went above and beyond to make sure I was satisfied. I appreciate the professionalism and dedication to excellence.',
    },
    {
      id: 3,
      img: person3Image,
      name: 'Raymond Gario',
      location: 'Sydney, Australia',
      text: 'The stylish living section is exactly what I was looking for. It added a unique and elegant touch to my home. Thank you!',
    },
    {
      id:4,
      img:person4Image,
      name: 'Mary Johnson',
      location: 'New York, USA',
      text: 'Impressive design and outstanding customer service. I\'m delighted with the results. Will definitely work with you again!',
     
    },
    {
      id:5,
      img:person5Image,
      name: 'Robert Smith',
      location: 'London, UK',
      text: 'Your attention to detail is impeccable. The realization of my project exceeded my expectations. Thank you for your creativity!',
    },
    {
      id:6,
      img:person6Image,
      name: 'Jennifer Davis',
      location: 'Sydney, Australia',
      text: 'The interior work you did for me was top-notch. It transformed my space into a beautiful and functional environment.',
    },
    {
      id:7,
      img:person7Image,
      name: 'Michael Wilson',
      location: 'Tokyo, Japan',
      text: 'I can\'t thank you enough for the wonderful project plan. It was well-thought-out and perfectly suited to my needs.',
    },
    {
      id:8,
      img:person8Image,
      name: 'Sarah Brown',
      location: 'Paris, France',
      text: 'The level of professionalism displayed by your team is commendable. I couldn\'t be happier with the outcome of my project.',
    },
    {
      id:9,
      img:person9Image,
      name: 'Christopher Lee',
      location: 'Toronto, Canada',
      text: 'From concept to completion, your team demonstrated expertise and creativity. I\'m thrilled with the end result!',
    },
    {id:10,
      img:person10Image,
      name: 'Amanda Martinez',
      location: 'Berlin, Germany',
      text: 'Working with your company was a pleasure. The communication, craftsmanship, and final product were all exceptional.',
    },
    {
      id: 11,
      img: person1Image,
      name: 'John Doe',
      location: 'Sydney, USA',
      text: 'Lauren ipsum is simply Tommy text of the type setting industry Epson has been',
    },
    {
      id: 12,
      img: person2Image,
      name: 'Benny Roll',
      location: 'Sydney, New York',
      text: 'Lauren Epson a simply dummy text of data setting industry Epson has been scrambled it to make a Time Book',
    },
    {
      id: 13,
      img: person3Image,
      name: 'Raymond Gario',
      location: 'Sydney, Australia',
      text: 'Alarm Epson is simply Timmy text of the type setting industry Epson has been scrambled',
    },
  
  ];

const Testimonial: React.FC = () => {

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
     <div className='ml-4 mb-[12rem] sm:ml-8 lg:ml-[5rem]'>
        <h1 className='text-3xl mb-[2rem] font-medium sm:text-7xl pt-[14rem] ml-[1.5rem] text-white'>
         Client <br /><span className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text'> Testimonials </span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'flex-start' }} className="flex-container flex-wrap w-[44rem] ml-[2rem] gap-[3rem]  gap-x-6">
 {testimonies.map((testimonial, index) => (
   <div
   key={testimonial.id}
   style={{ flex: 1 }}
   className={`gap-y-[1rem] flex-item min-w-[20rem] max-w-[20rem] flex flex-col justify-center py-[2rem] rounded-xl px-[2rem] mb-8 sm:mb-0 bg-gray-800 ${index === 1 ? 'center' : ''}`}
 >
   <div className='flex gap-x-2'>
     <span className="bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white"> </span>
     <span className="bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white"> </span>
     <span className="bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white"> </span>
     <span className="bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white"> </span>
     <span className="bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white"> </span>
   </div>
   <div>
     <p className="text-white h-auto text-[0.8rem] text-justify">{testimonial.text}</p>
   </div>
   <div className="flex mb-2 sm:mb-5">
     <div className="flex-shrink-0">
       <img
         src={testimonial.img}
         alt={testimonial.name}
         className="w-12 h-12 rounded-full object-cover"
       />
     </div>
     <div className="ml-4 mt-1">
       <h3 className="text-md text-white font-medium font2">{testimonial.name}</h3>
       <h5 className="text-sm text-white font2">{testimonial.location}</h5>
     </div>
   </div>
 </div>
 
  ))}
</div>

 <div>
   
 </div>
     </div>
     {Footer}
    </div>
  );
};

export default Testimonial;
