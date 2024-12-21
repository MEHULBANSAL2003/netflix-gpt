import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import Browse from "./components/Browse";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const user = useSelector((store) => store.user);
  //const [isLoggedInUser,setIsLoggedInUser]=useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const URL = `${import.meta.env.VITE_BACKEND_URL}/getUserByToken`;
        const response = await axios({
          method: "get",
          url: URL,
          withCredentials: true,
        });

        if (response.data.result == "success") {
          toast.success(response.data.message);
       
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      {/* <Login/>
     <ToastContainer />  */}
      <Routes>
        <Route
          path={"/"}
          element={!user.email ? <Home /> : <Navigate to="/browse" />}
        />
        <Route
          path={"/login"}
          element={!user.email ? <Login /> : <Navigate to="/browse" />}
        />
        <Route
          path={"/browse"}
          element={user.email ? <Browse /> : <Navigate to="/login" />}
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
