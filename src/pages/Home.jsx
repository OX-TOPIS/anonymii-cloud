import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios';

const Home = () => {
  const [allChanel, setAllChanel] = useState([]);
  const emailToken = localStorage.getItem("emailByToken");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASEURL;
        const allChatResponse = await axios.get(`${apiUrl}/chat/getAllChat`);
        const chatByEmailResponse = await axios.get(`${apiUrl}/chat/getChatByEmail`, { params: { email: emailToken } });
  
        if (allChatResponse.data && chatByEmailResponse.data) {
          const filteredChannels = allChatResponse.data.filter(channel => {
            return !chatByEmailResponse.data.some(chat => chat.chatId === channel.chatId);
          });
  
          setAllChanel(filteredChannels);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [allChanel]);




  return (
    <div className="content flex flex-col overscroll-none h-screen">
    <h1 className='headtext'>home</h1>
    

    {/* CARD */}
    <div className="height overflow-y-scroll">
      <div className="grid grid-cols-4 gap-4 mx-auto ">
      {allChanel.map((item) => (
        <Card key={item.chatId} item={item} />
      ))}
      </div>
    </div>
    
    
    </div>
  )
}

export default Home
