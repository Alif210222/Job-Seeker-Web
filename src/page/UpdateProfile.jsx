import React from 'react';
import { Link } from 'react-router';

const UpdateProfile = () => {
    return (
        <div>


              
<div className='p-4'>
                 <h1 className='text-3xl text-red-500 font-medium text-center mt-10 underline'>Update Profile</h1>
               
               <div className='border-2 rounded-2xl border-sky-300 w-fit mx-auto p-10 mt-10 mb-20 '>
               <form >
                <h1 className='text-xl font-bold mb-6 underline'>Fill this input</h1>
                <div className='mb-4 mt-10'>  
                <label className="label text-xl font-bold">Name</label>
                <input type="text" className="input" name="name" placeholder="Type your name"  required/>
                </div>
          {/* <p className='text-md text-red-600 '></p> */}
              <div className=''>
               <label className="label  text-xl font-bold ">Photo Url</label>
               <input type="text" className="input" name="photo" placeholder="Photo Url" required/>
                      
               </div>

           </form>
           <div className='flex justify-between'>
            <Link to="/profile">
                  <button type='submit' className='btn bg-blue-500 mt-8 hover:bg-blue-400'>Back</button>
            </Link>
              
               <button type='submit' className='btn bg-green-500 mt-8 hover:bg-green-600'>Update Information</button>
           </div>
         



                             
               </div>
                

            </div>
        </div>
    );
};

export default UpdateProfile;