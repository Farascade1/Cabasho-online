
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Hero() {
  return (
    <div>
      <Header />
    <div className='bg-gray-300 py-32 px-32 h-[550px] '>
      <h1 className='text-5xl font-bold mb-5'>Make your complaints way easier ever</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <Link to='/register'>  <button className='bg-gray-500 px-5 py-3 rounded-full text-white mt-10 font-semibold'>Make Complaint</button>  </Link>
    </div>
    </div>
  )
}

export default Hero
