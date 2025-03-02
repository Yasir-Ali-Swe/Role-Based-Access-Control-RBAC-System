import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password);
  }
  return (
    <div className='LoginForm w-screen h-screen flex justify-center items-center bg-purple-950'>
      <div className='FormContainer w-[35%] border-2 border-white rounded-lg py-6'>
        <h1 className='text-3xl text-white font-bold text-center'>Registration</h1>
        <form onSubmit={handelSubmit} className='flex flex-col justify-center items-center gap-4 mt-5 w-[100%]'>
        <input type="text" placeholder='Enter your name...' onChange={(e)=>setName(e.target.value)} className='my-3 text-white px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none'/>
          <input type="text" placeholder='Enter your email...' onChange={(e)=>setEmail(e.target.value)} className='my-3 text-white px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none'/>
          <input type="text" placeholder='Enter your password...' onChange={(e)=>setPassword(e.target.value)} className='my-3 text-white px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none'/>
          <input type="submit" value="Registration" className="my-3 bg-white text-xl font-medium text-purple-950 px-3 py-[6px] w-[50%] border-2 border-white rounded-lg focus:border-2 focus:border-white focus:rounded-lg focus:outline-none cursor-pointer" />
          <h1 className='text-white text-lg font-medium'>Already have account?<Link to="/login" className='cursor-pointer underline pl-2'>Login.</Link></h1>
        </form>
      </div>
    </div>
  )
}

export default Registration;
