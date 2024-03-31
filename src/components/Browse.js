import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>

            {/**
             - main container
               -video background
               -video title
            - secondary container
              - movie List*n
                - cards*n
             */}
    
        </div>
    )
}

export default Browse;