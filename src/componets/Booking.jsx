import React,{forwardRef} from 'react'
import {bookingbg} from '../image/index'
import campfireGif from '../image/gif/move2.gif'

const Booking = ({},ref) => {
  return (
    <div ref={ref} className='mt-3 p-2 flex  bg-cover' style={{backgroundImage:`url(${bookingbg})`,height:'100%',width:'100%'}}>
        <div className='w-[100%] p-6 flex flex-wrap justify-center'>
            <h1 className='w-full text-center text-[30px] font-bold text-white font-mono mb-4 uppercase'>Booking Your Best Tour Camping</h1>
            <div className='max-sm:w-full'>
                <label className='text-md font-mono font-medium text-left block pb-2 pl-2 text-white'>Booking Date</label>
                <input type='date' className='p-3 border-none ring-1 ring-inset ring-gray-300 bg-gray-50 rounded-xl w-full '/>
                <label className='text-md text-left block pb-2 pl-2 pt-2 text-white'>Number of People</label>
                <input type='number' className='p-3 border-none ring-1 ring-inset ring-gray-300  bg-gray-50 rounded-xl w-full ' placeholder='Number of People'/>
                <button className='text-md p-3 rounded-md bg-green-500 text-white font-mono font-bold w-full mt-4 uppercase'>check availability</button>
            </div>
            <div className=' w-full ms-5 mt-4  max-w-[320px] max-h-[320px] '>
                <div className='rounded-2xl bg-cover bg-center h-full w-full' style={{backgroundImage:`url(${campfireGif})`}}></div>
            </div>
        </div>     
    </div>
  )
}

export default forwardRef(Booking)