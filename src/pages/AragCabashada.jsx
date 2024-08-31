import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

function AragCabashada() {
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

  useEffect(() => {
    Arag();
  }, []);

  return (
    <div className="flex">
      <Sidenav />
      <div className="ml-[26%] p-8 w-full  bg-gray-100">
        <h1 className="text-3xl font-bold text-teal-600 mb-6">Arag Cabashada</h1>
        <div className="bg-white w-full  rounded-lg">
          <table className="w-full  text-left">
            
              <tr className="bg-gray-300 ">
                <th className="p-4 border-2 border-black font-semibold">Title</th>
                <th className="p-4 border-2 border-black font-semibold">Description</th>
                <th className="p-4 border-2 border-black font-semibold">View</th>
              </tr>
              {
                cabasho.map((data, index) => (
                  <tr  className=" w-full transition-colors">
                    <td className="border-b p-4">{data.title}</td>
                    <td className="border-b p-4">{data.description.substring(0,30) }</td>
                 <Link to='/detail'> 
                 <button className='bg-gray-400  px-2 h-[30px] mt-3 rounded'> Details  <td className="border-b p-4"> 
                    </td> 
                    </button> 
                    </Link> 
                  </tr>
                ))
              }
         
          </table>
        </div>
      </div>
    </div>
  );
}

export default AragCabashada;