import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';
import Experience from './components/experience';
import FunStuff from './components/funStuff'; 
import DarkModeToggle from './components/DarkModeToggle';
import Memoji from './images/memoji.png'; 

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">

      <div className="text-center p-5">
        <img src={Memoji} alt="Great Osikhueme Memoji" className="mx-auto mb-4 w-32 h-32" />
        <h1 className="text-3xl font-bold mb-2">Great Osikhueme</h1>
        <p className="text-lg">Machine Learning Student</p>
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      <Router>
        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fun-stuff" element={<FunStuff />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
