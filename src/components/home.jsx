import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Dictionary with info for internal and external links
  const linksInfo = [
    {
      title: 'Background',
      description: 'A bit more about me.',
      link: '/about',
      type: 'internal',
    },
    {
      title: 'Skills',
      description: "Some skills I've developed.",
      link: '/skills',
      type: 'internal',
    },
    {
      title: 'Experience',
      description: "Where I've gained valuable experience.",
      link: '/experience',
      type: 'internal',
    },
    {
      title: 'Projects',
      description: "Some projects I've done.",
      link: '/projects', // Updated link for projects
      type: 'internal',
    },
    {
      title: 'Contact',
      description: 'Get in touch with me.',
      link: '/contact',
      type: 'internal',
    },
    {
      title: 'Resume',
      description: 'Take a look at my resume.',
      link: '/resume.pdf', // Correct path for public folder
      type: 'external',
    },
    
    {
      title: 'GitHub',
      description: 'Check out my Github.',
      link: 'https://github.com/great-anubis',
      type: 'external',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me.',
      link: 'https://www.linkedin.com/in/great-osikhueme/',
      type: 'external',
    },
    {
      title: 'Other fun stuff',
      description: 'Things I like.',
      link: '/fun-stuff',
      type: 'internal',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Loop over the linksInfo array to create boxes */}
        {linksInfo.length > 0 ? (
          linksInfo.map((item, index) => (
            <div key={index} className="flex justify-center">
              {item.type === 'internal' ? (
                <Link to={item.link} aria-label={item.title}>
                  <div className="box w-64 h-32 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  <div className="box w-64 h-32 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </a>

              )}
            </div>
          ))
        ) : (
          <p>No links available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
