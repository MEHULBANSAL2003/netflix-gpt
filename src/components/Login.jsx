import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
   let [isSignIn,setIsSignIn]=useState(true);

  const toggleForm=()=>{
    
    setIsSignIn(!isSignIn);

  }
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg"
          alt="background"
        />
      </div>

      <form className=" w-3/12 absolute p-12 bg-black bg-opacity-80  my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign in":"Sign up"}</h1>

        {!isSignIn &&
        <input
        type="text"
        placeholder="Name"
        className="p-3 my-3 w-full rounded bg-transparent "
      />
        }
        <input
          type="text"
          placeholder="Enter your email"
          className="p-3 my-3 w-full rounded bg-transparent "
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 my-3 w-full rounded bg-transparent"
        />
        <button className="p-2 my-6 rounded bg-red-600 hover:bg-red-700 w-full">
        {isSignIn?"Sign in":"Sign up"} 
        </button>
         <div className="flex space-x-2">
          {isSignIn &&
          <>
        <p className="text-gray-300">New to Netflix?</p>
        <p className="font-bold cursor-pointer" onClick={toggleForm}>Sign up now</p>
        </>
          }
           {!isSignIn &&
          <>
        <p className="text-gray-300">Already registered?</p>
        <p className="font-bold cursor-pointer" onClick={toggleForm}>Sign in now</p>
        </>
          }
        </div>
      </form>
    </div>
  );
};

export default Login;
