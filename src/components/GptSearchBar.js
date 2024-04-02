import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () =>{
    const selectedLang = useSelector((store)=> store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // Search movie in TMDB
    const searchMovieTMDB = async(movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
              movie +
              "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
          );
          const json = await data.json();
      
          return json.results;

    }

    const handleGptSearchClick = async () =>{
        console.log(searchText.current.value);
        //make an api call to gpt api and get movie results
        const gptQuery = "Act as a movie recommendation system ans suggest some movies for the query" + 
        searchText.current.value + 
        ". only giev me names of 5 movies, comma separated like the exmaple result given ahead. Example Result: Gadar, Sholey, Don, Krish, Koi Mil Gya ";
        console.log(openai);
        console.log(openai.chat);
        console.log(openai.chat.completions);

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-3.5-turbo",
          });

        console.log(gptResults.choices?.[0]?.message?.content);
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        console.log(gptMovies);

       // For each movie I will search TMDB API
          const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
          console.log(promiseArray)
          const tmdbResults = await Promise.all(promiseArray);
          console.log(tmdbResults);

          dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
          );
        

    };


    return (
        <div className="pt-[5%]">
            <form className=" bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>
                <input  ref={searchText} className="p-4 m-4 col-span-9" type="text" placeholder={lang[selectedLang].gptSearchBarPlaceholder}/>
                <button className=" py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>{lang[selectedLang].search}</button>

            </form>

        </div>
    );
};
export default GptSearchBar;