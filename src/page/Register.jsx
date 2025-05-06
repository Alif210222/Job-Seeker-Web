import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../AuthProvider/firebase.config';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const  {createUser,updateUser,setUser} = use(AuthContext)
  const navigate = useNavigate()


// logIn with google

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
                 })
     
               }





// register function added here 

      const handleRegister = (e)=>{
            e.preventDefault()
            const name = e.target.name.value
            const photo = e.target.photo.value 
            const email = e.target.email.value
            const password= e.target.password.value  

        //    console.log(name,photo,email,password) 

        // creat user function 
        createUser(email,password)
        .then(result=>{
            const user = result.user
              // console.log(user)

      // update data 
              updateUser({displayName : name , photoURL :photo })
              .then(()=>{
                setUser({...user , displayName : name , photoURL :photo})

                navigate("/")
              })


        })
        .catch(error=>{
             console.log(error)
        })



      } 


    return (
        <div>
            <Helmet>
              <title>Register</title>
            </Helmet>
            
            <div className="hero bg-[#f0eeee] min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-[#cdcbcb] w-full max-w-sm  shrink-0 shadow-2xl border p-14 ">
    <h1 className="text-4xl font-bold">Register now!</h1>
      <div className="card-body ">
        <form onSubmit={handleRegister} className="fieldset">

          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="Type your name"  required/>
          {/* <p className='text-md text-red-600 '></p> */}

          <label className="label">Photo Url</label>
          <input type="text" className="input" name="photo" placeholder="Photo Url" required/>

          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" required/>


          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" required />
          
          <button type='submit' className="btn btn-neutral mt-4 hover:bg-gray-600">Register</button>
        </form>


               {/* login with google */}

               <button onClick={handleGoogleLogin}  type='submit' className="btn bg-white text-black border-[#e5e5e5]">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
              </button>    



        <p className='text-md font-bold mt-4'>If,you have no account , <Link to="/login" className='text-pink-600 text-md font-bold underline'>Login</Link></p>
      </div>
    </div>
  </div>
</div>
    
        </div>
    );
};

export default Register;
