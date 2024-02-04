import React from "react";
import ChatChannel from "./ChatChannel";
import Message from "../../components/Message";

const Channel = () => {
  return (
    <div className='bg-gray-100 w-full ml-4 flex overscroll-none h-screen'>
      <div className="w-1/4">
        <h1 className="font-bold text-sm text-blue2 uppercase pl-6">All Messages</h1>
        <div className="height overflow-y-scroll pl-4">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        </div>
        
      </div>
      <ChatChannel />
    </div>
  );
};

export default Channel;
