import React,{useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
const ManageJobs = () => {
    const Navigate = useNavigate();
    const Dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    const fetchAdminJobs=async()=>{
        const response=await axios.get(`/api/job/getjobs?userId=${currentUser._id}`)
    }

    useEffect(() => {
     

    
     
    }, [])
    
  return (
    <div>{currentUser._id}</div>
  )
}

export default ManageJobs