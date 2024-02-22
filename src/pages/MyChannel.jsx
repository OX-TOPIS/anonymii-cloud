import React, { useState, useEffect } from 'react';
import CardMyChanel from "../components/CardMyChanel";
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyChannel = () => {
  const [myChanel, setMyChanel] = useState([]);
  const emailToken = localStorage.getItem('emailByToken');

  const [chatName, setChatName] = useState("");
  const [chatDescription, setChatDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_BASEURL
        const response = await axios.get(`${apiUrl}/chat/getChatByEmail?email=${emailToken}`);
        setMyChanel(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const channelData = {
    chatName: chatName,
    chatDescription: chatDescription,
    ownerEmail: emailToken
  };

  const handleCreateChannel = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API_BASEURL
      const response = await axios.post(`${apiUrl}/chat/createChat`, channelData)
      if (response.status === 200){
        alert("create success");
      }
    } catch (error) {
      console.error(error.response)
    }
  }


  return (
    <div className="content flex flex-col overscroll-none h-screen">
      <div className="flex justify-between">
        <div className="headtext">My Channel</div>
        <button
          className="bg-blue2 text-white mt-2 font-bold rounded-md p-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          + Channel
        </button>
      </div>

      {/* Card My Chanel */}
      <div className="height overflow-y-scroll">
        <div className="grid grid-cols-4 gap-4 mx-auto ">
        
          {myChanel.map((item) => (
            <Link to="/channel" state= { item.chatId } key={item.chatId}>
              <CardMyChanel item={item} />
            </Link>
          ))}
        
        </div>
      </div>

      {/* MODAL DIALOG CREATE CHANNEL */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg text-center">Create Channel</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Channel Name</span>
            </div>
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={e => setChatName(e.target.value)}/>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Channel Description</span>
            </div>
            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" onChange={e => setChatDescription(e.target.value)}/>
          </label>
          <div className="modal-action">
            <form method="dialog">
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2" onClick={handleCreateChannel}>
                Create Channel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyChannel;