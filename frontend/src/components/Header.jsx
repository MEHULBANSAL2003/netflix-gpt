import React, { useEffect } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utilities/constants";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const userInfo = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/logout`;

    try {
      const response = await axios({
        method: "post",
        url: URL,
        withCredentials: true,
      });

      if (response.data.result == "success") {
        toast.success(response.data.message);

        dispatch(removeUser());
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between w-full">
      <img className="w-44" src={NETFLIX_LOGO} alt="Netflix Logo" />
      <div className="relative group">
        {/* Avatar Icon */}
        {userInfo.email && (
          <img src={USER_ICON} alt="user_info" className="rounded" />
        )}

      {userInfo.email && 
        <div className="absolute right-0 mt-2 w-48 bg-black  text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer">{userInfo.name}</li>
            <li className="px-4 py-2 cursor-pointer">Manage Account</li>
            <li className="px-4 py-2 cursor-pointer">Settings</li>
           <li className="px-4 py-2 cursor-pointer"><Link to="/change-password">Change Password </Link></li>
            <li
              className="px-14 py-4 cursor-pointer font-bold hover:underline underline-offset-2 decoration-2"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
}
      </div>
    </div>
  );
};

export default Header;
