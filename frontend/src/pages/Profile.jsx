import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext.jsx'

const Profile = () => {
  const {user}=useContext(AuthContext);
  console.log(user);
  return (
    <div className='bg-purple-950 h-screen flex justify-center'>
      <div className="ProfileContainer">
        <h1 className='text-3xl text-white font-bold text-center pt-10'>User Profile</h1>
        <div className='TableContainer flex justify-center mt-5'>
         {
          user.name!="" ? ( <table>
            <thead>
              <tr>
                <th className='border-2 border-white px-4 py-2 text-white'>Name</th>
                <th className='border-2 border-white px-4 py-2 text-white'>Email</th>
                <th className='border-2 border-white px-4 py-2 text-white'>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-2 border-white px-4 py-2 text-white'>{user.name}</td>
                <td className='border-2 border-white px-4 py-2 text-white'>{user.email}</td>
                <td className='border-2 border-white px-4 py-2 text-white'>{user.role}</td>
              </tr>
            </tbody>
          </table>):(<div className='text-3xl font-black text-center text-white'>
            You are not login.
          </div>)
         }
        </div>
      </div>
    </div>
  )
}

export default Profile
