import React,{useState} from 'react'
import {bookingbg} from '../image/index'
import campfireGif from '../image/gif/move2.gif'
import { addDoc, collection ,getDocs} from 'firebase/firestore/lite'
import { db } from './firebaseConfig'

const Booking = () => {
  //saving booking datas
  const[name,setName]=useState('')
  const[phone,setPhone]=useState(0)
  const[email,setEmail]=useState('')
  const[startDate,setStartDate]=useState('')
  const[endDate,setEndDate]=useState('')
  const[noOfPeople,setNoOfPeople]=useState(0)

  const savingToDb=async ()=>{
    console.log({name,phone,email,startDate,endDate,noOfPeople})
    try{
      const dbRef=addDoc(collection(db,"booking"),{
        name,phone,email,startDate,endDate,noOfPeople
      })
      console.log(dbRef.id)
    }catch(e){
      console.log("Error:"+e)
    }
  }
  return (
    <div id='booking' className='mt-3 p-2 flex  bg-cover' style={{backgroundImage:`url(${bookingbg})`,height:'100%',width:'100%'}}>
        <div className='w-[100%] p-6 flex flex-wrap justify-center'>
            <h1 className='w-full text-center text-[30px] font-bold text-white font-mono mb-4 uppercase'>Booking Your Best Tour Camping</h1>
            <div className='max-sm:w-full md:w-[30%]'>
                <label className='text-md font-mono font-medium text-left block  pl-2 text-white '>Name</label>
                <input type='text' onChange={(e)=>setName(e.target.value)} className='p-1 border-none ring-1 ring-inset ring-gray-300 bg-gray-50 rounded-md w-full ' placeholder='enter your name'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>Phone Number</label>
                <input type='number' onChange={(e)=>setPhone(e.target.value)} className='p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ' placeholder='your phone number'/>
                <label className='text-md font-mono font-medium text-left block pt-1  pl-2 text-white '>Email</label>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} className='p-1 border-none ring-1 ring-inset ring-gray-300 bg-gray-50 rounded-md w-full ' placeholder='email address'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>start date</label>
                <input type='date' onChange={(e)=>setStartDate(e.target.value)} className='p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ' placeholder='start date'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>End date</label>
                <input type='date' onChange={(e)=>setEndDate(e.target.value)} className='p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ' placeholder='end date'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>Number of People</label>
                <input type='number' onChange={(e)=>setNoOfPeople(e.target.value)} className='p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ' placeholder='your phone number'/>
                <button onClick={savingToDb} className='text-md p-3 rounded-md bg-green-500 text-white font-mono font-bold w-full mt-4 uppercase'>book</button>
            </div>
            <div className=' w-full ms-5 mt-4  max-w-[320px] max-h-[320px] '>
                <div className='rounded-2xl bg-cover bg-center h-full w-full' style={{backgroundImage:`url(${campfireGif})`}}></div>
            </div>
        </div>     
    </div>
  )
}

export default Booking