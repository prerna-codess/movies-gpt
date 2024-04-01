import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () =>{
    const selectedLang = useSelector((store)=> store.config.lang);
    return (
        <div className="pt-[5%]">
            <form className=" bg-black grid grid-cols-12">
                <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[selectedLang].gptSearchBarPlaceholder}/>
                <button className=" py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">{lang[selectedLang].search}</button>

            </form>

        </div>
    );
};
export default GptSearchBar;