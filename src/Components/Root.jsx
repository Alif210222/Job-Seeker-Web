import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div className=''>
            <header >
               <Navbar  ></Navbar>
            </header>
           
            <Outlet></Outlet>


            <Footer></Footer>

        </div>
    );
};

export default Root;