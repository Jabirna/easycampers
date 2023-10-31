import React,{useState,useRef, useEffect} from 'react'
import {bookingbg} from '../image/index'
import campfireGif from '../image/gif/move2.gif'
import { addDoc, collection ,getDocs} from 'firebase/firestore/lite'
import { db } from './firebaseConfig'

const Booking = () => {
  //saving booking datas
  const [formData,setFormData]=useState({});
  const [formError,setFormError]=useState({})

  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
    console.log(formData)
  }

  const inputsValidation=()=>{
    let flage=true
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors={}
    console.log(formData.name)
    if(formData.name===undefined||formData.name===''){
      errors.name="this field is required"
      flage=false
    }
    if(!emailPattern.test(formData.email) || formData.email===undefined||formData.email==='' ){
      errors.email="invalid email id"
      flage=false
    }
    if(formData.phone===undefined||formData.phone===''){
      errors.phone="this field is required"
      flage=false
    }
    if(formData.startDate===undefined||formData.startDate===''){
      errors.startDate="this field is required"
      flage=false
    }
    if(formData.endDate===undefined||formData.endDate===''){
      errors.endDate="this field is required"
      flage=false
    }
    if(formData.noOfPeople===undefined||formData.noOfPeople===''){
      errors.noOfPeople="this field is required"
      flage=false
    }
    setFormError(errors)
    return flage
  }

  const savingToDb=async (e)=>{
    e.preventDefault()
    if(inputsValidation()){
      try{
        const dbRef=addDoc(collection(db,"booking"),formData)
        console.log(dbRef.id)
        setFormData({name:'',phone:'',email:'',startDate:'',endDate:'',noOfPeople:''})
        alert("Thank you for Booking . our team will contact you soon for booking conformation.")
      }catch(e){
        console.log("Error:"+e)
      }
    }
  }

  useEffect(()=>{
    console.log(formError)
  },[formError])
  return (
    <div id='booking' className='mt-3 p-2 flex  bg-cover' style={{backgroundImage:`url(${bookingbg})`,height:'100%',width:'100%'}}>
        <div className='w-[100%] p-6 flex flex-wrap justify-center'>
            <h1 className='w-full text-center text-[30px] font-bold text-white font-mono mb-4 uppercase'>Booking Your Best Tour Camping</h1>
            <form className='max-sm:w-full md:w-[30%]'>
                <label className='text-md font-mono font-medium text-left block  pl-2 text-white '>Name <span className='text-red-500 text-sm'>{formError.name}</span></label>
                <input type='text'  name="name" onChange={handleOnChange} value={formData?.name} className={`p-1 border-none ring-1 ring-inset  bg-gray-50 rounded-md appearance-none w-full ${formError.name?`outline bg-red-100 outline-red-500`:`outline-none`}`} placeholder='enter your name'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>Phone Number <span className='text-red-500 text-sm'>{formError.phone}</span></label>
                <input type='number'  name='phone' onChange={handleOnChange} value={formData?.phone} className={`p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ${formError.phone?`outline bg-red-100 outline-red-500`:`outline-none`}`} placeholder='your phone number'/>
                <label className='text-md font-mono font-medium text-left block pt-1  pl-2 text-white '>Email <span className='text-red-500 text-sm'>{formError.email}</span></label>
                <input type='email'  name='email' onChange={handleOnChange} value={formData?.email} className={`p-1 border-none ring-1 ring-inset ring-gray-300 bg-gray-50 rounded-md w-full ${formError.email?`outline bg-red-100 outline-red-500`:`outline-none`}`} placeholder='email address'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>start date  <span className='text-red-500 text-sm'>{formError.startDate}</span></label>
                <input type='date'  name='startDate' onChange={handleOnChange} value={formData?.startDate} className={`p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ${formError.startDate?`outline bg-red-100 outline-red-500`:`outline-none`}`} placeholder='start date'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>End date  <span className='text-red-500 text-sm'>{formError.endDate}</span></label>
                <input type='date'  name='endDate' onChange={handleOnChange} value={formData?.endDate} className={`p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ${formError.endDate?`outline bg-red-100 outline-red-500`:`outline-none`}`} placeholder='end date'/>
                <label className='text-md text-left block  pl-2 pt-1 text-white'>Number of People <span className='text-red-500 text-sm'>{formError.noOfPeople}</span></label>
                <input type='number'  name='noOfPeople' onChange={handleOnChange} value={formData?.noOfPeople} className={`p-1 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-md w-full ${formError.noOfPeople?`outline bg-red-100 outline-red-500`:`outline-none`}`} placeholder='number of people to stay'/>
                <button type='submit' onClick={savingToDb} className='text-md p-3 rounded-md bg-green-500 text-white font-mono font-bold w-full mt-4 uppercase'>book</button>
            </form>
            <div className=' w-full ms-5 mt-4  max-w-[320px] max-h-[320px] '>
                <div className='rounded-2xl bg-cover bg-center h-full w-full' style={{backgroundImage:`url(${campfireGif})`}}></div>
            </div>
        </div>     
    </div>
  )
}

export default Booking