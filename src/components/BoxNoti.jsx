import React from "react";

const BoxNoti = ({ item }) => {
  return (
    <div className="px-4">
      <div className="p-2">
        <div className="bg-white w-full rounded-md  p-4 overflow-hidden shadow-md flex items-end justify-between">
          
            <h1 className="title">{item.message}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default BoxNoti;
