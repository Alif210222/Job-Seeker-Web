import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleJobDetailsCart from './SingleJobDetailsCart';

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
        <div  className='mt-16 md:p-16 p-6'>
            <h1 className='md:text-3xl font-medium text-blue-500 mb-10 border-2  text-center p-2 rounded-2xl ' >Available job of this Company</h1>
            <div className=' p-8 md:p-20 grid grid-cols-1 gap-10'>
               {
                 findJob.jobs.map(job => <SingleJobDetailsCart job={job} findJob={findJob}></SingleJobDetailsCart> ) 
               }
            </div>
          
            
        </div>
    );
};

export default JobDetails;