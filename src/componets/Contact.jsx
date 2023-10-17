import React from 'react'
import {FaLocationDot,FaThreads} from 'react-icons/fa6'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsFillTelephoneFill,BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Contact = () => {
  return (
    <div id='contact'>
      <div className=' bg-slate-100 rounded-md mt-2 mb-2 ml-3 mr-3 p-3'>
          <h1 className='text-center font-mono font-bold text-lg'>CONTACTS</h1>
          <div className='flex flex-wrap '>
              {/*location*/}
              <div className='max-md:w-full w-[25%] p-2 flex max-md:justify-center'>
                <FaLocationDot className='mr-2 text-green-500'/>
                <p className='text-sm text-gray-500 '> Munnar | Kolukkumalai | Kerala | India</p>
              </div>
              {/*Email*/}
              <div className='max-md:w-full w-[25%] p-2 flex max-md:justify-center'>
                <AiTwotoneMail className='mr-2 text-green-500'/>
                <p className='text-sm  text-gray-500 '> easycamper@gmail.com</p>
              </div>
              {/*Phone*/}
              <div className='max-md:w-full w-[25%] p-2 flex max-md:justify-center'>
                <BsFillTelephoneFill className='mr-2 text-green-500'/>
                <p className='text-sm  text-gray-500 '> 7306298294 | 9497400931</p>
              </div>
              {/**Social Meadias */}
              <div className='max-md:w-full w-[25%] p-2 flex max-md:justify-center'>
                  <a href=''><GrInstagram className='mr-2 text-green-500'/></a>
                  <a href=''><BsFacebook className='mr-2 text-green-500'/></a>
                  <a href=''><BsLinkedin className='mr-2 text-green-500'/></a>
                  <a href=''><BsTwitter className='mr-2 text-green-500'/></a>
                  <a href=''><FaThreads className='mr-2 text-green-500'/></a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact