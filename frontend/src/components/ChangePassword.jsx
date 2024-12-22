import React from "react";
import Header from "./Header";

const ChangePassword = () => {
  return (
    < div>
      <Header />
      <div className="max-w-md mx-auto px-10 py-36 rounded-md shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6">Change Password</h1>
        <p className="text-gray-400 mb-8">
          Protect your account with a unique password at least 8 characters long.
        </p>
        <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label htmlFor="current-password" className="block text-sm font-medium">
              Current Password
            </label>
            <input
              id="current-password"
              type="password"
              placeholder="Enter your current password"
              className="w-full mt-2 p-3 rounded  text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium">
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              placeholder="Enter your new password"
              className="w-full mt-2 p-3 rounded text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="reenter-password" className="block text-sm font-medium">
              Re-enter New Password
            </label>
            <input
              id="reenter-password"
              type="password"
              placeholder="Re-enter your new password"
              className="w-full mt-2 p-3 rounded text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3  bg-blue-600 rounded font-bold text-white hover:bg-blue-700 transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
