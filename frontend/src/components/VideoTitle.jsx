import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h2 className="py-6 text-lg w-1/4">{overview}</h2>

      <div>
        <button className="bg-gray-500 text-white p-3 px-12 text-xl rounded-lg">
          Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-3 px-8 text-xl rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
