import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/user.slice";
import { setJobs } from "@/redux/jobs/job.slice";
import { JobCard } from "@/components/JobCard";
const Home = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const {jobs}=useSelector((state)=>state.job)
  const handleSignout = async () => {
    try {
      const response = await axios.get("/api/auth/sign-out");
      console.log(response.data);
      Dispatch(signoutSuccess());
      Navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/job/getjobs");
      const data=response.data
      console.log(data.jobs);
      Dispatch(setJobs(data.jobs))
      console.log(jobs)
    } catch (error) {}
  };

  useEffect(() => {
    fetchJobs();

    
  }, []);

  return (
    <div>
      <p>Home</p>
      {/* {currentUser && <p className="text-zinc-950">{currentUser.username} </p>} */}

      {currentUser ? (
        <h1>
          welcome {currentUser.username}
          <button onClick={handleSignout}>Signout</button>
          {currentUser.isAdmin && <button onClick={()=>Navigate("/ManageJobs")}>Manage Jobs</button>}
        </h1>
      ) : (
        <button onClick={() => Navigate("/signup")}>Signup/Signin</button>
      )}

      <div className="w-full h-[100vh]">
        {jobs && jobs.map((job,i)=>(<JobCard  key={job._id} title={job.title}/>))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Home;
