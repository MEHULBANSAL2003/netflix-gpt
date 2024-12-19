import React from 'react'
import { NETFLIX_LOGO } from '../utilities/constants'
import { FaUserAlt } from "react-icons/fa";
import { useSelector ,useDispatch} from 'react-redux'
import { removeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const userInfo=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate= useNavigate();
 // console.log(userInfo);

  const handleLogout=()=>{
     dispatch(removeUser());
     navigate("/login");

  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between w-full">
      <img className="w-44" src={NETFLIX_LOGO} alt="Netflix Logo" />
      <div className="relative group">
        {/* Avatar Icon */}
        {userInfo.email &&
        <h2 className="text-pink-400 text-2xl cursor-pointer">
          <FaUserAlt/>
        </h2>
}

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-black  text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer" >{userInfo.name}</li>
            <li className="px-4 py-2 cursor-pointer">Manage Account</li>
            <li className="px-4 py-2 cursor-pointer">Settings</li>
            <li className="px-14 py-4 cursor-pointer font-bold hover:underline underline-offset-2 decoration-2"onClick={handleLogout}>Logout</li>

          </ul>
        </div>
      </div>
    </div>
  );
  
}

export default Header
