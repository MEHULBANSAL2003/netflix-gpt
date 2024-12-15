import React from "react";
import Header from "./Header";

const Login = () => {
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
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
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
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
