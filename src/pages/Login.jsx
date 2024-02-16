import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const userData = {
    email: email,
    userPassword: userPassword,
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim()){
      alert("กรุณากรอก email");
      return;
    }
    else if (!userPassword.trim()){
      alert("กรุณากรอก password");
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_BASEURL
      const response = await axios.post(`${apiUrl}/auth/login`, userData)

      if (response.status === 200){
        // console.log(response.data);
        const userToken = decodeToken(response.data.accessToken);
        // console.log(userToken)
        localStorage.setItem('usernameByToken', userToken.username);
        localStorage.setItem('emailByToken', userToken.email);
        localStorage.setItem('imagesByToken', userToken.images);
        alert("login success");
        navigate('/');
      }
    } catch (error) {
      console.error(error)
      alert("Email or password incorrect");
    }
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
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
      <input type="text" className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2 placeholder-white text-white' placeholder='Email'
      onChange={e => setEmail(e.target.value)}/>

      <div className="relative ">
        <input type={isPasswordVisible ? "text" : "password"} placeholder='Password'className='w-72 outline-white border-white rounded-md p-2 bg-fa1 border-2  placeholder-white text-white' 
        onChange={e => setUserPassword(e.target.value)} />
        <button type="button"
        className="absolute inset-y-0 right-0 flex items-center px-4 text-white font-bold"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
      </div>

      
      <div className="flex flex-col items-center">
        {/* <Link to="/"> */}
        <button type="submit" onClick={handleLogin} className='w-72 bg-white text-fa1 font-bold rounded-md p-2 mb-2'>Login</button>
        {/* </Link> */}
        <p className='text-white'>Don't have an account? <Link to="/signup" className='underline font-bold'>Signup</Link></p>
      </div>
    </form>
</div>


  )
}

export default Login