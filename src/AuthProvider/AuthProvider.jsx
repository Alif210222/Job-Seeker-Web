import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true)
    const [user,setUser] = useState(null)



    // creat user 
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // log in user 
    

    

    const userInfo ={
        createUser
    } 

    return (
      <AuthContext value={userInfo}>
         { children}
      </AuthContext>
    );
};

export default AuthProvider;