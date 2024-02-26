import React, {useState, useEffect} from 'react'
import BoxNoti from '../components/BoxNoti'
import axios from 'axios';
const Notifications = () => {
  const [allNoti, setAllNoti] = useState([]);
  const emailToken = localStorage.getItem('emailByToken');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASEURL
        const response = await axios.get(`${apiUrl}/notification/getNotification/${emailToken}`);
        setAllNoti(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  return (
    <div className='content flex flex-col overscroll-none h-screen '>
      <div className="headtext">Notifications</div>
        <div className="height overflow-y-scroll">
        {allNoti.map((item) => (
          <BoxNoti key={item.message} item={item} />
        ))}
        </div>
    </div>
  )
}

export default Notifications
