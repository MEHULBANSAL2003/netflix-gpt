import React from "react";
import { useSelector } from "react-redux";
import useTrailorVideo from "../hooks/useTrailorVideo";

const VideoBackground = ({ movieId }) => {
  useTrailorVideo(movieId);

  const trailorId = useSelector((store) => store.movies?.trailorVideo);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailorId?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
