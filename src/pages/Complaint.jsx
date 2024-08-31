import React, { useState } from 'react'
import axios from 'axios'

function Complaint() {

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')

const handleRegister = ( () => {
  axios.post('http://localhost:3000/create', {
    "title": title,
    "description": description
  }).then( () =>{
    alert("Data has been saved")
  }).catch( (error) =>{
    console.log(error)
  })
})

  return (
    <div className='bg-gray-500 text-white pt-20 h-screen'>
        <div className='bg-black w-[360px] px-5 py-10 h-[410px] mx-[350px]'>

       <h1 className='text-3xl font-bold mb-5'>Register Complaint</h1>
       <input onChange={(event) => setTitle(event.target.value)} value={title} className='w-[280px] h-[30px] text-black outline-none mb-5 p-1' type="text" placeholder='Enter title' /> <br />
       <textarea onChange={(event) => setDescription(event.target.value)} value={description} className='w-[280px] h-[180px] text-black outline-none p-1' placeholder='describtion'></textarea> <br />
       <button onClick={handleRegister} className='bg-gray-500 w-[280px] px-4 py-2 mt-5 rounded'>Submit</button>
        </div>
       
    </div>
  )
}

export default Complaint
