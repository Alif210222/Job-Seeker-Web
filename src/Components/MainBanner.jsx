// Banner.js
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import banner from "../assets/job seeker banner.avif"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(
      bannerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none', // Re-run every scroll into view
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill(); // Clean up animation on unmount
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      style={{
        // backgroundColor: '#61dafb',
        // padding: '40px',
        // borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        // margin: '100px auto',
        // maxWidth: '400px',
        // textAlign: 'center',
        // fontSize: '24px',
        // fontWeight: 'bold',
      }}
    >



         <div className='w-full md:flex justify-between gap-6 md:p-10 p-3 items-center border-2 border-sky-300 rounded-sm bg-sky-100'>
                      <div className=''>
                          <h1 className='md:text-3xl lg:text-6xl font-semibold mb-8'>Find your dream <br /> job today.....</h1>
                          <p className='mb-8'>Discover thousands of jobs tailored to your skills and goals. Whether you're starting out or looking for a fresh start, we’re here to help you take the next step in your career journey.</p>
      
                               <button className='md:text-xl border-2 border-white bg-gray-500 p-3 rounded-2xl shadow-2xl hover:bg-gray-400 hover:text-white duration-300'>Explore Now</button>
                      </div>
                      <img className='lg:w-[700px] md:w-[400px] w-full lg:h-[450px] md:h-[400px] mt-6 md:mt-0'  src={banner} alt="" />
                   </div>
    </div>
  );
};

export default Banner;
