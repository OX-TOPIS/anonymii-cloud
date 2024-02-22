import React from 'react'
import { FaBeer } from "react-icons/fa";
import Sidebar from './components/Sidebar';
import { Outlet } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div className='flex'>
      {/* <h1 className="text-3xl font-bold underline">
      Hello worldกกก!  Lets go for a <FaBeer />?
    </h1> */}
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default App