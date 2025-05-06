import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../AuthProvider/firebase.config';
import { Helmet } from 'react-helmet-async';

const LogIn = () => {
    const {loginUser,setUser} = use(AuthContext)
    const [error , setError] = useState('')
    const emailRef = useRef()
    
    
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    
    

          // login with google
    const provider = new GoogleAuthProvider

    const handleGoogleLogin =()=>{
        signInWithPopup(auth , provider )
           .then(result =>{
            //  console.log(result)
             setUser(result.user)
             navigate(location?.state || "/")
            // navigate("/")
            })  
            .catch(error=>{
             console.log(error)
             setError(error)
            })

          }




// log in function 
     const handleLogin=(e)=>{
          e.preventDefault()

          const email = e.target.email.value
          const password = e.target.password.value
        //   console.log(email,password)

          // login with email & pass 
          loginUser(email,password)
          .then(result =>{
            const user = result.user
            // console.log(user)
            setUser(user)
            navigate(location?.state || "/" )
            // navigate("/")


          })
          .catch(error=>{
             console.log(error.code)
             setError(error.code)
            
          })


          console.log(emailRef.current.value)

     }

           // reset password section 
            const handleResetPass = ()=>{
                const value = emailRef.current.value
                console.log(value)
                navigate("/resetPage", {state:value})

               
            }

        

    return (
        <div>
            <div>
            <Helmet>
               <title>Login</title>
              </Helmet>


             <div className="hero bg-[#f0eeee] min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-[#cdcbcb]  shrink-0 shadow-2xl border p-10">
    <h1 className="text-4xl font-bold">Login now!</h1>
      <div className="card-body ">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>

                                  {/* user log in korle user er email reset password field e dite hobe    ref={emailRef} */}
          <input type="email" className="input" name='email'  placeholder="Email" ref={emailRef} required/>
          <label className="label">Password</label>
          <input type="text" className="input" name='password' placeholder="Password"  />
          <p className='text-md text-red-600 text-[14px] mb-4'>{error} </p>
         
                  <button  type='submit' onClick={handleResetPass} className="link link-hover  text-red-500 mt-3">Forgot password?</button>
         
          

          <button   className="btn btn-neutral mt-4 hover:bg-gray-700">Login</button>
   
        </form>

               {/* login with google */}

       <button onClick={handleGoogleLogin}  type='submit' className="btn bg-white text-black border-[#e5e5e5]">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
      </button>
     
   



        <p className='text-md font-bold'>If,you have no account , <Link to="/register" className='text-pink-600 text-md font-bold underline'>Register</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default LogIn;