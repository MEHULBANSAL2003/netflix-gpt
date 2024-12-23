import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utilities/constants';
import { addNowPlayingMovies } from '../redux/movieSlice';
import axios from 'axios';


const useNowPlayingMovies = () => {
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
}

export default useNowPlayingMovies
