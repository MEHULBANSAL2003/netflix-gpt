import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addTrailorVideo } from "../redux/movieSlice";
import axios from "axios";
const useTrailorVideo = (movieId) => {
  const dispatch = useDispatch();

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
};

export default useTrailorVideo;
