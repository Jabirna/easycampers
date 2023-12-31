import React from 'react'
import {auth} from '../firebaseConfig'

const AdminNav = (props) => {
    const {setSingin,setUser,singin}=props
  return (
    <div className='h-[30px] shadow-lg flex justify-between'>
        <h1 className='pl-3 text-sm pt-1'>Admin Pannel</h1>
        {singin && <h1 onClick={()=>{
            auth.signOut()
            setSingin(false)
            setUser()
            sessionStorage.setItem('userid','')
            sessionStorage.setItem('password','')
            }} className='pr-3 text-sm pt-1 cursor-pointer hover:text-red-400'>Logout</h1>}
    </div>
  )
}

export default AdminNav