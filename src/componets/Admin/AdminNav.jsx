import React from 'react'
import {auth} from '../firebase'

const AdminNav = (props) => {
    const {setSingin,setUser}=props
  return (
    <div className='h-[30px] shadow-lg flex justify-between'>
        <h1 className='pl-3 text-sm pt-1'>Admin Pannel</h1>
        <h1 onClick={()=>{
            auth.signOut()
            setSingin(false)
            setUser()
            }} className='pr-3 text-sm pt-1 cursor-pointer hover:text-red-400'>Logout-{'>'}</h1>
    </div>
  )
}

export default AdminNav