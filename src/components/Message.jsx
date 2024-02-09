import React from "react";


const Message = ({item, onClick}) => {
  return (
    <div className="p-2 w-3/4" onClick={onClick}>
      <div className="bg-white w-72 h-24 rounded-md  p-2 overflow-hidden shadow-sm cursor-pointer">
        <h1 className="title">{item.title}</h1>
        <div className="space-y-1">
          <p className="text-blue1 h-6 overflow-hidden text-sm">
            {item.despriction}
          </p>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src="/avatar.png" alt="" className="w-6" />
              <div className="text-sm">{item.owner}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
