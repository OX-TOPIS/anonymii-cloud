import React from "react";
import { HiMiniUserGroup, HiMiniPencilSquare } from "react-icons/hi2";

const Message = () => {
  return (
    <div className="p-2 w-3/4">
      <div className="bg-white w-72 h-24 rounded-md  p-2 overflow-hidden shadow-sm">
        <h1 className="title">Thai education is bad</h1>
        <div className="space-y-1">
          <p className="text-blue1 h-6 overflow-hidden text-sm">
            Why Thai education is badWhy Thai education is bad
          </p>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src="/avatar.png" alt="" className="w-6" />
              <div className="text-sm">Ingfah bibi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
