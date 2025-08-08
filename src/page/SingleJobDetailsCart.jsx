import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Helmet } from 'react-helmet-async';



const SingleJobDetailsCart = ({job,findJob}) => {
  const detailsRef = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(
      detailsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: detailsRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none', // Re-run every scroll into view
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill(); // Clean up animation on unmount
    };
  }, []);

    //    console.log(job)
    return (
        <div ref={detailsRef} className='border-2 rounded-2xl bg-sky-100 border-sky-300 p-3'>

              <Helmet>
                <title>Company Details</title>
              </Helmet>
           
            <div   className="  md:flex items-center  bg-base-100  shadow-sm border  border-sky-300 rounded-lg ">
  <figure className='p-2'>
    <img
    className='md:h-[250px] md:w-[800px]'
      src={job.bannerImage}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title ">Position : {job.title}</h2>
    <h3 className='mt-2 font-bold'>Type : {job.jobType}</h3>
    <h4 className='font-semibold text-red-500'>Salary : {job.salary}</h4>
    <p className='font-semibold text-red-500'>Work : {job.location}</p>
    <p className='mt-4'>We need a employ for this post.If you are interested and <span className='font-bold '>  have enough skill about this work .</span> please click on details button and see about job details .If you interested then  apply  for this post.</p>
  

     {/* details button modal section  */}

    <div className="card-actions mt-4">
     {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Job Details</button>
                     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                 <div className="modal-box">
                     <h3 className="font-bold text-lg">{job.title}</h3>
                     <p className="py-4"><span className='font-bold'>Description:</span>  {job.description}</p>
                     <p>
                     <span className='font-bold'>Requirements:</span> {job.requirements}  
                     </p>
                 <div className="modal-action ">
                 <form method="dialog">

                     {/* if there is a button in form, it will close the modal */}

                  
                      <a href={findJob.website} target="_blank" className="btn mr-18 bg-blue-500 text-white">Apply</a>
                   
                    
                    <button className="btn ml-60 bg-red-600 text-white">Close</button>
                    

                 </form>
           </div>
  </div>
</dialog>
    </div>
  </div>
</div>


        </div>
    );
};

export default SingleJobDetailsCart;