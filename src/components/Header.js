import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";

const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
    const handleSignOut= () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            //navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}));
                navigate("/browse");
              } 
              else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");  
              }
        });
        // unsubcribe when component unmounts
        return () => unsubscribe();
    },[]); 
    const handleGPTSearchClick= ()=>{

        dispatch(toggleGptSearchView());

    };
    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    };

    return(
        <div className=" flex absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen justify-between">
            <img 
                className="w-44"
                alt="app-logo" 
                src = {LOGO}/>
        
            {user && (<div className=" flex p-2">

                {showGptSearch && <select className=" bg-black text-white p-2 m-2" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map (lang =>  <option key={lang.indentifier} value={lang.indentifier}>{lang.name}</option>)}
                </select>}

                <button className="py-2 px-4 m-2 text-white" onClick={handleGPTSearchClick}>
                    {showGptSearch?"Home":"GPT Search"}</button>
                
                <img
                    className="w-12 h-12 "
                    alt="user-icon" 
                    src={user?.photoURL}/>

                <button 
                    onClick={handleSignOut}
                    className="font=bold text-white m-2">
                        Sign Out</button>
            </div>)}

        </div>
    )
}

export default Header;