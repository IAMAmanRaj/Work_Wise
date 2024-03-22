import React from 'react'
import { ToastContainer, toast } from "react-toastify";


import { useSelector } from 'react-redux';
const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
 
  return (
    <div>
        <p>Home</p>
        {
          currentUser && (
            <p className='text-zinc-950'>{currentUser.username} </p>
            
          )
        
          }
           {
          currentUser && (
            <p className='text-zinc-950'>{currentUser.email} </p>
            
          )
        
          }
           {
          currentUser && (
            <p className='text-zinc-950'>{currentUser._id} </p>
            
          )
        
          }
      
        <ToastContainer/>
    </div>
  )
}

export default Home