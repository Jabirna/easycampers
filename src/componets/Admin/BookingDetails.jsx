import React,{useEffect} from 'react'
import { getDocs,collection } from 'firebase/firestore/lite'
import { db } from '../firebaseConfig'

const BookingDetails =() => {
    useEffect(()=>{
        async function fetchData(){
        const responce=await getDocs(collection(db,'booking'))
        const bookingData=responce.docs.map(item=>item.data())
        console.log(bookingData)
        }
        fetchData()
    },[])
  return (
    <div>BookingDetails</div>
  )
}

export default BookingDetails