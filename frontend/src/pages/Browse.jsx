import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
   
  useNowPlayingMovies(); 


  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
