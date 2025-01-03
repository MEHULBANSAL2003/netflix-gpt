import React from "react";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_ICON,
} from "../utilities/constants";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { IoSearchSharp } from "react-icons/io5";
import { toggleGptSearchView } from "../redux/gptSlice";
import { changeLang } from "../redux/languageSlice";

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

  const handleSearchButtonToggle = () => {
    dispatch(toggleGptSearchView());
    navigate("/gpt-search");
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const handleLogoClick = () => {
    navigate("/browse");
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-col md:flex-row items-center sm:justify-center md:justify-between w-full">
      <img
        className="w-44 hover:cursor-pointer"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        onClick={handleLogoClick}
      />
      <div className="relative flex items-center">
        {userInfo.email && (
          <select
            className=" p-2 m-2 bg-gray-950 text-white border border-black"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifer} value={lang.identifer}>
                {" "}
                {lang.name}{" "}
              </option>
            ))}
          </select>
        )}

        {userInfo.email && (
          <div
            onClick={handleSearchButtonToggle}
            className="flex items-center text-white rounded-full px-4 py-2 hover:bg-gray-900 hover:cursor-pointer"
          >
            <IoSearchSharp className="text-xl mr-2" />
          </div>
        )}
        <div>
        {userInfo.email && (
          <div className="relative group">
            <img
              src={USER_ICON}
              alt="user_info"
              className="w-10 h-10 rounded cursor-pointer border-2 border-transparent hover:border-white transition-all"
            />
            <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="py-2">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
                  {userInfo.name}
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
                  Manage Account
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
                  Settings
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <Link to="/change-password">Change Password</Link>
                </li>
                <li
                  className="px-14 py-2 font-bold cursor-pointer hover:underline underline-offset-2 decoration-2 hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;
