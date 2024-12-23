import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div style={{height:"90vh"}} className="w-screen pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h2 className="py-6 text-lg w-1/4">{overview}</h2>

      <div>
        <button className="bg-white text-black p-3 px-12 text-xl rounded hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-3 bg-gray-600 text-white p-3 px-8 text-xl rounded-lg hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
