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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
            Home
        </button>
    );
}

export default HomeButton;
