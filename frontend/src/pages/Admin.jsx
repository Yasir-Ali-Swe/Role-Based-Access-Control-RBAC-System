import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import toast from 'react-hot-toast'
const Admin = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const getUsers=async ()=>{
      try {
        const response=await axios.get("http://localhost:3000/api/admin/getAllUsers",{withCredentials:true});
      if(response.data.success){
        setUsers(response.data.users);
      }
      } catch (error) {
        toast.error("Something went wrong")
      }
    }
    getUsers();
  },[])
  return (
    <div className='bg-purple-950 h-screen flex justify-center'>
    <div className="ProfileContainer">
      <h1 className='text-3xl text-white font-bold text-center pt-10'>Admin Panel</h1>
      <div className='TableContainer flex justify-center mt-5'>
        <table>
          <thead>
            <tr>
              <th className='border-2 border-white px-4 py-2 text-white'>Sr</th>
              <th className='border-2 border-white px-4 py-2 text-white'>Name</th>
              <th className='border-2 border-white px-4 py-2 text-white'>Email</th>
              <th className='border-2 border-white px-4 py-2 text-white'>Role</th>
              <th className='border-2 border-white px-4 py-2 text-white'>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user,index)=>{
              return(
                <tr key={index}>
                <td className='border-2 border-white px-4 py-2 text-white'>{index+1}</td>
                  <td className='border-2 border-white px-4 py-2 text-white'>{user.name}</td>
                  <td className='border-2 border-white px-4 py-2 text-white'>{user.email}</td>
                  <td className='border-2 border-white px-4 py-2 text-white'>{user.role}</td>
                  <td className='border-2 border-white px-4 py-2 text-white'><button className='cursor-pointer bg-red-600 px-3 py-1 border border-white rounded-md text-xl font-bold text-white'>Delete</button></td>
                </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Admin
