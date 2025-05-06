import React from 'react';
import Navbar from './Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div className=''>
            <header >
               <Navbar  ></Navbar>
            </header>
           <div className='bg-gray-100'>
              <Outlet></Outlet>

           </div>
            

            <Footer></Footer>
    <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Root;