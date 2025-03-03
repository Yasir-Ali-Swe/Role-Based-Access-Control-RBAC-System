import React from 'react'

const Profile = () => {
  return (
    <div className='bg-purple-950 h-screen flex justify-center'>
      <div className="ProfileContainer">
        <h1 className='text-3xl text-white font-bold text-center pt-10'>User Profile</h1>
        <div className='TableContainer flex justify-center mt-5'>
          <table>
            <thead>
              <tr>
                <th className='border-2 border-white px-4 py-2 text-white'>Name</th>
                <th className='border-2 border-white px-4 py-2 text-white'>Email</th>
                <th className='border-2 border-white px-4 py-2 text-white'>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-2 border-white px-4 py-2 text-white'>Yasir Ali</td>
                <td className='border-2 border-white px-4 py-2 text-white'>yasir@gmail.com</td>
                <td className='border-2 border-white px-4 py-2 text-white'>Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile
