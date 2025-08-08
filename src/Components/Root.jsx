import React from 'react';
import Navbar from './Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className=''>
            <header >
               <Navbar  ></Navbar>
            </header>
           <div className='bg-gradient-to-br from-cyan-100 via-blue-200 to-indigo-300   '>
              <Outlet></Outlet>

           </div>

            <ToastContainer />
            

            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>

        </div>
    );
};

export default Root;