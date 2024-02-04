import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div className="h-10/12 flex flex-col space-y-10 items-center mt-6">
        <img src="/avatar.png" alt="" className="w-56" />
        <button
          className="w-72 bg-blue2 text-white mt-2 font-bold rounded-md p-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Change Avatar
        </button>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Change Username */}
          <div className="flex flex-col">
            <h2 className="text-blue2 font-bold mb-2">Change Username</h2>
            <input
              type="text"
              className="mb-2 w-72 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2 placeholder-blue2 text-blue2"
              placeholder="Username"
            />
            <button className="w-72 bg-blue2 text-white mt-2 font-bold rounded-md p-2 mb-2">
              Change Username
            </button>
          </div>
          {/* Change Password */}
          <div className="flex flex-col">
            <h2 className="text-blue2 font-bold mb-2">Change Password</h2>
            <input
              type="password"
              placeholder="Password"
              className="w-72 mb-2 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2"
            />
            {/* <input type="password" placeholder='Confirm Password'className='w-72 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2' /> */}
            <button className="w-72 bg-blue2 text-white mt-2 font-bold rounded-md p-2 mb-2">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* dialog */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Select Your Avatar!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2">Change Avatar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
