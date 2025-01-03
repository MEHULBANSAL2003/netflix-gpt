import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import { setUser } from "./redux/userSlice";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Browse = lazy(() => import("./pages/Browse"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const GptSearch = lazy(() => import("./pages/GptSearch"));

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    setLoading(true);
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}/getUserByToken`;
      const response = await axios({
        method: "get",
        url: URL,
        withCredentials: true,
      });
      if (response.data.result === "success") {
        if (!user.email) {
          const name = response.data.data.name;
          const email = response.data.data.email;
          dispatch(setUser({ name, email }));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
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
            <Route
              path={"/gpt-search"}
              element={user.email ? <GptSearch /> : <Navigate to="/login" />}
            />
          </Routes>
        </Suspense>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
