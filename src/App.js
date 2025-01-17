import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import Experience from './components/experience';
import DarkModeToggle from './components/DarkModeToggle';
import Memoji from './images/memoji.png';
import Resume from './resume.pdf';

const App = () => {
  return (
    <Router basename="/">
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900 text-black dark:text-white px-4">
        {/* Header Section */}
        <header className="text-center p-5 w-full max-w-md sm:max-w-lg md:max-w-2xl">
          <img
            src={Memoji}
            alt="Great Osikhueme Memoji"
            className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Great Osikhueme</h1>
          <p className="text-base sm:text-lg md:text-xl">Aspiring Machine Learning Enthusiast</p>
        </header>

        {/* Dark Mode Toggle */}
        <div className="mt-4">
          <DarkModeToggle />
        </div>

        {/* Contact Section */}
        <div className="text-center p-2 space-y-2 sm:space-y-0 sm:space-x-4 mt-4 flex flex-col sm:flex-row justify-center items-center">
          <a
            className="text-md sm:text-med px-3 py-2 rounded-md bg-primary dark:bg-secondary text-white dark:text-black transition-transform transform hover:scale-105"
            href="mailto:greatosik@gmail.com"
          >
            Email Me →
          </a>
          <a
            className="text-md sm:text-med px-3 py-2 rounded-md bg-primary dark:bg-secondary text-white dark:text-black transition-transform transform hover:scale-105"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume →
          </a>
          <a
            className="text-md sm:text-med px-3 py-2 rounded-md bg-primary dark:bg-secondary text-white dark:text-black transition-transform transform hover:scale-105"
            href="https://www.linkedin.com/in/great-osikhueme"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn →
          </a>
          <a
            className="text-md sm:text-med px-3 py-2 rounded-md bg-primary dark:bg-secondary text-white dark:text-black transition-transform transform hover:scale-105"
            href="https://github.com/great-anubis"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub →
          </a>
        </div>

        {/* Routes for Navigation */}
        <main className="w-full max-w-4xl mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer (Optional) */}
        <footer className="mt-8 text-center text-sm sm:text-base">
          &copy; 2024 Great Osikhueme. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
