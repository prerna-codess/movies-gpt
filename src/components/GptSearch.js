import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = ( ) => {
    return (
        <>  
            <div className="fixed -z-10">
                <img className=" object-cover" src={BG_URL} alt="logo" />
            </div>
            <div className=" ">
                {/* 
                GPT Search bar
                GptMovieSuggestions */}
                <GptSearchBar/>
                <GptMovieSuggestion/>

            </div>
        </>    
    );
};

export default GptSearch;