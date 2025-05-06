import React, { use, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate, useNavigate } from 'react-router';

const ResetPass = () => {
      const {user} = use(AuthContext)
      const [email , setEmail] = useState()
      const navigate = useNavigate()

        const handleReset = (e)=>{
              e.preventDefault()

              const email = e.target.email.value
            //   console.log(email)
            //   setEmail(email)




        }



    return (
        <div>
           
            
            <div className='p-4'>
                 <h1 className='text-3xl text-red-500 font-medium text-center mt-10'>Forget Password</h1>
               
               <div className='border border-sky-300 w-fit mx-auto p-6 my-20'>
               <form onSubmit={handleReset}>
                <h1 className='text-xl font-bold mb-6'>Enter your backup email </h1>
               <label className="label ">Email </label>
               <input type="email"   className="input" name="email" placeholder="Email" required/>
                      
                </form>

                <a href="http://www.gmail.com/" target="_blank">

                     <button type='submit' className='btn bg-red-300 mt-8 hover:bg-red-600'>Reset Password</button>
               </a>
                
               </div>
                

            </div>
        </div>
    );
};

export default ResetPass;