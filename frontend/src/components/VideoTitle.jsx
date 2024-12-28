import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
    
      className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black"
    >
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <h2 className="hidden md:inline-block py-6 text-lg w-2/5">{overview}</h2>

      <div className="flex my-3">
        <button className="flex items-center bg-white text-black py-2 md:py-3 px-5 md:px-10 text-xl rounded hover:bg-opacity-80">
          <FaPlay className="mr-2" /> Play
        </button>
        <button className="flex items-center mx-3 bg-gray-600 text-white py-2 md:py-3 px-2 md:px-10 text-xl rounded hover:bg-opacity-50">
          <MdInfoOutline className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
