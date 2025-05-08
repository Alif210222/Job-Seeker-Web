import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import SingleJobDetailsCart from './SingleJobDetailsCart';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillHouseGearFill } from "react-icons/bs";

const JobDetails = () => {
      const data = useLoaderData()
      
      const {id} = useParams()
      const convertId = parseInt(id)
    //   console.log(typeof  convertId)

      // find kore match korboidr sathe  ...... 
       
      const findJob = data.find(singleJob => singleJob.id === convertId)   
    //   console.log(findJob)
      
       
    //  const { } = findJob || ""



    return (
        <div  className=' md:p-16 p-6'>
            <div className='mx-auto border-2 rounded-2xl border-[#ecab14] w-fit p-10 space-y-6'>
               
             
                          <button className='cursor-pointer flex gap-2 hover:shadow-2xl '>
                              <img className='w-10 border-2 border-black rounded-full p-1'  src={findJob.logo} alt="" />
                              <h2 className="card-title text-[#070707] text-3xl ">{findJob.name}</h2>
                          </button>
                   
                   
                    <div className='ml-8 flex gap-3 items-center '>
                        <BsFillHouseGearFill size={26} />
                        <p className='text-[26px] font-medium'>{findJob.industry}</p>
                    </div>
                   
 
                    <div className='flex gap-3 items-center ml-10'>
                    <FaLocationDot /> 
                    <p className='text-[16px] font-medium'>  {findJob.location}</p>
                    </div>

                    <p>If you want to know more about our company you can go to google & 
                      <br></br> visit our website address. <a href={findJob.website} target="_blank" className='text-blue-500 cursor-pointer'>{findJob.website}</a> </p>
                    

            </div>


            <h1 className='md:text-3xl font-medium text-blue-500 mb-10 border-2  text-center p-2 rounded-2xl mt-16 w-fit mx-auto' >Available job of this Company</h1>
            <div className=' p-8 lg:p-20 grid grid-cols-1 gap-10'>
               {
                 findJob.jobs.map(job => <SingleJobDetailsCart job={job} findJob={findJob}></SingleJobDetailsCart> ) 
               }
            </div>
          
            
        </div>
    );
};

export default JobDetails;