import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import {checkValidity} from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm]= useState(true);
    const [errorMessage, setErrorMessage]= useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name =  useRef(null);
    const dispatch = useDispatch();
    

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick =() => {
        //Validate the form data
       
        console.log(email.current.value);
        console.log(password.current.value);
        // console.log(name.current.value);

        const message=checkValidity(email.current.value,password.current.value);
        //console.log(message);
        setErrorMessage(message);
        // message present means data not present or wrong. hence, don't sign in/up
        if(message) return;
        
        // else Sign/ Sign Up
        if(!isSignInForm){
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR,
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}));  
                    //navigate("/browse");
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                    // ...
                  });
                console.log(user);
                

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
                // ..
            });

        }
        else{
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                //navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }


    }
    return(
        <div>
            <Header/>
            <div className=" absolute">
                <img 
                    alt="Backgraound-image"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
                
            </div>
            <form onSubmit={(e)=> e.preventDefault()}
                className=" w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className=" text-3xl font-bold py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>

                {!isSignInForm && <input 
                    ref={name}
                    type="text" 
                    placeholder="Full Name" 
                    className=" p-4 my-4 w-full bg-gray-600"/>}

                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className=" p-4 my-4 w-full bg-gray-600"/>
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className=" p-4 my-4 w-full bg-gray-600"/>
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm?"Sign In":"Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already a user? Sign In Now"}</p>
            </form>
             
        </div>
    );
}
export default Login;