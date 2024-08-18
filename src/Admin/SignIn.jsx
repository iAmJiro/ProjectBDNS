import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

export default function SignIn() {
    const usernameInput = useRef();
    const passwordInput = useRef();

    const LoginHandler = (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = usernameInput.current.value;
        const password = passwordInput.current.value;

        const loginData = {
            username: username,
            password: password
        };

        fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(body => {
            console.log('Response from backend:', body); 
            if (body.token) {
                sessionStorage.setItem('token', body.token);
                console.log('Token stored:', sessionStorage.getItem('token')); 
            }
            if (body.userGroup) {
                sessionStorage.setItem('userGroup', body.userGroup);
                console.log('UserGroup stored:', sessionStorage.getItem('userGroup')); 
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
    };

    return (
        <>
        <NavLink to="/" className="ml-10">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-md mt-6 hover:bg-green-700 transition ease-in-out duration-150">
            Go to Home Page
        </button>
    </NavLink>
        <div className="flex justify-center mt-20">
             
            <div className="w-full max-w-md bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
                <form className="flex flex-col" onSubmit={LoginHandler}>
                    <input ref={usernameInput} type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150" placeholder="User Name" />
                    <input ref={passwordInput} type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150" placeholder="Password" />
                    <button type="submit" className="bg-gradient-to-r from-purple-800 to-purple-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black hover:to-gray-700 transition ease-in-out duration-150">Login</button>
                </form>
                
               
            </div>
        </div>
        </>
    );
}
