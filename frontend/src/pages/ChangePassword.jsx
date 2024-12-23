import React, { useState, useRef } from "react";
import Header from "../components/Header";
import axios from "axios";
import { validateNewPassword } from "../utilities/validation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const currentPassword = useRef(null);
  const newPassword = useRef(null);
  const reEnteredPassword = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleChangePassword = async () => {
    let currP = currentPassword.current.value;
    let newP = newPassword.current.value;
    let reNewP = reEnteredPassword.current.value;
    if (currP == "") {
      setError("Current password is required.");
      return;
    }

    try {
      let URL = `${import.meta.env.VITE_BACKEND_URL}/check-user`;

      let response = await axios({
        method: "post",
        url: URL,
        data: {
          password: currP,
        },
        withCredentials: true,
      });

      if (response?.data?.result == "success") {
        const message = validateNewPassword(newP);
        if (message !== null) {
          setError(message);

          currentPassword.current.value = "";
          newPassword.current.value = "";
          reEnteredPassword.current.value = "";
          return;
        }
        if (currP === newP) {
          setError("New password cannot be same as that of old password");

          currentPassword.current.value = "";
          newPassword.current.value = "";
          reEnteredPassword.current.value = "";
          return;
        }
        if (newP !== reNewP) {
          setError("please enter the same password as entered in above field.");
          reEnteredPassword.current.value = "";
          return;
        }

        URL = `${import.meta.env.VITE_BACKEND_URL}/change-password`;

        response = await axios({
          method: "post",
          url: URL,
          data: {
            password: newP,
            email: user.email,
          },
          withCredentials: true,
        });

        if (response?.data?.result == "success") {
          toast.success(response?.data?.message);
          currentPassword.current.value = "";
          newPassword.current.value = "";
          reEnteredPassword.current.value = "";

          navigate("/browse");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };
  const clearError = () => {
    setError(null);
  };

  const handleCancelClick=()=>{
      navigate("/browse");
  }

  return (
    <div className="bg-slate-50">
      <Header />

      <div className="max-w-md mx-auto px-10 py-36 rounded-md shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6">Change Password</h1>
        <p className="text-gray-400 mb-8">
          Protect your account with a unique password at least 8 characters
          long.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium"
            >
              Current Password
            </label>
            <input
              ref={currentPassword}
              id="current-password"
              type="password"
              onChange={clearError}
              placeholder="Enter your current password"
              className="w-full mt-2 p-3 rounded  text-black border border-gray-700"
            />
            {error && error[0] == "C" && (
              <h1 className="text-red-700">{error}</h1>
            )}
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium">
              New Password
            </label>
            <input
              ref={newPassword}
              id="new-password"
              type="password"
              onChange={clearError}
              placeholder="Enter your new password"
              className="w-full mt-2 p-3 rounded text-black border border-gray-700"
            />
            {error && (error[0] == "P" || error[0] == "N") && (
              <h1 className="text-red-700">{error}</h1>
            )}
          </div>
          <div>
            <label
              htmlFor="reenter-password"
              className="block text-sm font-medium"
            >
              Re-enter New Password
            </label>
            <input
              ref={reEnteredPassword}
              id="reenter-password"
              type="password"
              onChange={clearError}
              placeholder="Re-enter new password"
              className="w-full mt-2 p-3 rounded text-black border border-gray-700"
            />
            {error && error[0] === "p" && (
              <h1 className="text-red-700">{error}</h1>
            )}
          </div>
            <button
             type="submit"
             onClick={handleCancelClick}
             className="w-20 py-3 bg-slate-50 border border-gray-700 text-black rounded mx-1"
            >
              Cancel
            </button>
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
