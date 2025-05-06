import React from 'react';
import error from '../assets/404 image.jpg'


const ErrorPage = () => {
    return (
        <div>
                  <div className='flex flex-col items-center mt-6'>
                   

                    <div className='flex  justify-center   '>
                          <img src={error} alt="" className='rounded-2xl' />
                    </div>

                    <h1 className='text-xl font-bold text-red-600 mt-6 '>This page is not available at this moment.</h1>
                   

                    
                  </div>
        </div>
    );
};

export default ErrorPage;