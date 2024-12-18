import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Body from "./Body";
import Header from "./Header";
import {checkSignInValidData,checkSignUpValidData,} from "../utilities/validation";
import axios from "axios";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

const handleForgotPasword=()=>{
  // to be implemented later..!!

}

  const togglePasswordVisibility = () => {
    if (password.current) {
      password.current.type =
        password.current.type === "password" ? "text" : "password";
    }
    setShowPassword((prev) => !prev);
  };

  const handleClick = async () => {
    if (isSignIn) {
      const message = checkSignInValidData(
        email.current.value,
        password.current.value
      );
      setErrMessage(message);

      if (message === null) {
        const URL = `${import.meta.env.VITE_BACKEND_URL}/login`;
        try {
          const response = await axios({
            method: "post",
            url: URL,
            data: {
              email: email.current.value,
              password: password.current.value,
            },
            withCredentials: true,
          });

          if (response.data.result == "success") {
            toast.success(response.data.message);
            email.current.value = "";
            password.current.value = "";
          }
        } catch (err) {
          toast.error(err.response.data.message);
          email.current.value = "";
          password.current.value = "";
        }
      }
    } else {
      const message = checkSignUpValidData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrMessage(message);

      if (message === null) {
        const URL = `${import.meta.env.VITE_BACKEND_URL}/signup`;
        try {
          const response = await axios({
            method: "post",
            url: URL,
            data: {
              name: name.current.value,
              email: email.current.value,
              password: password.current.value,
            },
            withCredentials: true,
          });

          if (response.data.result == "success") {
            toast.success(response.data.message);
            name.current.value = "";
            email.current.value = "";
            password.current.value = "";
          }
        } catch (err) {
          toast.error(err.response.data.message);
          name.current.value = "";
          email.current.value = "";
          password.current.value = "";
        }
      }
    }
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black bg-opacity-80  my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-3 my-3 w-full rounded bg-transparent border border-gray-400"
          />
        )}
        {errMessage && errMessage.charAt(0) == "N" && (
          <p className="text-red-500  py-0">{errMessage}</p>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your email"
          className="p-3 my-3 w-full rounded bg-transparent border border-gray-400"
        />
        {errMessage && errMessage.charAt(0) == "E" && (
          <p className="text-red-500 py-0">{errMessage}</p>
        )}

        <div className="relative w-full my-3">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full rounded bg-transparent border border-gray-400 pr-12"
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent text-white hover:text-slate-100"
            type="button"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </div>
        {isSignIn && <p className="cursor-pointer text-slate-200" onClick={handleForgotPasword}>Forgot Password?</p>}

        {errMessage && errMessage.charAt(0) == "P" && (
          <p className="text-red-500 font-bold py-0">{errMessage}</p>
        )}

        <button
          className="p-2 my-6 rounded bg-red-600 hover:bg-red-700 w-full"
          onClick={handleClick}
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <div className="flex space-x-2">
          {isSignIn && (
            <>
              <p className="text-gray-300">New to Netflix?</p>
              <p className="font-bold cursor-pointer" onClick={toggleForm}>
                Sign up now
              </p>
            </>
          )}
          {!isSignIn && (
            <>
              <p className="text-gray-300">Already registered?</p>
              <p className="font-bold cursor-pointer" onClick={toggleForm}>
                Sign in now
              </p>
            </>
          )}
        </div>
      </form>

      <Body />
    </div>
  );
};

export default Login;
