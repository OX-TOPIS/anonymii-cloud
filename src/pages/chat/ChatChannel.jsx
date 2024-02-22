import React, { useState, useEffect } from 'react'
import { BsSendFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import axios from 'axios'
import socket from '../../socket';
const ChatChannel = ({ chatId, chatName, chatDescription, ownerEmail }) => {
  const [message, setMessage] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const apiUrl = process.env.REACT_APP_API_BASEURL
  const emailToken = localStorage.getItem('emailByToken');
  const usernameToken = localStorage.getItem('usernameByToken');

  const fetchMessage = async () => {
    try {
      const resMessage = await axios.get(`${apiUrl}/message/getMessages`, {
        params: {
          chatId: chatId
        }
      });
      setMessage(resMessage.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (chatId) {
      fetchMessage();
      // listen when get recieve-message fetch new message
      const handleReceiveMessage = (data) => {
        if (data.chatId === chatId) {
          fetchMessage();
        }
      };
      socket.on('recieve-message', handleReceiveMessage);
      // Cleanup when the component unmounts or when chatId changes
      return () => {
        socket.off('recieve-message', handleReceiveMessage);
      };
    }
  }, [chatId]);

  const handleSendMessage = async () => {
    console.log(message)
    try {
      await axios.post(`${apiUrl}/message/sendMessage`, {
        message: newMessage,
        chatId: chatId,
        senderEmail: localStorage.getItem("emailByToken")
      });
      fetchMessage();
      socket.emit("send-message", { chatId })
      setNewMessage("")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  // Delete Channel
  const handleDelete = () => {

  }

  const requestData = { chatId: chatId, emailToken: emailToken };
  // Leave Channel
  const handleLeave = async (chatId) => {
    try {
      await axios.delete(`${apiUrl}/chat/leaveChat`, { data: requestData })
      alert("success")
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="w-3/4 bg-gray border-2 border-white ">

      {/* TOP TAB */}
      <div className="h-18 shadow-md p-2 flex flex-row justify-between items-center">
        <div className="">
          <h1 className="title">{chatName} {chatId}</h1>
          <p className="text-blue1 h-6 overflow-hidden text-sm">
            {chatDescription}
          </p>
        </div>

        <details className="dropdown dropdown-end">
          <summary className="m-1 btn"><IoMdMore /></summary>
          <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-48">
            {emailToken === ownerEmail ? <li><a className='text-red-400' onClick={() => handleDelete()}>Delete Channel</a></li> :
              <li><a className='text-red-400' onClick={() => handleLeave(chatId)}>Leave Channel</a></li>}
          </ul>
        </details>
      </div>






      {/* message */}
      <div className="h-3/4 overflow-hidden overflow-y-scroll">
        {
          message.map((text) => (
            <div className={`chat chat-${text.username === usernameToken ? "end" : "start"} pt-4  overflow-hidden`} key={text.messageId}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
              {text.username}
              </div>
              <div className="chat-bubble">{text.message}</div>
            </div>
          ))
        }
      </div>











      {/* BOX INPUT Channel */}
      <div className="flex justify-center items-center">
        <input value={newMessage} onChange={(e) => {
          setNewMessage(e.target.value)
        }} type="text" className='absolute bottom-5 bg-white w-3/5 p-2 rounded-md outline-none ' />
        <button className=""><BsSendFill onClick={() => handleSendMessage()} className='absolute bottom-8 right-14 ' /></button>
      </div>

    </div>
  )
}

export default ChatChannel
