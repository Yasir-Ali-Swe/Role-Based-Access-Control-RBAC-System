import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='NavContainer w-screen h-12 bg-purple-950 flex justify-around items-center'>
        <div className='Logo text-white text-3xl font-black'>RBAC</div>
        <div className='Links'>
          <ul className='flex gap-12'>
            <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/">Home</Link></li>
            <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/profile">Profile</Link></li>
            <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
        <div className='LogInLogOut'>
          <ul className='flex gap-12'>
            <li className='text-white text-lg font-extrabold cursor-pointer'><Link to="/login">Login</Link></li>
            <li ><button className='text-white text-lg font-extrabold cursor-pointer'>Logout</button></li>
          </ul>
        </div>
    </div>

  )
}

export default Navbar;
