import React from 'react';
import error from '../assets/404 image.jpg'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
                  <div className='flex flex-col items-center mt-6'>
                   

                    <div className='flex  justify-center   '>
                          <img src={error} alt="" className='rounded-2xl' />
                    </div>

                    <h1 className='text-xl font-bold text-red-600 mt-6 '>This page is not available at this moment.</h1>
                    <Link to="/"><button className='text-center  bg-blue-600 text-white p-2 px-3 rounded-xl mt-6 mb-80 hover:bg-blue-400 duration-700 '>Back to Home </button>  </Link>

                    
                  </div>
        </div>
    );
};

export default ErrorPage;