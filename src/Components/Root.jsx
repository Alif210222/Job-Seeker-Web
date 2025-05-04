import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className=''>
            <header >
               <Navbar  ></Navbar>
            </header>
           
            <Outlet></Outlet>

        </div>
    );
};

export default Root;