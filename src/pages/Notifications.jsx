import React, {useState, useEffect} from 'react'
import BoxNoti from '../components/BoxNoti'
import axios from 'axios';
const Notifications = () => {
  const [allNoti, setAllNoti] = useState([]);
  const emailToken = localStorage.getItem('emailByToken');
  

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASEURL
      const response = await axios.get(`${apiUrl}/notification/getNotification?email=${emailToken}`);
      setAllNoti(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className='content flex flex-col overscroll-none h-screen '>
      <div className="headtext">Notifications</div>
        <div className="height overflow-y-scroll">
        {allNoti.map((item, index) => (
          <BoxNoti key={index} item={item} />
        ))}
        </div>
    </div>
  )
}

export default Notifications
