import React from "react";

const BoxNoti = () => {
  return (
    <div className="px-4">
      <div className="p-2">
        <div className="bg-white w-full h-24 rounded-md  p-2 overflow-hidden shadow-md flex items-end justify-between">

          <div className="flex flex-col justify-center space-y-5">
            <h1 className="title">99+ Messages in Thai education is bad</h1>
            <div className="space-y-1">
                <p className="text-blue1 h-6 overflow-hidden text-sm">
                This is maybe recent message
                </p>
            </div>
          </div>

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

export default BoxNoti;
