import React from 'react'
import {IoCall} from 'react-icons/io5'
import {FiMenu} from 'react-icons/fi'


const Navbar = () => {
  return (
    <nav className='flex justify-between py-1 px-2 border-b-[1.5px]'>
      <div className='flex'>
         <h1 className='text-lg font-extrabold font-mono '>EASY CAMPERS</h1>    
      </div>
      <div className=''>
         <ul className='md:flex space-x-6'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='mb-2'>
               <a className='bg-green-600 py-[7px] px-3 rounded-full text-[10px] font-medium text-white flex'>Call Now
                  <span className='bg-white p-1 ml-2 rounded-full text-black '><IoCall/></span>
               </a>
            </li>
         </ul>     
      </div>
      <FiMenu className='md:hidden block '/>
    </nav>
  )
}

export default Navbar