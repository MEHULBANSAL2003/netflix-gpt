import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addPopularMovies } from "../redux/movieSlice";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await axios(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    dispatch(addPopularMovies(data.data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;