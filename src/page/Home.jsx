import React, { useEffect } from 'react';

import banner from ".././assets/job seeker banner.avif"
import JobSection from '../Components/JobSection';
import { useLoaderData } from 'react-router';




const Home = () => {

 const data = useLoaderData()
//  console.log(data)



    return (
        <div className='md:p-16 p-6'>
             <div className='w-full md:flex justify-between gap-6 md:p-10 p-3 items-center border-2 border-sky-300 rounded-2xl bg-sky-100'>
                <div className=''>
                    <h1 className='md:text-6xl font-semibold mb-8'>Find your dream <br /> job today.....</h1>
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente voluptatibus nisi unde nihil quo delectus odio
                         tempora excepturi ?</p>

                         <button className='md:text-xl border-2 border-white bg-gray-500 p-3 rounded-2xl shadow-2xl hover:bg-gray-400 hover:text-white duration-300'>Explore Now</button>
                </div>
                <img className='md:w-[700px] w-full md:h-[450px] mt-6 md:mt-0'  src={banner} alt="" />
             </div>

             {/* after banner */}

                <div className='mt-36'>
                  <p className='md:w-[600px] md:ml-98 mt-3 p-2 bg-sky-100 rounded flex items-center justify-center text-3xl font-medium'> Choose your favourite company </p>
        
                   <div className='flex items-center gap-10 mt-14'>
                     <h1 className='text-3xl font-bold underline ml-6'>All Company :</h1>

           
                  </div>
                </div>

                {/* company section  */}
                <div className='p-8'>
                           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-2 border-sky-300 rounded-2xl p-6 mt-4 '>

                             {
                                  data.map(company=> <JobSection key={company.id} company={company}></JobSection>)
                             }

                          </div>
                </div>
              
               
              
        </div>
    );
};

export default Home;