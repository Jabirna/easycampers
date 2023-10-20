import React from 'react'

const ServiceDtlModel = ({service,setDtlShow}) => {
  return (
    <div className='fixed inset-0 z-10 flex  col justify-center items-center backdrop-blur-sm '>
        <div className='max-sm:h-[85%] h-[80%] max-sm:w-[95%] w-[70%] bg-white rounded-md shadow-lg relative'>
            <h1 className='bg-white rounded-full px-2 py-[2px] right-2 cursor-pointer mt-2 absolute text-sm ' onClick={()=>setDtlShow(false)}>X</h1>
            <div style={{backgroundImage:`url(${service.img})`}} className='w-full h-[65%] bg-cover bg-center rounded-md'/>
            <div className='p-2'>
              <h2 className='text-lg font-mono font-bold uppercase mb-1'>{service.head}</h2>
              <div className='overflow-auto max-h-[20%]'>
                <p className='text-sm text-gray-500 '>{service.desc}</p>
              </div>
            </div>
        </div>  
    </div>
  )
}

export default ServiceDtlModel