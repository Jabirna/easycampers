import React,{useEffect,useState} from 'react'
import { getDocs,collection } from 'firebase/firestore/lite'
import { db } from '../firebaseConfig'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const BookingDetails =() => {
    const[BookingData,setBookingData]=useState([])
    useEffect(()=>{
        async function fetchData(){
        const responce=await getDocs(collection(db,'booking'))
        const bookingData=responce.docs.map(item=>item.data())
        console.log(bookingData)
        setBookingData(bookingData)
        }
        fetchData()
    },[])
  return (
    <div className='p-5 rounded-sm'>
      {BookingData.length!=0 &&
      <DataTable value={BookingData} paginator rows={15} rowsPerPageOptions={[10, 15, 25, 50,100]} className='m-2 ring-[0.5px]' tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" sortable className='ring-[0.5px] p-1' header="Name"></Column>
        <Column field="phone" sortable className='ring-[0.5px] text-center p-1' header="Phone"></Column>
        <Column field="email" sortable className='ring-[0.5px] text-center p-1' header="Email"></Column>
        <Column field="startDate" sortable className='ring-[0.5px] text-center p-1' header="Check IN"></Column>
        <Column field="endDate" sortable className='ring-[0.5px] text-center p-1' header="Check Out"></Column>
        <Column field="noOfPeople" sortable className='ring-[0.5px] text-center p-1' header="Number Of Gust"></Column>     
    </DataTable>}
    </div>
  )
}

export default BookingDetails