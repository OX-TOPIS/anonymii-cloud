import React from 'react'
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined, MessageOutlined, InboxOutlined, NotificationOutlined} from '@ant-design/icons';
const Sidebar = () => {
  return (
    <div className='flex h-screen bg-white w-52'>
      <div className="flex flex-col w-full items-center">

        {/* LOGO */}
        <Link to="/">
        <div className="flex items-center justify-center my-4">
          <img src="/Logo.png" alt="" />
          <h1 className='text-blue1 font-bold text-lg'>Anony<span className='text-blue2'>mii</span></h1>
        </div>
        </Link>
        

        {/* Profile */}
        
        <div className="flex flex-col justify-center space-y-2">
          {/* SHOW AVATER USERNAME */}
          <Link to="/profile">
            <img src="/avatar.png" alt="" className='w-28' />
            <h2 className='text-center'>Ingfah bibi</h2>
          </Link>
          
          {/* Message */}
          <Link to="/channel">
            <button className='w-full p-2 bg-blue2 rounded-r-lg rounded-bl-lg flex items-center justify-center'>
              <MessageOutlined className='pr-1 text-white'/>
              <h1 className='text-white'>Messages</h1>
            </button>
            </Link>
        </div>

        {/* sidebar items */}
        <ul className='space-y-2 mt-4'>
          <li className='w-36'><Link to="/" className='item-sidebar'><HomeOutlined className='pr-2 ml-2 text-blue1' /><h1 className='text-blue1'>Home</h1></Link></li>
          <li className='w-36'><Link to="/profile" className='item-sidebar' ><UserOutlined className='pr-2 ml-2 text-blue1' /><h1 className='text-blue1'>Profile</h1></Link></li>
          <li className='w-36'><Link to="/mychannel" className='item-sidebar' ><InboxOutlined className='pr-2 ml-2 text-blue1' /><h1 className='text-blue1'>My Channel</h1></Link></li>
          <li className='w-36'><Link to="/notifications" className='item-sidebar' ><NotificationOutlined className='pr-2 ml-2 text-blue1' /><h1 className='text-blue1'>Notifications</h1></Link></li>
          {/* Login */}
          <li className='w-36 pt-36'><Link to="/login" className='item-sidebar' ><NotificationOutlined className='pr-2 ml-2 text-blue1' /><h1 className='text-blue1'>Login</h1></Link></li>
        </ul>


      </div>
    </div>
  )
}

export default Sidebar