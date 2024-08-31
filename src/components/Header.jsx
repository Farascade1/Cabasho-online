import React from 'react'
import { Link } from 'react-router-dom'
 

function Header() {
  return (
     
     
    <div className='flex justify-between px-5 py-3'>
        <h1 className='text-3xl font-bold'>OCMS</h1> 
        <ul className='flex text-3xl text-gray-500 gap-10'>
            <li>Home</li> 
            <li>About Us</li> 
        </ul>
      <Link to='/login'>  <button className='border-2 border-gray-500 text-gray-500 px-4 rounded-full font-semibold'>Admin area</button> </Link>
    </div>
     
  )
}

export default Header
