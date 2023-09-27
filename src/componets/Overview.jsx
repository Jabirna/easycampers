import React,{useEffect,useState} from 'react'
import bgimg from '../image/overview-demo-bg.jpg'
import {BsArrowRightCircle} from 'react-icons/bs'
import slideImg from '../image/index'

const Overview = () => {
    const divStyle = {
        backgroundImage: `url(${bgimg})`, // Replace with the path to your image
        backgroundSize: 'cover', // You can adjust background properties as needed
        backgroundRepeat: 'no-repeat',
        width: '100%', // Set the width and height as per your design
        height: '100%',
      };
      const [imgIndex,setImgIndex]=useState(0);
      const nextImg=()=>{
        console.log(`imgIndex:${imgIndex}`)
        console.log(`slide lenght:${slideImg.length-1}`)
        const isLastImg = imgIndex===slideImg.length-1
        console.log(isLastImg)
        setImgIndex(isLastImg? 0:(lastInx)=>lastInx+1)
      }
      
      useEffect(()=>{
        const interval=setInterval(()=>nextImg(),4000)
        return ()=>clearInterval(interval)
      },[imgIndex])
  return (
    <div className='w-full flex flex-wrap min-h-[500px] p-3' style={divStyle}>
        <div className='max-md:w-full w-[50%] '>
            <h1 className='mt-6 font-mono text-[35px] text-center font-extrabold text-white'>EXPLORE KOLUKKUMALAI</h1>
            <ul className='text-white ps-[20%] pt-4 font-mono font-semibold md:text-center space-y-3'>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  TENT STAY</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  OFF ROAD JEEP SAFARI</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  CAMPFIRE</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  SUNSET TREKING</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  SUNRISE OF THE DAY</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  DJ MUSIC</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  DINNER</a></p>
                <p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  BBQ</a></p>
            </ul>
        </div>
        <div className='max-md:w-full w-[50%] min-w-[290px] h-[600px] p-5  min-h-full '>
            <div style={{ backgroundImage:`url(${slideImg[imgIndex].img})`,height:'100%',width:'100%',backgroundSize:`contain`,backgroundRepeat:'no-repeat'}} className='rounded-2xl shadow-xl duration-500'></div>
        </div>
    </div>
  )
}

export default Overview