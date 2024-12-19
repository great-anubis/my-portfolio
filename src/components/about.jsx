import React from 'react';
import NASAlogo from '../images/nasa_logo.png';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Outer Container */}
      <div className="max-w-4xl mx-auto h-auto sm:h-48 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center p-6 sm:p-4">
        <h2 className="text-2xl sm:text-xl font-bold mb-4">Who am I ?¿</h2>
        <p className="text-center text-sm sm:text-base leading-relaxed">
          How far na, I’m Great, a senior studying Computer Science at Mercy University.
          I love diving into new challenges and figuring things out, especially when it comes to tech. 
          I’ve had the chance to intern at 
          <img
            src={NASAlogo}
            alt="NASA Logo"
            className="inline-block h-5 w-12 mx-1 align-middle"
          />, working on some pretty cool stuff like spacecraft communication and RF technology.
          I’m always coming up with ideas, but I’m just as excited to jump on board with someone who’s got a great one.
          When I’m not buried in code, you’ll probably find me listening to music, watching anime 
          <span className="italic">(Gojo only lost to the plot btw)</span>, playing soccer, or getting more intuned with streetwear. 
          I also love watching 
          <a
            className="text-blue-500 underline hover:no-underline"
            href="https://www.youtube.com/@ApertureThinking"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aperture
          </a> 
          on YouTube.
        </p>
      </div>
    </div>
  );
};

export default About;
