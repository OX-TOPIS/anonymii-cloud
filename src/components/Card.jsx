import React, { useState, useEffect } from 'react';
import { HiMiniUserGroup, HiMiniPencilSquare  } from "react-icons/hi2";
import axios from 'axios';

const Card = ({ item }) => {

  const usernameToken = localStorage.getItem('usernameByToken');
  const emailToken = localStorage.getItem('emailByToken');
  const apiUrl = process.env.REACT_APP_API_BASEURL
  
  const joinChat = async ({ email, chatId, username, chatName }) => {
    try {
      const response = await axios.post(`${apiUrl}/chat/joinChat`, { email, chatId, username, chatName });
      alert("success", response.data);
    } catch (error) {
      console.error('Error adding data:', error)
      alert(`email: ${email}, chatId:${chatId}, username:${username}, chatName:${chatName}`)
    }
  };

  return (
    <div className='bg-white w-72 h-32 rounded-md  p-2 overflow-hidden shadow-md hover:scale-105 transition-all duration-300'>
      <div className="flex justify-between items-center">
        <h1 className='title'>{item.chatName}</h1>
        <button className='bg-blue-500 rounded-md text-white px-2 hover:bg-blue-700 font-bold' onClick={() => joinChat({ email: emailToken, chatId: item.chatId, username: usernameToken, chatName: item.chatName })}>Join</button>
      </div>
      <hr className='text-blue1'></hr>
      <div className="space-y-4">
        <p className='text-blue1 mt-3 h-6 overflow-hidden'>{item.chatDescription}</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <HiMiniUserGroup className='text-xl text-blue1'/>
            <p className='text-blue1'>{item.user_count}</p>
          </div>
          <div className="flex items-center space-x-2">
            {item.ownerImages == null ? (
              <img src="/avatar.png" alt="" className="w-6" />
            ) : (
              <img src={item.ownerImages} alt="" className="w-6" />
            )}
            {/* <img src={item.ownerImages} alt="" className="w-6" /> */}
            <div className="">{item.ownerEmail}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card