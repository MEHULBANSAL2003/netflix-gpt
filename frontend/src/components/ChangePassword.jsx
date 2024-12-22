import React, { useState,useRef } from "react";
import Header from "./Header";
import axios from "axios";

const ChangePassword = () => {

  const currentPassword=useRef(null);
  const newPassword=useRef(null);
  const reEnteredPassword=useRef(null);
  const [error,setError]=useState(null);



  const handleChangePassword=async()=>{
    const currP=currentPassword.current.value;
      const newP=newPassword.current.value;
      const reNewP=reEnteredPassword.current.value;

      try{
      const URL=`${import.meta.env.VITE_BACKEND_URL}/change-password`;

      const response=await axios({
          method:"post",
          url:URL,
          data:{
            password:currP
          },
          withCredentials:true
      });
       
      console.log(response);
      }
      catch(err){
        console.log(err.message);
      }
  }


  return (
    < div className="bg-slate-50">
     
      <Header/>
      
      <div className="max-w-md mx-auto px-10 py-36 rounded-md shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6">Change Password</h1>
        <p className="text-gray-400 mb-8">
          Protect your account with a unique password at least 8 characters long.
        </p>
        <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label htmlFor="current-password" className="block text-sm font-medium">
              Current Password
            </label>
            <input
            ref={currentPassword}
              id="current-password"
              type="password"
              placeholder="Enter your current password"
              className="w-full mt-2 p-3 rounded  text-black border border-gray-700"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium">
              New Password
            </label>
            <input
            ref={newPassword}
              id="new-password"
              type="password"
              placeholder="Enter your new password"
              className="w-full mt-2 p-3 rounded text-black border border-gray-700"
            />
          </div>
          <div>
            <label htmlFor="reenter-password" className="block text-sm font-medium">
              Re-enter New Password
            </label>
            <input
            ref={reEnteredPassword}
              id="reenter-password"
              type="password"
              placeholder="Re-enter new password"
              className="w-full mt-2 p-3 rounded text-black border border-gray-700"
            />
          </div>
          <button
          onClick={handleChangePassword}
            type="submit"
            className="w-20 py-3   bg-blue-600 rounded font-bold text-white hover:bg-blue-700 transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
