import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import userimg from "../assets/user.png"
import Loading from '../Components/Loading';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
      const {user,loading} = use(AuthContext)
      // console.log(user)
      // const photo = user.photoURL
      
      if(loading){
        return <Loading></Loading>
      }


    return (
        <div>
            <Helmet>
              <title>Profile</title>
            </Helmet>
            <div className='text-center  p-10'>
                <h1 className='text-3xl font-semibold text-sky-500  underline mb-10'>User's Profile</h1>
                <div className='flex justify-center ' >
                <div className="card  w-96 shadow-sm border-2 border-sky-400  bg-sky-100">
  <figure className="px-10 pt-10">
    <img className="border border-amber-700 w-50 h-50 rounded-full p-2"
      src={user ? user.photoURL : userimg}
      alt="photo"
       />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">User Name: {user && user.displayName }</h2>
    <h3 className=' text-[16px] font-bold'>User's type:<span className='text-[16px] font-medium text-green-500'> Verified</span> </h3>
    <h3 className='text-[16px] font-bold'>User's Email: <span className='font-semibold text-red-600'>{user && user.email}</span> </h3>
   
    <div className="card-actions mt-10 ">



        <Link to="/">
              <button className="btn btn-primary hover:bg-blue-500">Back to Home</button>
        </Link>
        
        <Link to="/updateProfile">
              <button className="btn bg-green-500 hover:bg-green-400 ml-6">Update Profile</button>
        </Link>


     
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;