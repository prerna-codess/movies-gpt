import { useEffect } from "react";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", 
        {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + TMDB_API,
            },
          });
        const json =  await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(()=>{
        if(!nowPlayingMovies) getNowPlayingMovies();
    },[]);
};

export default useNowPlayingMovies;