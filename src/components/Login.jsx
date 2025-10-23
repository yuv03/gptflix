import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errMessage, setErrMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    // Validate the form data 
    const message = isSignInForm ? checkValidData(email.current.value, password.current.value) : checkValidData(email.current.value, password.current.value, name.current.value)
    setErrMessage(message)

    // Now do Sign In / Sign Up

  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg" alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black/70 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 placeholder-gray-400 text-white rounded-md" />)}

        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 placeholder-gray-400 text-white rounded-md" />

        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 placeholder-gray-400 text-white rounded-md" />
        <p className="text-red-500 font-bold py-1">{errMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
