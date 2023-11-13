import React,{useEffect,useState} from 'react'
import { getDocs,collection } from 'firebase/firestore/lite'
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { db } from '../firebaseConfig'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const BookingDetails =() => {
    const[BookingData,setBookingData]=useState([])
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
      name: { value: null, matchMode: FilterMatchMode.CONTAINS },
      phone: { value: null, matchMode: FilterMatchMode.CONTAINS },
      email: { value: null, matchMode: FilterMatchMode.CONTAINS },
      startDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
      endDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
      noOfPeople: { value: null, matchMode: FilterMatchMode.CONTAINS },   
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['name'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};

    useEffect(()=>{
        async function fetchData(){
        const responce=await getDocs(collection(db,'booking'))
        const bookingData=responce.docs.map(item=>item.data())
        console.log(bookingData)
        setBookingData(bookingData)
        setLoading(false)
        }
        fetchData()
    },[])
  return (
    <div className='p-5 rounded-sm'>
      {BookingData.length!=0 ?
      <DataTable value={BookingData} paginator filters={filters} filterDisplay="row" globalFilterFields={['name', 'phone', 'email', 'startDate','endDate','noOfPeople']} emptyMessage="No customers found." loading={loading} rows={15} rowsPerPageOptions={[10, 15, 25, 50,100]} className='m-2 ring-[0.5px]' tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" filter filterPlaceholder="Search by name" sortable className='ring-[0.5px] p-1' header="Name"></Column>
        <Column field="phone" filter filterPlaceholder="Search by phone" sortable className='ring-[0.5px] text-center p-1' header="Phone"></Column>
        <Column field="email" filter filterPlaceholder="Search by email" sortable className='ring-[0.5px] text-center p-1' header="Email"></Column>
        <Column field="startDate" filter filterPlaceholder="Search by Check in" sortable className='ring-[0.5px] text-center p-1' header="Check IN"></Column>
        <Column field="endDate" filter filterPlaceholder="Search by Check out" sortable className='ring-[0.5px] text-center p-1' header="Check Out"></Column>
        <Column field="noOfPeople" filter filterPlaceholder="Search by people count" sortable className='ring-[0.5px] text-center p-1' header="Number Of Gust"></Column>     
    </DataTable>:"Loading..."}
    </div>
  )
}

export default BookingDetails