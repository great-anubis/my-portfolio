import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeButton() {
    const navigate = useNavigate(); // React Router hook to navigate programmatically

    const handleClick = () => {
        navigate('/'); // Redirect to the home page ("/")
    };

    return (
        <button
            onClick={handleClick}
            className="px-6 py-3 bg-blue-500 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105"
            aria-label="Go to Home Page"
        >
            Home
        </button>
    );
}

export default HomeButton;
