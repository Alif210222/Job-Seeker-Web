import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const WebSiteWork = () => {

    const workRef = useRef(null);

    useEffect(() => {
        const anim = gsap.fromTo(
            workRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: workRef.current,
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
        <div     className=' mt-40 flex flex-col justify-center '>
              
             <h1 className='lg:w-[600px] mb-10 mx-auto mt-3 p-2 bg-sky-100 rounded flex items-center justify-center text-3xl font-medium'>How this website works</h1>   
             {/* website working system */}
             <div   ref={workRef}   className='mx-auto'>

         
             <div className='grid grid-cols-1 md:grid-cols-2 gap-30 mt-14 '>
                 
                  <div className="card  md:w-70 lg:w-96 bg-[#f9e392] border-[#f4c41a] card-md shadow-sm border-2 ">
                       <div className="card-body">
                         <h2 className="card-title bg-[#faf4d7] w-fit p-2  rounded-xl mb-4">Step- 1</h2>
                         <p>First of all, you can browse our website then find your work relable company . And after that click company details button. </p>
                         <div className="justify-end card-actions">
                           
                         </div>
                       </div>
                 </div>
                  <div className="card  md:w-70 lg:w-96  card-md shadow-sm border-2 bg-[#c5e6f5] border-[#1aa0f4]">
                       <div className="card-body">
                         <h2 className="card-title bg-[#daefef] w-fit p-2  rounded-xl mb-4">Step- 2</h2>
                         <p>When you get  company details page then you can see, whichjob is Available for this company now . </p>
                         <div className="justify-end card-actions">
                         
                         </div>
                       </div>
                 </div>
                  <div className="card  md:w-70 lg:w-96  card-md shadow-sm border-2 bg-[#dcf47b] border-[#b0d80f]">
                       <div className="card-body">
                         <h2 className="card-title bg-[#e5f6d4] w-fit p-2  rounded-xl mb-4">Step- 3</h2>
                         <p>Then you choose your skillfull work and click job details button then apply for this job on there website.</p>
                         <div className="justify-end card-actions">
                          
                         </div>
                       </div>
                 </div>
                  <div className="card  md:w-70 lg:w-96  card-md shadow-sm border-2 bg-[#f7bb38] border-[#d8980f]">
                       <div className="card-body">
                         <h2 className="card-title bg-[#f6e8da] w-fit p-2 rounded-xl mb-4">Step- 4</h2>
                         <p>Now, your task is done . if you call this job interview.Then we will mail you on your gmail account . Thank you !</p>
                         <div className="justify-end card-actions">
                          
                         </div>
                       </div>
                 </div>


            </div> 
        </div>
             
             
       </div>
    );
};

export default WebSiteWork;