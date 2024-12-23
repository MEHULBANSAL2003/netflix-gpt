import React from "react";
import { useSelector } from "react-redux";
import useTrailorVideo from "../hooks/useTrailorVideo";

const VideoBackground = ({ movieId }) => {
  useTrailorVideo(movieId);

  const trailorId = useSelector((store) => store.movies?.trailorVideo);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailorId?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
