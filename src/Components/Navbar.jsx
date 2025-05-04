import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links= <>
    
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/'>Home</NavLink></li>
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/about'>About</NavLink></li>
      <li  className='font-bold text-lg lg:mr-3'><NavLink className={({isActive})=> isActive ? "text-blue-600 border-b-2" : "" } to='/blog'>Blogs</NavLink></li>
      
    
    
    </>

    
    return (
        <div>
            <div className="navbar bg-sky-100 shadow-sm ">

  <div className="navbar-start ml-10">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl  md:text-3xl hover:bg-white">Job Seeker BD</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
         links
       }
    </ul>
  </div>
   

  <div className="navbar-end mr-14 space-x-4">
    <Link to='/profile' className='btn text-lg border-2 border-sky-500 hover:shadow-2xl hidden md:flex'>Profile</Link>
    <Link className="btn text-lg border-2 border-sky-500 hover:shadow-2xl ">Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;