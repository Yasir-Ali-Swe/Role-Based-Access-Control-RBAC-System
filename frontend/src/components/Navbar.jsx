import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext.jsx"
import toast from "react-hot-toast"
import { useContext } from 'react'
import axios from "axios"

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/logout", {}, { withCredentials: true });
      if (response.data.success) {
        toast.success(response.data.message);
        logout();
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }
  return (
    <div className='NavContainer w-screen h-12 bg-purple-950 flex justify-around items-center'>
      <div className='Logo text-white text-3xl font-black'>RBAC</div>
      <div className='Links'>
        <ul className='flex gap-12'>
          {
            user && (<>
              <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/">Home</Link></li>
              <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/profile">Profile</Link></li>
              {user?.role === "admin" && <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/admin">Admin</Link></li>}
            </>)
          }
        </ul>
      </div>
      <div className='LogInLogOut'>
        <ul className='flex gap-12'>
          {
            user.name !== "" ? (<>
              <li ><button onClick={handleLogout} className='text-white text-lg font-extrabold cursor-pointer'>Logout</button></li>
            </>) : (<>
              <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/login">Login</Link></li>
            </>)
          }
        </ul>
      </div>
    </div>

  )
}

export default Navbar;
