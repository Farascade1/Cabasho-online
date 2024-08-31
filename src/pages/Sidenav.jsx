import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='bg-gray-400 w-[25%] h-screen fixed'>
       <h1 className='font-bold text-2xl mt-3 text-center underline'> Cabasho center</h1>
<ul className='ml-10 pt-10 flex flex-col  text-3xl'>
   <NavLink to='/'> <li className='hover:underline cursor-pointer'>  <i class="fa-brands fa-windows"></i> Dashboard</li> </NavLink>
  {/* <NavLink to='/dir'>  <li className='hover:underline cursor-pointer'>dir cabasho</li> </NavLink> */}
  <NavLink to='/arag'> <li className='hover:underline cursor-pointer'>  <i class="fa-solid fa-eye"></i>  arag cabashada</li> </NavLink> 
</ul>
      
    </div>
  )
}

export default Sidenav
