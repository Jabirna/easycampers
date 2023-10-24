import React from 'react'
import AdminNav from './AdminNav'

const AdminLogin = () => {
  return (
    <div className='w-full h-[95vh] flex justify-center items-center'>
        <div className='h-[40%] max-sm:w-[95%] w-[50%] shadow-lg shadow-gray-400 p-3'>
            <div>
                <h1 className='text-center text-lg font-mono font-bold uppercase mb-4'>Easy Campers Login</h1>
                <h1 className='text-sm font-sans mb-1'>User Name</h1>
                <input type='text' className='py-1 pl-2 rounded-md w-full shadow-sm ring-1 ring-gray-500 inset-1 placeholder:pl-3 ' placeholder='user name'/>
                <h1 className='text-sm font-sans mb-1'>Password</h1>
                <input type='password' className='py-1 pl-2 rounded-md w-full shadow-sm ring-1 ring-gray-500 inset-1 placeholder:pl-3' placeholder='password'/>
                <button className='py-1 w-full bg-green-600 text-white rounded-md mt-3'>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin