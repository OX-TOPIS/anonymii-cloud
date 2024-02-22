import React, {useState, useEffect, useRef} from 'react'
import ChatChannel from "./ChatChannel";
import Message from "../../components/Message";
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import socket from '../../socket';
const Channel = () => {
  const [chatId, setChatId] = useState(null)
  const [chatName, setChatName] = useState(null)
  const [chatDescription, setChatDescription] = useState(null)
  const [ownerEmail, setOwnerEmail] = useState(null)
  const [chatroom, setChatroom] = useState([])
  const [user, setUser] = useState("ipxz4")
  // เอาค่ามาจาก MyChannel
  const location = useLocation();
  const apiUrl = process.env.REACT_APP_API_BASEURL
  useEffect(() => {
    socket.emit("new-user-add", localStorage.getItem("emailByToken"));
  }, []);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const chatRoomres = await axios.get(`${apiUrl}/chat/getChatByEmail`, {
              params:{
                email: localStorage.getItem("emailByToken")
              }
            })
            setChatroom(chatRoomres.data)
            console.log(chatRoomres.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, []);

  const handleMessageClick = (chatId, chatName, chatDescription, ownerEmail) => {
    setChatId((prevChatId) => {
      // Ensure prevChatId is up-to-date before updating
      console.log('Previous chatId:', prevChatId);
      // Set the new chatId
      return chatId;
    });
    setChatName(chatName)
    setChatDescription(chatDescription)
    setOwnerEmail(ownerEmail)
  };


  return (
    <div className='bg-gray-100 w-full ml-4 flex overscroll-none h-screen'>
      <div className="w-1/4">
        <h1 className="font-bold text-sm text-blue2 uppercase pl-6" >All Channel</h1>
        <div className="height overflow-y-scroll pl-4">
        {chatroom.map((item) => (
          <Message key={item.chatId} item={item} onClick={() => handleMessageClick(item.chatId, item.chatName, item.chatDescription, item.ownerEmail)} />
        ))}
        </div>
        
      </div>
      <ChatChannel chatId={chatId} chatName={chatName} chatDescription={chatDescription} ownerEmail={ownerEmail} />
    </div>
  );
};

export default Channel;
