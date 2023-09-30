import React from 'react'

const Booking = () => {
  return (
    <div className='flex flex-wrap'>
        <div className='w-[50%] p-4 '>
            <label className='text-md font-mono font-medium text-left block pb-2 pl-2 text-gray-500'>Booking Date</label>
            <input type='date' className='p-3 border1 border-gray-200 bg-gray-100 rounded-xl w-full '/>
            <label className='text-md text-left block pb-2 pl-2 pt-2 text-gray-500'>Booking Date</label>
            <input type='number' className='p-3 border1 border-gray-200 bg-gray-100 rounded-xl w-full '/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Booking