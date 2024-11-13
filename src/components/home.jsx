import React from 'react';
import { Link } from 'react-router-dom';
import About from './about';

const Home = () => {
  // Dictionary with info for internal links
  const linksInfo = [
    {
      title: 'Experience',
      description: "Where I've gained valuable experience.",
      link: '/experience',
    },
    {
      title: 'Projects',
      description: "Some projects I've done.",
      link: '/projects',
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen px-6 flex flex-col items-center">
      <About />

      <div className="container mx-auto max-w-3xl py-12 flex justify-center space-x-20">
        {/* Loop over the linksInfo array to create boxes */}
        {linksInfo.length > 0 ? (
          linksInfo.map((item, index) => (
            <Link key={index} to={item.link} aria-label={item.title}>
              <div className="box w-80 h-40 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg p-8 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-center text-base">{item.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No links available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
