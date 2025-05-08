import { updateProfile } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../AuthProvider/firebase.config';
import { AuthContext } from '../AuthProvider/AuthContext';
import { use } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const UpdateProfile = () => {


    const {user,setUser,setLoading } = use(AuthContext)



     const handleUpdateUser=(e)=>{
           e.preventDefault()

          const name = e.target.name.value
          const photo = e.target.photo.value
          
          console.log(name,photo)



          // update profile

          updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            setLoading(true)
            // console.log(user)

            setUser({...user , displayName : name , photoURL :photo})
            toast("Profile update successful")

          }).catch((error) => {
           console.log(error)
          });

     }



    return (
        <div>


              
<div className='p-4'>
                 <h1 className='text-3xl text-red-500 font-medium text-center mt-10 underline'>Update Profile</h1>
               
               <div className='border-2 rounded-2xl border-sky-300 w-fit mx-auto p-10 mt-10 mb-20 '>
     <form  onSubmit={handleUpdateUser}>
                <h1 className='text-xl font-bold mb-6 underline'>Fill this input</h1>
                <div className='mb-4 mt-10'>  
                <label className="label text-xl font-bold">Name</label>
                <input type="text" className="input" name="name" placeholder="Type your name"  required/>
                </div>
              
                <div className=''>
               <label className="label  text-xl font-bold ">Photo Url</label>
               <input type="text" className="input" name="photo" placeholder="Photo Url" required/>
                      
               </div>


               <div className='flex justify-between'>
            <Link to="/profile">
                  <button type='submit' className='btn bg-blue-500 mt-8 hover:bg-blue-400'>Back</button>
            </Link>

            <button type='submit' className='btn bg-green-500 mt-8 hover:bg-green-600'>Update Information</button>
               
           </div>
               

    </form>


          
         



                             
               </div>
                

            </div>
        </div>
    );
};

export default UpdateProfile;