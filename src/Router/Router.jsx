import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router";
 
import Root from '../Components/Root.jsx';
import Home from '../page/Home.jsx';
import About from '../page/About.jsx';
import Blog from './Blog.jsx';
import Profile from '../page/Profile.jsx';
  
  
  
  
   export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
             index:true,Component:Home,
             loader:()=>fetch("/jobdata.json")
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
            path:"/profile",
            Component:Profile
        },
       

      ]
    },
  ]);


