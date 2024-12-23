import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addMoreMovies } from "../redux/movieSlice";
import axios from "axios";

const useMoreMovies = () => {
    const dispatch = useDispatch();

    const getMoreMovies = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
        API_OPTIONS
      );
      dispatch(addMoreMovies(data.data.results));
    };
  
    useEffect(() => {
      getMoreMovies();
    }, []);
}

export default useMoreMovies