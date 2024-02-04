import React from 'react'
import { HiMiniUserGroup, HiMiniPencilSquare  } from "react-icons/hi2";
const Card = () => {
  return (
    <div className='bg-white w-72 h-32 rounded-md  p-2 overflow-hidden shadow-md'>
      <h1 className='title'>Thai education is bad</h1>
      <hr className='text-blue1'></hr>
      <div className="space-y-4">
        <p className='text-blue1 mt-3 h-6 overflow-hidden'>Why Thai education is badWhy Thai education is bad</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <HiMiniUserGroup className='text-xl text-blue1'/>
            <p className='text-blue1'>13</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/avatar.png" alt="" className="w-6" />
            <div className="">Ingfah bibi</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card