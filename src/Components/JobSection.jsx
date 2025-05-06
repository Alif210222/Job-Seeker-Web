import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillHouseGearFill } from "react-icons/bs";
import { Link } from 'react-router';


const JobSection = ({company}) => {
        // console.log(data)
      
        //  console.log(company)


    return (

        <div className=''>
        
         {/* company cart */}
            <div className="card h-[280px]  bg-[#faf2d6] card-md shadow-sm transform transition duration-500 hover:rotate-1 hover:scale-105 shadow hover:shadow-xl cursor-pointer">
                 <div className="card-body space-y-4">
                    <Link to={`/jobDetails/${company.id}`}>
                          <button className='cursor-pointer flex gap-2 hover:shadow-2xl '>
                              <img className='w-10 border-2 border-black rounded-full p-1'  src={company.logo} alt="" />
                              <h2 className="card-title text-[#070707]">{company.name}</h2>
                          </button>
                    </Link>
                   
                    <div className='ml-8 flex gap-3 items-center '>
                        <BsFillHouseGearFill size={26} />
                        <p className='text-[16px] font-medium'>{company.industry}</p>
                    </div>
                   
 
                    <div className='flex gap-3 items-center ml-10'>
                    <FaLocationDot /> 
                    <p className='text-[16px] font-medium'>  {company.location}</p>
                    </div>
                  
                    
                 <div className=" justify-center card-actions">
                    <Link to={`/jobDetails/${company.id}`}> 
                          <button className="btn bg-[#edcf9a] hover:bg-white border-2 border-amber-50 hover:shadow-2xl ">View Company Details</button>
                    </Link>
                    
                </div>
           </div>
         </div>

             
        </div>
    );
};

export default JobSection;