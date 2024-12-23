import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addTopRatedMovies} from "../redux/movieSlice";
import axios from "axios";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await axios(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    dispatch(addTopRatedMovies(data.data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;