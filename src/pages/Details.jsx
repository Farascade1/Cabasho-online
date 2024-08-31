import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from './Sidenav';
// import toast, {Toaster} from 'react-hot-toast';


function Details() {
  const [cabasho, setCabasho] = useState([]);

  const Arag = () => {
    axios.get('http://localhost:3000/complaint')
      .then((response) => {
        setCabasho(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

const deleteComplaint = (id) =>{
    axios.delete(`http://localhost:3000/complaint/delete/${id}`).then( ()=>{
        alert('Data has been deleted')
        Arag()
    }).catch( (error) =>{
        console.log(error)
    })
}

  useEffect(() => {
    Arag();
  }, []);

  return (
    <div className="flex">
      <Sidenav />
      <div className="ml-[26%] p-8 w-full bg-gray-100">
        <h1 className="text-3xl font-bold text-teal-600 mb-6"> View the Details </h1>
        <div className="bg-white  rounded-lg">
          <table className="w-full text-left">
            
              <tr className="bg-gray-300">
                <th className="p-4 text-gray-700 font-semibold">Title</th>
                <th className="p-4 text-gray-700 font-semibold">Description</th>
                <th className="p-4 text-gray-700 font-semibold">Action</th>
              </tr>
              {
                cabasho.map((data) => (
                  <tr  className="hover:bg-gray-100 transition-colors">
                    <td className="border-b p-4">{data.title}</td>
                    <td className="border-b p-4">{data.description}</td>
                    <td className="border-b p-4"> <button onClick={()=> {deleteComplaint(data._id)}} className='bg-red-500 px-2 py-1 rounded'>Delete</button> </td>
                  </tr>
                ))
              }
         
          </table>
        </div>
      </div>
      {/* <Toaster /> */}
    </div>
  );
}

export default  Details;