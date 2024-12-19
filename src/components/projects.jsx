import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Import local images
import driftImage from '../images/driftimage.png';
import irisImage from '../images/iris.png';
import hangryImage from '../images/hangry.png';
import cSharp from '../images/c-sharp.png';
import git from '../images/git.png';
import matplotlib from '../images/matplotlib.png';
import node from '../images/node.png';
import numpy from '../images/numpy.png';
import Python from '../images/Python.png';
import react from '../images/react.png';
import scikit from '../images/scikit.png';
import tailwind from '../images/tailwind.png';
import unity from '../images/unity.png';
import cohere from '../images/cohere.png';
import rasa from '../images/rasa.png';
import flask from '../images/flask.png';
import seaborn from '../images/seaborn.png';
import memoji from '../images/memoji.png';
import pandas from '../images/pandas.png'


function Projects() {
    const settings = {
        dots: true, // Enable navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Slide transition speed
        slidesToShow: 1, // Show one project at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: true, // Show next/prev arrows
        responsive: [
            {
                breakpoint: 768, // For tablets and smaller screens
                settings: {
                    arrows: false, // Hide arrows on smaller screens
                },
            },
        ],
    };

    const projects = [
        {
            title: 'Drift AI Assistant',
            descriptions: [
                "Designed and developed a chatbot to assist with kitchen tasks using Cohere’s API.",
                "Integrated Rasa for dialogue management.",
                "Built the backend using Flask and the frontend with React.",
                "Currently a work in progress, with plans to include voice functionality, aiming to enhance user experience.",
            ],
            imageUrl: driftImage, 
            techStack: [git, rasa, react, flask, cohere],
        },
        {
            title: 'This Portfolio',
            descriptions: [
                "Engineered personal portfolio website to showcase development projects and technical skills.",
                "Demonstrated expertise in web development principles, employing React and Tailwind CSS for responsive, visually appealing interface.",
            ],
            imageUrl: memoji, 
            techStack: [react, git, tailwind, node],
        },
        {
            title: 'Blooming Iris Insights',
            descriptions: [
                "Developed machine learning model with 90% accuracy for classifying iris species using Python and Scikit-learn.",
                "Utilized Seaborn and Matplotlib for data visualization, enhancing model understanding and performance.",
            ],
            imageUrl: irisImage, 
            techStack: [Python, scikit, matplotlib, pandas, seaborn, numpy],
        },
        {
            title: 'Hangry Boids | Self-Sustaining Ecosystem Simulation Game',
            descriptions: [
                "Played pivotal role in 4-member team, enhancing game mechanics and implementing Boid Algorithm for realistic flock behavior.",
                "Created core scripts, establishing foundation for game logic and functionality.",
            ],
            imageUrl: hangryImage, 
            techStack: [cSharp, unity, git],
        },
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">My Projects</h2>
            <div className="w-full max-w-4xl mx-auto">
                {/* Carousel Slider */}
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="p-4">
                            <div className="box w-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                {/* Project Image */}
                                <div 
                                    className="h-64 w-full bg-cover bg-center rounded-lg mb-4" 
                                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                                ></div>

                                {/* Project Title */}
                                <h3 className="text-2xl font-bold text-center mb-4">{project.title}</h3>

                                {/* Project Descriptions */}
                                <ul className="list-disc list-inside mb-4">
                                    {project.descriptions.map((desc, idx) => (
                                        <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex justify-center items-center space-x-4">
                                    {project.techStack.map((tech, idx) => (
                                        <img key={idx} src={tech} alt="Tech" className="h-10 w-10" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
