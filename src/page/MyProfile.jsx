import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import userimg from "../assets/user.png"

const MyProfile = () => {
      const {user} = use(AuthContext)
      // console.log(user)
      // const photo = user.photoURL
      


    return (
        <div>
            <div className='text-center  '>
                <h1 className='text-3xl font-semibold text-sky-500 mt-10 underline'>User's Profile</h1>
                <div className='flex justify-center mt-10 mb-14' >
                <div className="card bg-base-100 w-96 shadow-sm border-2 border-sky-400 ">
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
   
    <div className="card-actions mt-10">
        <Link to="/">
              <button className="btn btn-primary">Back to Home</button>
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