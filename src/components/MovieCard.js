import {IMG_CDN} from "../utils/constants";
const MovieCard = ({posterPath}) => {
    console.log(posterPath)
    if(!posterPath) return null;
    return(
        <div className=" w-36 md:w-48 pr-4">
            <img alt="movie-logo" src= {IMG_CDN + posterPath}/>
        </div>
    );
};

export default MovieCard;
