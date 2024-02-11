import React, {useState, useEffect, useRef} from 'react'
import ChatChannel from "./ChatChannel";
import Message from "../../components/Message";
import { useLocation } from 'react-router-dom';
import { io } from "socket.io-client";

const Channel = () => {
  const [message, setMessage] = useState([]);
  const [chatId, setChatId] = useState(1)
  const [user, setUser] = useState("ipxz4")
  // เอาค่ามาจาก MyChannel
  const location = useLocation();
  const channelId = location.state;
  const socket = useRef();
  useEffect(() => {
    setChatId(channelId);
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/data.json");
            const data = await response.json();
            setMessage(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, []);

  const handleMessageClick = (id) => {
    setChatId(id);
  };


  return (
    <div className='bg-gray-100 w-full ml-4 flex overscroll-none h-screen'>
      <div className="w-1/4">
        <h1 className="font-bold text-sm text-blue2 uppercase pl-6" >All Messages</h1>
        <div className="height overflow-y-scroll pl-4">
        {message.map((item) => (
          <Message key={item.id} item={item} onClick={() => handleMessageClick(item.id)} />
        ))}
        </div>
        
      </div>
      <ChatChannel chatId={chatId} />
    </div>
  );
};

export default Channel;
