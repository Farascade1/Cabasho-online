import React from 'react'
import Sidenav from './Sidenav'

function Dashboard() {
  return (
    <div>
      <Sidenav />
    <div className='ml-[25%] text-black p-10'>
     <h1 className='text-3xl font-bold mb-5 text-black'> welcome to  Dasboard page</h1>

<div className='flex gap-10'>
  <div className='w-[300px] h-[200px] text-center border-b-8 border-green-500 bg-blue-500 '>
    <h1 className='mt-10 font-bold text-4xl'>2</h1>
    <p>Complaints</p>
  </div>
  <div className='w-[300px] h-[200px] border-b-8 border-black bg-green-500 '></div>
  <div className='w-[300px] h-[200px] border-b-8 border-blue-500 bg-gray-500 '></div>
</div>

    </div>
    </div>
  )
}

export default Dashboard
