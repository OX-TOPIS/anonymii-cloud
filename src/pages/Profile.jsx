import React, {useState,  useEffect} from "react";

const Profile = () => {

  const [profileImage, setProfileImage] = useState("");
  const [profileRefreshImage, setProfileRefreshImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [refreshUsername, setRefreshUsername] = useState("");
  const [refreshPassword, setRefreshPassword] = useState("");
  const [refreshConfirmPassword, setRefreshConfirmPassword] = useState("");


  useEffect(() => {
    setProfileImage("avatar14.png");
    setUsername("heyabaebey");
    setPassword("kuykuykuykuy");
  }, []);

  // ให้ใน modal มีภาพ avatar ปัจจุบัน
  useEffect(() => {
    setProfileRefreshImage(profileImage);
  }, [profileImage]);

  // useEffect(() => {
  //   if (username !== "") {
  //     setRefreshUsername("");
  // }
  // }, [username]);

  // useEffect(() => {
  //   if (password !== "") {
  //     setRefreshPassword("");
  //     setRefreshConfirmPassword("");
  // }
  // }, [password]);


  const changeAvatar = () => {
    setProfileImage(profileRefreshImage);
    alert("success!")
  }

  const changeUsername = () => {
    setUsername(refreshUsername);
    setRefreshUsername("");
    alert("success!")
  }

  const changePassword = () => {
    if (refreshPassword === refreshConfirmPassword){
      setPassword(refreshPassword);
      alert("success!");
      setRefreshPassword("");
      setRefreshConfirmPassword("");
    }
    else {
      alert("รหัสผ่านไม่ตรงกัน!");
      setRefreshPassword("");
      setRefreshConfirmPassword("");
    }
  }

  return (
    <div className="content">
      <div className="h-10/12 flex flex-col space-y-10 items-center mt-6">
        <img src={profileImage} alt="" className="w-56" />
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
              className="mb-2 w-72 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2 placeholder-blue2 text-blue2 font-bold"
              placeholder="Username" value={username} disabled readonly
            />
            <button className="w-72 bg-blue2 text-white mt-2 font-bold rounded-md p-2 mb-2"
            onClick={() => document.getElementById("my_modal_2").showModal()}>
              Change Username
            </button>
          </div>
          {/* Change Password */}
          <div className="flex flex-col">
            <h2 className="text-blue2 font-bold mb-2">Change Password</h2>
            <input
              type="password"
              placeholder="Password" value={password}
              className="w-72 mb-2 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2 font-bold" disabled readonly
            />
           
            {/* <input type="password" placeholder='Confirm Password'className='w-72 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2' /> */}
            <button className="w-72 bg-blue2 text-white mt-2 font-bold rounded-md p-2 mb-2"
            onClick={() => document.getElementById("my_modal_3").showModal()}>
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* dialog */}
      {/* modal Avatar */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">

          <div className="grid grid-cols-3 mb-4">
            <img src={profileRefreshImage} alt="" className="w-36 col-start-2" />
          </div>
          <h3 className="font-bold text-white mb-3">Select Your Avatar</h3>

          <div class="grid grid-cols-4 gap-4 mb-2">
            <img src="avatar.png" alt="avatar1" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar.png")}/>
            <img src="avatar2.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar2.png")} />
            <img src="avatar3.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar3.png")} />
            <img src="avatar4.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar4.png")} />
          </div>
          <div class="grid grid-cols-4 gap-4 mb-2">
            <img src="avatar5.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar5.png")} />
            <img src="avatar6.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar6.png")} />
            <img src="avatar7.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar7.png")} />
            <img src="avatar8.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar8.png")} />
          </div>
          <div class="grid grid-cols-4 gap-4 mb-2">
            <img src="avatar9.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar9.png")} />
            <img src="avatar10.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar10.png")} />
            <img src="avatar11.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar11.png")} />
            <img src="avatar12.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar12.png")} />
          </div>
          <div class="grid grid-cols-4 gap-4 mb-2">
            <img src="avatar13.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar13.png")} />
            <img src="avatar14.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar14.png")} />
            <img src="avatar15.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar15.png")} />
            <img src="avatar16.png" alt="" className="w-32 cursor-pointer" onClick={() => setProfileRefreshImage("avatar16.png")} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-neutral-600 text-white mt-2 mr-2 font-bold rounded-md p-2" onClick={() => setProfileRefreshImage(profileImage)}>Cancel</button>
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2" onClick={changeAvatar}>Save</button>
            </form>
          </div>
        </div>
      </dialog>

    {/* modal Username */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-white mb-3">Change your Username</h3>
          <input
              type="text"
              className="mb-2 w-72 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2 placeholder-blue2 text-blue2 font-bold"
              placeholder="new username" value={refreshUsername} onChange={e => setRefreshUsername(e.target.value)}
            />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-neutral-600 text-white mt-2 mr-2 font-bold rounded-md p-2" onClick={() => setRefreshUsername("")}>Cancel</button>
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2" onClick={changeUsername}>Save</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* modal password */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-white mb-3">Change Your Password</h3>
          <input
              type="password"
              placeholder="new password" value={refreshPassword} onChange={e => setRefreshPassword(e.target.value)}
              className="w-72 mb-3 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2 font-bold"
            />
            <input
              type="password"
              placeholder="confirm new password" value={refreshConfirmPassword} onChange={e => setRefreshConfirmPassword(e.target.value)}
              className="w-72 mb-2 outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2 font-bold"
            />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-neutral-600 text-white mt-2 mr-2 font-bold rounded-md p-2" onClick={() => {setRefreshPassword(""); setRefreshConfirmPassword("");}}>Cancel</button>
              <button className="bg-blue2 text-white mt-2 font-bold rounded-md p-2" onClick={changePassword}>Save</button>
            </form>
          </div>
        </div>
      </dialog>

     
    </div>
  );
};

export default Profile;
