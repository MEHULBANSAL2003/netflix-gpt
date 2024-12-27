import React, { useRef, useState } from "react";
import lang from "../utilities/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utilities/openai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_OPTIONS } from "../utilities/constants";
import { addGptMoviesResult } from "../redux/gptSlice";
import Loader from "./Loader";

const GptSearchBar = () => {
  const currLang = useSelector((store) => store.lang.lang);
  const navigate = useNavigate();
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); 
  const [error,setError]=useState(null);

  const searchMovie = async (movie) => {
    const data = await axios(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    return data?.data?.results;
  };

  const clearError=()=>{
    setError(null);
  }
  const handleGptSearch = async () => {
    if (searchText?.current?.value === "") {
      setError("Input Field is empty.Please enter what you want to search for..!!")
      return;
    }

    setLoading(true); 
    const searchQuery = `Act as a movie recommendation system and suggest some movies for the query : "${searchText?.current?.value}".Only give me name of 10 movies,comma separated like the example result given ahead. Example Result: Gadar,sholay,don, golmal...`;

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchQuery }],
        model: "gpt-3.5-turbo",
      });

      if (
        !gptResults.choices ||
        gptResults.choices[0].message.content.includes("movie recommendations") ||
        gptResults.choices[0].message.content.includes("movies")
      ) {
        toast.error("Sorry..!! No movie found.");
        navigate("/gpt-search");
        return;
      }

      const gptMovies = gptResults.choices[0]?.message?.content.split(",");
      const promiseData = gptMovies.map((movie) => searchMovie(movie));
      const movie_promiseResult = await Promise.all(promiseData);

      dispatch(addGptMoviesResult({ movieNames: gptMovies, movieResults: movie_promiseResult }));
    } catch (error) {
      toast.error("An error occurred while fetching movie suggestions.");
    } finally {
      
    searchText.current.value = "";
      setLoading(false);
    }
  };

  return (
    <div>
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          onChange={clearError}
          placeholder={lang[currLang].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className={`py-2 px-4 m-4 col-span-3 rounded ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-700 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : lang[currLang].search}
        </button>
      </form>
      {error && (
        <h1 className="mt-2 text-center bg-black bg-opacity-90   text-red-600 font-semibold text-lg">
          {error}
        </h1>
      )}
    </div>
    {loading && (
      <div className="fixed inset-0 flex items-center justify-center">
        <Loader />
      </div>
    )}
  </div>
  
  );
};

export default GptSearchBar;
