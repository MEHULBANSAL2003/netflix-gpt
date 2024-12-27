import React, { useRef } from "react";
import lang from "../utilities/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utilities/openai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GptSearchBar = () => {
  const currLang = useSelector((store) => store.lang.lang);
  const navigate=useNavigate();

  const searchText = useRef(null);

  
  
  const handleGptSearch = async () => {
    const searchQuery = `Act as a movie recommendation system and suggest some movies for the query : "${searchText?.current?.value}".Only give me name of 10 movies,comma separated like the example result given ahead. Example Result: Gadar,sholay,don, golmal...`;
 
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults);

    if(gptResults.choices[0].message.content.includes("movie recommendations")||gptResults.choices[0].message.content.includes("movies")){
      toast.error("Sorry..!! No movie found.");
      searchText.current.value="";
        navigate("/gpt-search");

      
    }

    console.log(gptResults.choices[0].message.content);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[currLang].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded"
        >
          {lang[currLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
