import React,{useState,useEffect} from 'react'
import {auth} from '../firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'

const AdminLogin = (props) => {
    const {setSingin,setUser,user,singin}=props
    const [userid,setUserid]=useState('')
    const [password,setPassword]=useState('')
    const singIn=async (e)=>{
        e.preventDefault()
        try{
            if(userid!=''&&password!=''){
                await signInWithEmailAndPassword(auth,userid,password).then((userCridential)=>{
                    console.log(userCridential.user.email)
                    setUser(userCridential.user)
                    setSingin(true)    
                })
            }else{
                alert('missing to enter userid/password')
            }
            
        }
        catch(error){
            alert(error.message)
        }
    }

  return (
    <div className='w-full h-[95vh] flex justify-center items-center'>
        <div className='h-[40%] max-sm:w-[95%] md:w-[50%] w-[35%] shadow-lg shadow-gray-400 p-3'>
            <form>
                <h1 className='text-center text-lg font-mono font-bold uppercase mb-4'>Easy Campers Login</h1>
                <h1 className='text-sm font-sans mb-1'>User Name</h1>
                <input type='text' onChange={(e)=>setUserid(e.target.value)} className='py-1 pl-2 rounded-md w-full shadow-sm ring-1 ring-gray-500 inset-1 placeholder:pl-3 ' placeholder='user name/email id'/>
                <h1 className='text-sm font-sans mb-1'>Password</h1>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} className='py-1 pl-2 rounded-md w-full shadow-sm ring-1 ring-gray-500 inset-1 placeholder:pl-3' placeholder='password'/>
                <button type='submit' onClick={(e)=>singIn(e)} className='py-1 w-full bg-green-600 text-white rounded-md mt-3'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin