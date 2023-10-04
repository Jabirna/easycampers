import React,{useEffect,useState} from 'react'
import bgimg from '../image/overview-demo-bg.jpg'
import {BsArrowRightCircle} from 'react-icons/bs'
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi'
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
        const isLastImg = imgIndex===slideImg.length-1
        setImgIndex(isLastImg? 0:(lastInx)=>lastInx+1)
      }
      const prevImg=()=>{
        const isFirstImg= imgIndex===0
        setImgIndex(isFirstImg? slideImg.length-1:imgIndex-1)
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
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  TENT STAY</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  OFF ROAD JEEP SAFARI</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  CAMPFIRE</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  SUNSET TREKING</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  SUNRISE OF THE DAY</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  DJ MUSIC</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  DINNER</a></p></li>
                <li><p><a href='#' className='hover:text-green-300 hover:text-[16.5px] flex'><BsArrowRightCircle className='mt-1 me-2' />  BBQ</a></p></li>
            </ul>
            <button onClick={(e)} className='mt-10 w-full p-4 text-white font-mono font-extrabold bg-green-500 rounded-lg shadow-xl text-[20px] hover:ring-1 hover:ring-green-100 hover:shadow-lg' >BOOKING NOW</button>
        </div>
        <div className='max-md:w-full w-[50%] min-w-[290px] h-[600px] max-md:h-[400px] p-5  min-h-full relative group'>
            <div style={{ backgroundImage:`url(${slideImg[imgIndex].img})`,height:'100%',width:'100%'}} className='rounded-2xl shadow-xl bg-cover bg-center duration-500'></div>
            <div className='text-white absolute top-[50%] left-5 pl-5 group-hover:block hidden duration-150'>
                <BiLeftArrow onClick={()=>prevImg()} className='hover:text-[18px] duration-500'/>
            </div>
            <div className='text-white absolute top-[50%] right-5 pr-5 group-hover:block hidden duration-150'>
                <BiRightArrow onClick={()=>nextImg()} className='hover:text-[18px] duration-500'/>
            </div>
        </div>
    </div>
  )
}

export default Overview