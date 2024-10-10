import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignIn() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize the navigate hook

  const LoginHandler = (event) => {
    event.preventDefault();

    const username = usernameInput.current.value;
    const password = passwordInput.current.value;


    const loginData = {
      username: username,
      password: password,
    };

    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log("Response from backend:", body);
        if (body.token) {
          sessionStorage.setItem("token", body.token);
          console.log("Token stored:", sessionStorage.getItem("token"));
          setMessage("Successfully logged in!");
          navigate("/");
        }
        if (body.userGroup) {
          sessionStorage.setItem("userGroup", body.userGroup);
          console.log("UserGroup stored:", sessionStorage.getItem("userGroup"));
          setMessage("Successfully logged in!");
        }
        else{
          setMessage("Invalid username or password."); 
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setMessage("Invalid username or password.");
      });
  };
  const handleLogout = () => {

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userGroup");
    setMessage("You have been logged out.");
    console.log("User logged out.");


    navigate("/");
  };


  return (
    <>
      <NavLink to="/" className="ml-10">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-md mt-6 hover:bg-green-700 transition ease-in-out duration-150">
          Go to Home Page
        </button>
      </NavLink>
      <div className="flex justify-center mt-20">
        <div className="w-full max-w-md bg-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          
          <form className="flex flex-col" onSubmit={LoginHandler}>
            <input
              ref={usernameInput}
              type="text"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black ring-1 ring-black transition ease-in-out duration-150"
              placeholder="User Name"
            />
            <input
              ref={passwordInput}
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black ring-1 ring-black transition ease-in-out duration-150"
              placeholder="Password"
            />
            {message && (
              <div className="text-red-500 mb-4">
                {message}
              </div>
            )}
            <button
              type="submit"
              className="bg-gradient-to-r from-green-800 to-green-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black hover:to-gray-700 transition ease-in-out duration-150"
            >
              Login
            </button>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-300 to-red-800 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black hover:to-gray-700 transition ease-in-out duration-150"
            >
              Sign Out
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
