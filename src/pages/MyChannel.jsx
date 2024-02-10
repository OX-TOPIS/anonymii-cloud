import React, { useState, useEffect } from 'react';
import CardMyChanel from "../components/CardMyChanel";
import { Link } from 'react-router-dom';

const MyChannel = () => {
  const [myChanel, setMyChanel] = useState([]);
  const [channel, setChannel] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/data.json");
            const data = await response.json();
            setMyChanel(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, []);


  // const handleChannelClick = (id) => {
  //   setChannel(id);
  //   console.log('Clicked channel ID:', id);
  //   console.log('Updated channel:', channel);
  // };

  // useEffect(() => {
  //   console.log('Updated channel:', channel);
  // }, [channel]);

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
            <Link to="/channel" state= { item.id } key={item.id}>
              <CardMyChanel item={item} />
            </Link>
          ))}
        
        </div>
      </div>

      {/* MODAL DIALOG CREATE CHANNEL */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg text-center">Create Channel</h3>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Channel Name</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Channel Description</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </label>
          <div className="modal-action">
            <form method="dialog">
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2">
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