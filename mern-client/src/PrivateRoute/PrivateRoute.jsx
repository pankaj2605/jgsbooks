import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export default function PrivateRoute({children}) {

    const{user,loading}= useContext(AuthContext)
    const loaction =useLocation();

    if(loading){
        return <div className='text-center'>
            <Spinner aria-label='center-aligned spinner example'/>
        </div>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from: loaction}} replace></Navigate>
  )
}
