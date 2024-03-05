import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios';

const Home = () => {
  const [allChanel, setAllChanel] = useState([]);
  const emailToken = localStorage.getItem("emailByToken");
  const [search, setSearch] = useState('');
  
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

    <div className="flex items-center justify-between">
      <h1 className='headtext'>home</h1>
      
        <input type="text" 
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search...'
        className='px-2 py-1 rounded-lg focus:outline-none'
        />
    </div>
    
    

    {/* CARD */}
    <div className="height overflow-y-scroll">
      <div className="grid grid-cols-4 gap-4 mx-auto ">
      {allChanel

      .filter((item) => {
        return search.toLowerCase() === ''
          ? item
          : item.chatName.toLowerCase().includes(search);
      })

      .map((item) => (
        <Card key={item.chatId} item={item} />
      ))}
      </div>
    </div>
    
    
    </div>
  )
}

export default Home
