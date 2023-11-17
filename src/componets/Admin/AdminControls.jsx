import React,{useState,useEffect} from 'react'
import BookingDetails from './BookingDetails'
import ServiceManagement from './ServiceManagement'

const AdminControls = (props) => {
  const [activeSection,setActiveSection]=useState('booking')
  const {sessionTimeout,setSingin}=props
  useEffect(()=>{
    console.log(sessionTimeout)
    console.log(new Date().getTime())
    if(sessionTimeout<new Date().getTime()){
      console.log("session clear")
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('password');
      setSingin(false)
    }
  })
  return (
    <div>
      <div className='w-full h-12 border-b-[2px]'>
        <button onClick={(e)=>setActiveSection(e.target.name)} name='booking' className={`cursor-pointer h-10 mt-2 z-10 ${activeSection=='booking'?'bg-white':''} px-2 border-l-[2px] border-r-[2px] border-b-0`}>Booking Details</button>
        <button onClick={(e)=>setActiveSection(e.target.name)} name='service' className={`cursor-pointer h-10 mt-2 z-10 ${activeSection=='service'?'bg-white':''} px-2 border-l-[2px] border-r-[2px] border-b-0`}>Service Management</button>
      </div>
      {
        activeSection=='booking'?
          <BookingDetails/>:
          activeSection=='service'?
            <ServiceManagement/>:''
      }
    </div>
  )
}

export default AdminControls