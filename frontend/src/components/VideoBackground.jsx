import axios from "axios";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailorVideo } from "../redux/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  const trailorId = useSelector((store) => store.movies?.trailorVideo);

  const getMovieVideo = async () => {
    const data = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = data?.data;

    const filteredTrailerVideos = json.results.filter((item) => {
      return item.type === "Trailer";
    });

    const trailorVideo = filteredTrailerVideos.length
      ? filteredTrailerVideos[0]
      : json.results[0];

    //console.log(trailorVideo);
    dispatch(addTrailorVideo(trailorVideo));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

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
