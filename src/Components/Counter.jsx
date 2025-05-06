import React from 'react';
import CountUp from 'react-countup';
import user from "../assets/user icon.png"
import pending from '../assets/pending user.png'
import company from "../assets/office.png"
import happy from "../assets/happy user.png"



const Counter = () => {
    return (
        <div className='text-center'>
        <h1 className='text-[30px] font-bold mb-4'>We Provide Best  Services</h1> 
        <p>Our platform provide best of use to fine your job and give you any kind of job related help. So stay connected with us . </p>
        {/* counter card */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center my-16 md:ml-18 lg:ml-14'>
             <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 h-64 space-y-5 shadow-2xl'>
                <img className='h-25  w-25 ml-10' src={user} alt="" />
                <h1 className='text-4xl  font-extrabold'>
                <CountUp duration={13} end={2156}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                 {({ countUpRef }) => <span ref={countUpRef} />}
               </CountUp>
                 </h1>
                <h3 className='-ml-6 text-lg font-bold'>Total User's</h3>
             </div>
             <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 h-64 space-y-5 shadow-2xl'>
              <img className='h-25  w-25 ml-10' src={happy} alt="" />
                <h1 className='text-4xl  font-extrabold'>
                <CountUp duration={15} end={1654}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                 {({ countUpRef }) => <span ref={countUpRef} />}
               </CountUp>
                 </h1>
                <h3 className='-ml-6 text-lg font-bold'>Successfull Review</h3>
             </div>
             <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 h-64 space-y-5 shadow-2xl'>
              <img className='h-25  w-25 ml-10' src={pending} alt="" />
                <h1 className='text-4xl  font-extrabold'>
                <CountUp duration={5} end={499}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                 {({ countUpRef }) => <span ref={countUpRef} />}
               </CountUp>
                 </h1>
                <h3 className='-ml-6 text-lg font-bold'>On pending...</h3>
             </div>
             <div className='p-6 border-1 border-none  bg-white rounded-xl  md:w-60 h-64 space-y-5 shadow-2xl'>
               <img className='h-25  w-25 ml-10' src={company} alt="" />
                <h1 className='text-4xl  font-extrabold'>
                 <CountUp duration={5} end={199}  suffix="+" enableScrollSpy  scrollSpyDelay={500} >
                 {({ countUpRef }) => <span ref={countUpRef} />}
               </CountUp>
          </h1>
                <h3 className='-ml-6 text-lg font-bold'>Total Company </h3>
             </div>
         
        </div>
    </div>
    );
};

export default Counter;