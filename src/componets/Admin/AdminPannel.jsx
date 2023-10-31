import React,{useState} from 'react'
import AdminNav from './AdminNav'
import AdminLogin from './AdminLogin'
import AdminControls from './AdminControls'

const AdminPannel = () => {
    const[singin,setSingin]=useState(false)
    const[user,setUser]=useState()
    const props={setSingin,setUser,user,singin}
  return (
    <div>
        <AdminNav {...props}/>  
        {singin ? <AdminControls/> : <AdminLogin {...props}/>}  
    </div>
  )
}

export default AdminPannel