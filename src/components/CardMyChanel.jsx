import React from 'react'
import { HiMiniUserGroup, HiMiniPencilSquare  } from "react-icons/hi2";
const CardMyChanel = ({ item, onClick }) => {
  return (
    <div onClick={onClick} className='bg-white w-72 h-32 rounded-md  p-2 overflow-hidden shadow-md hover:scale-105 transition-all duration-300 cursor-pointer'>
      <h1 className='title'>{item.chatName}</h1>
      <hr className='text-blue1'></hr>
      <div className="space-y-4">
        <p className='text-blue1 mt-3 h-6 overflow-hidden'>{item.chatDescription}</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <HiMiniUserGroup className='text-xl text-blue1'/>
            <p className='text-blue1'>{item.people}</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/avatar.png" alt="" className="w-6" />
            <div className="">{item.ownerEmail}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardMyChanel