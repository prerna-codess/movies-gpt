import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = ( ) => {
    return (
        <div className=" bg-black">
            {/* 
            GPT Search bar
            GptMovieSuggestions */}
            <GptSearchBar/>
            <GptMovieSuggestion/>

        </div>
    );
};

export default GptSearch;