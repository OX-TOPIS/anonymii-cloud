import React from 'react'
import { HiMiniUserGroup, HiMiniPencilSquare  } from "react-icons/hi2";
const Card = ({ item }) => {
  return (
    <div className='bg-white w-72 h-32 rounded-md  p-2 overflow-hidden shadow-md hover:scale-105 transition-all duration-300'>
      <div className="flex justify-between items-center">
        <h1 className='title'>{item.title}</h1>
        <button className='bg-blue-500 rounded-md text-white px-2 hover:bg-blue-700 font-bold'>Join</button>
      </div>
      <hr className='text-blue1'></hr>
      <div className="space-y-4">
        <p className='text-blue1 mt-3 h-6 overflow-hidden'>{item.despriction}</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <HiMiniUserGroup className='text-xl text-blue1'/>
            <p className='text-blue1'>{item.people}</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/avatar.png" alt="" className="w-6" />
            <div className="">{item.owner}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card