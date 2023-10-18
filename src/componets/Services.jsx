import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Services = () => {
    const services=useSelector((state)=>state.services)
  return (
    <div id='service'>
        <div className='p-3 flex flex-wrap justify-center'>
            {services.map((item,indx)=>{
                return(
                    <div id={item.head} key={indx} className='max-sm:w-full w-[300px] h-[420px] hover:p-0 p-1 border-1 border-gray-400 shadow-2xl rounded-lg mt-2 mr-2 cursor-pointer duration-500'>
                        <div className='w-full h-[260px] bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${item.img})`}}></div>
                        <h3 className='text-lg font-mono uppercase font-bold pt-2 pl-2 pr-2 '>{item.head}</h3>
                        <div className='h-[80px]'>
                            <p className='text-sm text-gray-500 font-mono font-light pt-1 px-2'>{item.desc.slice(0,110)}  ...</p>
                        </div>
                        <button className='hover:ring-1 shadow-xl text-white font-semibold hover:ring-gray-400 mt-1 p-1  w-full  flex justify-center bg-green-500'>know more <BsArrowRightShort className='mt-[4px]'/></button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services