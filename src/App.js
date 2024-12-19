import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import Experience from './components/experience';
import DarkModeToggle from './components/DarkModeToggle';
import Memoji from './images/memoji.png';
import Resume from './resume.pdf';

const App = () => {
  return (
    <Router basename="/">
      <div className="min-h-screen flex pt-20 flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        {/* Header Section */}
        <div className="text-center p-5">
          <img src={Memoji} alt="Great Osikhueme Memoji" className="mx-auto mb-4 w-32 h-32" />
          <h1 className="text-3xl font-bold mb-2">Great Osikhueme</h1>
          <p className="text-lg">Aspiring Machine Learning Enthusiast</p>
        </div>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Contact Section */}
        <div className="text-center p-2 space-x-4 mt-4 hover:scale-105 transition duration-300">
          <a className="text-med underline hover:no-underline" href="mailto:greatosik@gmail.com">Email Me →</a>
          <a className="text-med underline hover:no-underline" href={Resume} target="_blank" rel="noopener noreferrer">My Resume →</a>
          <a className="text-med underline hover:no-underline" href="https://www.linkedin.com/in/great-osikhueme" target="_blank" rel="noopener noreferrer">My LinkedIn →</a>
          <a className="text-med underline hover:no-underline" href="https://github.com/great-anubis" target="_blank" rel="noopener noreferrer">My GitHub →</a>
        </div>

        {/* Routes for Navigation */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
