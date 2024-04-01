import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
    
    return(
        <div>
            <Header/>
            {
                showGptSearch ? <GptSearch/> :<> 
                                              <MainContainer/>
                                              <SecondaryContainer/>
                                              </>
  
            }
            
            {/**
             - main container
               -video background
               -video title
            - secondary container
              - movieList*n
                - movie-cards*n
             */}
    
        </div>
    )
}

export default Browse;