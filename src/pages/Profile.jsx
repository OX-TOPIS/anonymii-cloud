import React, {useState,  useEffect} from "react";

const Profile = () => {

  const [profileImage, setProfileImage] = useState("");
  const [profileRefreshImage, setProfileRefreshImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [refreshUsername, setRefreshUsername] = useState("");
  const [refreshPassword, setRefreshPassword] = useState("");
  const [refreshConfirmPassword, setRefreshConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);


  useEffect(() => {
    setProfileImage("avatar14.png");
    setUsername("heyabaebey");
    setPassword("kuykuykuykuy");
  }, []);

  // ให้ใน modal มีภาพ avatar ปัจจุบัน
  useEffect(() => {
    setProfileRefreshImage(profileImage);
  }, [profileImage]);



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


  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible((prevState) => !prevState);
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
              className="mb-2 w-full outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2 placeholder-blue2 text-blue2 font-bold"
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

      {/* hide/show new password */}
      <div className="relative  container mx-auto mt-5">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="new password" value={refreshPassword} onChange={e => setRefreshPassword(e.target.value)}
        className="w-full
        outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2 font-bold"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-blue2 font-bold"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>

    {/* hide/show confirm new password */}
    <div className="relative  container mx-auto mt-5">
      <input
        type={isConfirmPasswordVisible ? "text" : "password"}
        placeholder="confirm new password" value={refreshConfirmPassword} onChange={e => setRefreshConfirmPassword(e.target.value)}
        className="w-full
        outline-blue2 border-blue2 rounded-md p-2 bg-gray-100 border-2  placeholder-blue2 text-blue2 font-bold"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-blue2 font-bold"
        onClick={toggleConfirmPasswordVisibility}
      >
        {isConfirmPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>
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
