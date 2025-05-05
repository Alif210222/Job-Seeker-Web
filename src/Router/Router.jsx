import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router";
 
import Root from '../Components/Root.jsx';
import Home from '../page/Home.jsx';
import About from '../page/About.jsx';
import Blog from '../page/Blog.jsx';

import JobDetails from '../page/JobDetails.jsx';
import MyProfile from '../page/MyProfile.jsx';
import LogIn from '../page/LogIn.jsx';
import Register from '../page/Register.jsx';
import Loading from '../Components/Loading.jsx';
import PrivetRoute from '../AuthProvider/PrivetRoute.jsx';
  
  
  
  
   export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
             index:true,Component:Home,
             loader:()=>fetch("/jobdata.json"),
            HydrateFallback:Loading
        },
        {
         path:"/about",
         Component:About

        },
        {
        path:"/blog",
        Component:Blog
        },
        {
            path:"/jobDetails/:id",
            loader:()=>fetch("/jobdata.json"),
            HydrateFallback:Loading,
            Component:JobDetails
        },
        {
            path:"/profile",
            HydrateFallback:Loading,
            element:<PrivetRoute><MyProfile></MyProfile></PrivetRoute>
           
        },
        {
            path:"/login",
            Component:LogIn
        },
        {
            path:"/register",
            Component:Register
        }
       

      ]
    },
  ]);


