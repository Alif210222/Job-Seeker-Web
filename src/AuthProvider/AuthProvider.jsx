import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    



    // state change functionality added 
      useEffect (()=>{
        const unSubscriber = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscriber()
        } 
      } , [])

 

    

    const userInfo ={
        user,
        setUser,
        createUser,
        loginUser
    } 

    return (
      <AuthContext value={userInfo}>
         { children}
      </AuthContext>
    );
};

export default AuthProvider;