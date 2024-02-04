import React from "react";
import Card from "../components/Card";

const MyChannel = () => {
  return (
    <div className="content">
      <div className="flex justify-between">
        <div className="headtext">My Channel</div>
        <button
          className="bg-blue2 text-white mt-2 font-bold rounded-md p-2"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          + Channel
        </button>
      </div>

      <Card />

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
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2">
            Create
          </button>
            </form>
          </div>

        </div>
      </dialog>
    </div>
  );
};

export default MyChannel;
