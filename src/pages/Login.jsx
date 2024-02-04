import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = () => {
    axios.get("http://3.84.245.240:3500/").then((response) => {
      console.log(response)
    });
  }
  return (
<div className="bg-fa1 w-screen h-screen">
    <img src="/login1.png" alt="" className='absolute bottom-0 left-0' />
    <img src="/login2.png" alt="" className='absolute top-0 right-0' />
    <form className="h-full flex flex-col items-center justify-center space-y-8 relative">
      {/* TITLE LOGO */}
      <div className="flex items-center space-x-2">
        <img src="/Logo-login.png" alt="" className='w-18' />
        <h1 className='text-white font-bold text-3xl'>Anonymii</h1>
      </div>
      {/* USERNAME PASSWORD */}
      <input type="text" className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2 placeholder-white text-white' placeholder='Email'/>
      <input type="password" placeholder='Password'className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2  placeholder-white text-white' />
      <div className="flex flex-col items-center">
        <Link to="/"><button onClick={handleLogin} className='w-72 bg-white text-fa1 font-bold rounded-md p-2 mb-2'>Login</button></Link>
        <p className='text-white'>Don't have an account? <Link to="/signup" className='underline font-bold'>Signup</Link></p>
      </div>
    </form>
</div>


  )
}

export default Login