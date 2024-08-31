import React from 'react'
import Dashboard from './dashboard'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        {/* <Dashboard /> */}
    <div className='bg-gray-300 h-screen pl-[320px] text-center pt-20'>
        <div className='bg-gray-500 h-[350px] w-[400px]'>
            <label htmlFor="">Username</label> <br />
            <input className='h-[30px] w-[250px] rounded' type="text" /> <br />
            <label htmlFor="">Password</label> <br />
            <input className='h-[30px] w-[250px] rounded' type="text" /> <br />
        <Link to='/dash'>   <button className='bg-gray-300 mt-5 px-20 py-2 rounded'>Login</button>   </Link> 
        </div>
      
    </div>
    </div>
  )
}

export default Login
