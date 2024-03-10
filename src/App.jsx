import React from 'react'
import { FaBeer } from "react-icons/fa";
import Sidebar from './components/Sidebar';
import Signin from './pages/Login'
import { Outlet } from "react-router-dom";
import './App.css'

const App = () => {

  const emailToken = localStorage.getItem('emailByToken');
  
  return (
    <div>
      { emailToken ? (
        <div className='flex'>
           <Sidebar/>
          <Outlet/>
        </div>
      ) : (
        <Signin />
      )}
     
    </div>
  )
}

export default App