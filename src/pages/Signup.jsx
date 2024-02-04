import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
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
      <input type="text" className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2 placeholder-white text-white' placeholder='Username'/>
      <input type="text" className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2 placeholder-white text-white' placeholder='Email'/>
      <input type="password" placeholder='Password'className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2  placeholder-white text-white' />
      <input type="password" placeholder='Confirm Password'className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2  placeholder-white text-white' />
      <div className="flex flex-col items-center">
        <Link to="/"><button className='w-72 bg-white text-fa1 font-bold rounded-md p-2 mb-2'>Signup</button></Link>
        <p className='text-white'>Already have an account? <Link to="/login" className='underline font-bold'>Login</Link></p>
      </div>
    </form>
</div>
  )
}

export default Signup