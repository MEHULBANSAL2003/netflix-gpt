import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { API_OPTIONS } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await axios(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    dispatch(addNowPlayingMovies(data.data.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
