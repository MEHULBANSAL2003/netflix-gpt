import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addTrendingMovies } from "../redux/movieSlice";
import axios from "axios";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await axios(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    dispatch(addTrendingMovies(data.data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
