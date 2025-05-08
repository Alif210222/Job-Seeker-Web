import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from './firebase.config';
import { AuthContext } from './AuthContext';
import { ToastContainer, toast } from 'react-toastify';


const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true)
    const [user,setUser] = useState(null)
    // console.log(user)

    


    // creat user 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // log in user 
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // log out user 
    const logOutUser =() =>{
        setLoading(true)
        toast("Logout successful !")
        return signOut(auth)
    }

    // update user 
    const updateUser =(updateData)=>{

        return updateProfile(auth.currentUser,updateData )
    }

    



    // state change functionality added 
      useEffect (()=>{
        const unSubscriber = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscriber()
        } 
      } , [])

 

    

    const userInfo ={
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        loginUser,
        logOutUser,
        updateUser
    } 

    return (
      <AuthContext value={userInfo}>
         { children}
      </AuthContext>
    );
};

export default AuthProvider;