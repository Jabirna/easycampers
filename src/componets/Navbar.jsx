import {useState,useEffect} from 'react'
import {IoCall} from 'react-icons/io5'
import {FiMenu} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
import {Link} from 'react-scroll'
import { setMenu } from '../feature/generalSlice'
import { useSelector,useDispatch } from 'react-redux'


const Navbar = () => {
   const[menuH,setMenuhook]=useState(false)
   console.log(menuH)
   const dispatch=useDispatch();
   useEffect(()=>{
      dispatch(setMenu({menu:menuH}))
   },[menuH]) 
   const menu=useSelector((state)=>state.general.value.menu)   
  return (   
         <nav className='flex flex-wrap justify-between max-md:p-3 pt-3 px-2 border-b-[1.5px] shadow-md fixed top-0 left-0 right-0 bg-white z-10'>
               <div className='max-md:w-[80%]'>
                  <h1 className='text-start text-lg font-extrabold font-mono  '>EASY CAMPERS</h1>   
               </div>
               {menuH?<RxCross2 className='md:hidden block cursor-pointer' onClick={()=>setMenuhook(!menuH)}/>:<FiMenu className={'md:hidden block cursor-pointer'} onClick={()=>setMenuhook(!menuH)}/>} 
               <div className={menuH?`max-md:w-full`:`max-md:hidden block`} onClick={()=>setMenuhook(false)}>
                  <ul className='md:flex justify-center md:space-x-6 '>
                     <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700' onClick={()=>setMenuhook(false)}>
                        <Link to='overview' className='w-full block' smooth={true} duration={500} offset={-100} onClick={()=>setMenuhook(false)}>
                           Home
                        </Link>
                     </li>
                     <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700' onClick={()=>setMenuhook(false)}>
                        <Link to='service' className='w-full block' smooth={true} duration={500} onClick={()=>setMenuhook(false)}>
                           Services
                        </Link>
                     </li>
                     <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700' onClick={()=>setMenuhook(false)}>
                        <Link to='booking' className='w-full block' smooth={true} duration={500} onClick={()=>setMenuhook(false)}>
                           Booking
                        </Link>
                     </li>
                     <li className='cursor-pointer text-center max-md:border-b-[1px] max-md:py-1 hover:font-medium hover:text-green-700' onClick={()=>setMenuhook(false)}>
                        <Link to='contact' className='w-full block' smooth={true} duration={500} onClick={()=>setMenuhook(false)}>
                           Contact
                        </Link> 
                     </li>
                     <li className='mb-2 '>
                        <a className='call-btn max-md:flex max-md:justify-center'>Call Now
                           <span className='bg-white p-1 ml-2 rounded-full text-black '><IoCall/></span>
                        </a>
                     </li>
                  </ul>     
               </div>   
            </nav>)
}

export default Navbar