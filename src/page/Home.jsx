import React, { useEffect } from 'react';

// import banner from ".././assets/job seeker banner.avif"
import JobSection from '../Components/JobSection';
import { useLoaderData } from 'react-router';
import Counter from '../Components/Counter';
import WebSiteWork from '../Components/WebSiteWork';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/MainBanner';
import TestimonialsSection from '../Components/TestimonialsSection';
// import Banner from '../Components/Banner';




const Home = () => {

 const data = useLoaderData()
//  console.log(data)



    return (
        <div className='md:p-16 p-6'>
               
               <Helmet>
                  <title>Home page </title>
               </Helmet>
     
               {/* this is banner  */}

                 <Banner />
    

           

           {/* how to website work  */}

              <WebSiteWork></WebSiteWork>



          {/* job section  */}
                <div className='mt-40 '>
                  <p className='lg:w-[600px]   mt-3 p-2 bg-sky-100 rounded flex items-center justify-center text-3xl font-medium mx-auto'> Choose your favourite company </p>
        
                   <div className='flex items-center gap-10 mt-14'>
                     <h1 className='text-3xl font-bold underline ml-6'>All Company :</h1>

           
                  </div>
                </div>

                {/* company section  */}
                <div className='p-8'>
                           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  rounded-2xl p-6 mt-4 '>

                             {
                                  data.map(company=> <JobSection key={company.id} company={company}></JobSection>)
                             }

                          </div>
                </div>

                   
                   <Counter></Counter>

                   <TestimonialsSection></TestimonialsSection>
               
              
        </div>
    );
};

export default Home;