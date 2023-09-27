import {useState} from 'react'
import {IoCall} from 'react-icons/io5'
import {FiMenu} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'


const Navbar = () => {
   const[menu,setMenu]=useState(false)
  return (
    
<nav className='flex flex-wrap justify-between max-md:p-3 pt-3 px-2 border-b-[1.5px] shadow-md'>
      <div className='max-md:w-[80%]'>
         <h1 className='text-start text-lg font-extrabold font-mono  '>EASY CAMPERS</h1>   
      </div>
      {menu?<RxCross2 className='md:hidden block cursor-pointer' onClick={()=>setMenu(!menu)}/>:<FiMenu className={'md:hidden block cursor-pointer'} onClick={()=>setMenu(!menu)}/>} 
      <div className={menu?`max-md:w-full`:`max-md:hidden block`}>
         <ul className='md:flex justify-center md:space-x-6'>
            <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700'>Home</li>
            <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700'>Services</li>
            <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700'>Contact</li>
            <li className='mb-2 '>
               <a className='call-btn max-md:flex max-md:justify-center'>Call Now
                  <span className='bg-white p-1 ml-2 rounded-full text-black '><IoCall/></span>
               </a>
            </li>
         </ul>     
      </div>   
    </nav>

  )
}

export default Navbar