import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import {addUpcomingMovies} from "../redux/movieSlice";
import axios from "axios";


const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
      const data = await axios(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      dispatch(addUpcomingMovies(data.data.results));
    };
  
    useEffect(() => {
      getUpcomingMovies();
    }, []);



}

export default useUpcomingMovies