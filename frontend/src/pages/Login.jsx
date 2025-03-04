import React, { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {AuthContext} from "../Context/AuthContext.jsx"

const Login = () => {
  const {user,login}=useContext(AuthContext);
  const navigate=useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handelSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:3000/api/auth/login',{email,password},{withCredentials:true});
      if(response.data.success){
        toast.success(response.data.message);
        login(response.data.user.name,response.data.user.email,response.data.user.role);
        navigate("/");
      }
      
    } catch (error) {
      toast.error("Something went wrong");
    }
    
  }
  return (
    <div className='LoginForm w-screen h-screen flex justify-center items-center bg-purple-950'>
      <div className='FormContainer w-[35%] border-2 border-white rounded-lg py-6'>
        <h1 className='text-3xl text-white font-bold text-center'>Login</h1>
        <form onSubmit={handelSubmit} className='flex flex-col justify-center items-center gap-4 mt-5 w-[100%]'>
          <input type="text" placeholder='Enter your email...' onChange={(e)=>setEmail(e.target.value)} className='my-3 text-white px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none'/>
          <input type="text" placeholder='Enter your password...' onChange={(e)=>setPassword(e.target.value)} className='my-3 text-white px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none'/>
          <input type="submit" value="Login" className="my-3 bg-white text-xl font-medium text-purple-950 px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none cursor-pointer" />
          <h1 className='text-white text-lg font-medium'>Not have account?<Link to="/registration" className='cursor-pointer underline pl-2 '>Register here.</Link></h1>
        </form>
      </div>
    </div>
  )
}

export default Login
