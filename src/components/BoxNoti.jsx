import React from "react";

const BoxNoti = ({ item }) => {
  return (
    <div className="px-4">
      <div className="p-2">
        <div className="bg-white w-full h-24 rounded-md  p-2 overflow-hidden shadow-md flex items-end justify-between">

          <div className="flex flex-col justify-center space-y-5">
            <h1 className="title">{ item.message }</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoxNoti;

