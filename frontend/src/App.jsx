import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect,Suspense ,lazy} from "react";
import axios from "axios";
import { setUser } from "./redux/userSlice";

const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./components/Home"));
const Browse = lazy(() => import("./components/Browse"));
const ChangePassword=lazy(()=>import("./components/ChangePassword"));

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
          if (!user.email) {
            const name = response.data.data.name;
            const email = response.data.data.email;
            dispatch(setUser({ name, email }));
          }
        }
      } catch (err) {}
    };

    getUser();
  }, []);

  return (
   
    <div>
      {/* <Login/>
     <ToastContainer />  */}
     <Suspense fallback={<div className="text-center font-bold text-5xl">Loading...</div>}>
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
            <Route
          path={"/change-password"}
          element={user.email ? <ChangePassword /> : <Navigate to="/login" />}
        />
      
      </Routes>
      
      </Suspense>

      <ToastContainer />
    </div>
    
  );
}

export default App;
