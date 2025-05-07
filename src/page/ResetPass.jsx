import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../AuthProvider/firebase.config';

const ResetPass = () => {
    const location = useLocation()
    const emailRef = useRef()




        // reset password section 
                const handleResetPass = ()=>{
                    const value = emailRef.current.value
                      alert("a password reset email send in your gmail")
                    // console.log(value)
                   sendPasswordResetEmail(auth,value)
                   .then(()=>{
                    // alert("a password reset email send in your gmail")
                   })
                   .catch(error=>{
                    console.log(error)
                   })
    
                    // navigate("/resetPage", {state:value})
    
                   
                }



    return (
        <div>
           
            
            <div className='p-4'>
                 <h1 className='text-3xl text-red-500 font-medium text-center mt-10'>Forget Password</h1>
               
               <div className='border border-sky-300 w-fit mx-auto p-6 my-20'>
               <form >
                <h1 className='text-xl font-bold mb-6'>Enter your backup email </h1>
               <label className="label ">Email </label>
               <input type="email" defaultValue={location?.state}  className="input" name="email" placeholder="Email" ref={emailRef} required/>
                      
                </form>

                <a href="http://www.gmail.com/" target="_blank">

                     <button onClick={handleResetPass} type='submit' className='btn bg-red-300 mt-8 hover:bg-red-600'>Reset Password</button>
               </a>
                
               </div>
                

            </div>
        </div>
    );
};

export default ResetPass;