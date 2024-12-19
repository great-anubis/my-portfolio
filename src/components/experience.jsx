import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import nasa from '../images/nasa.webp';
import mercy from '../images/mercy.jpg';
import techwise from '../images/techwise.png';

function Experience() {
    const settings = {
        dots: true, // Enable navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Slide transition speed
        slidesToShow: 1, // Show one experience at a time
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

    const experiences = [
        {
            title: 'NASA, Marshall Space Flight Center',
            position: 'Software Engineering Intern - Radio Frequency Communication Design',
            descriptions: [
                'Developed and implemented scalable control systems using Python on Raspberry Pi to manage XBee RF modules, improving remote communication capabilities.',
                'Designed and built a user-friendly graphical user interface (GUI) for seamless wireless communication.',
                'Created efficient algorithms in Python for validating 32-bit LFSR-generated sequences.',
                'Conducted comprehensive testing to ensure the reliability of space mission communication systems.'
            ],
            imageUrl: nasa,
        },
        {
            title: 'Techwise Workforce Development Program',
            position: 'Student',
            descriptions: [
                'Completed Google-supported TechWise Cohort 2 Program (2023-2024), earning a certificate in advanced software engineering.',
                'Engaged in system design, algorithm optimization, and hands-on projects addressing real-world challenges.',
                'Promoted equity in the tech industry through diverse learning environments.'
            ],
            imageUrl: techwise,
        },
        {
            title: 'Mercy University',
            position: 'Technical Support and Audio-Visual Assistant',
            descriptions: [
                'Provided technical support for desktop and audiovisual equipment.',
                'Conducted troubleshooting and repairs while maintaining detailed documentation.',
                'Assisted with hardware installation and setup for instructional spaces and events.'
            ],
            imageUrl: mercy,
        },
    ];

    return (
        <div className="container mx-auto py-5 px-4 sm:px-2">
            <h2 className="text-3xl sm:text-2xl font-semibold mb-8 text-center text-black dark:text-white">My Experience</h2>
            {/* Carousel Container */}
            <div className="w-screen-90 sm:w-full max-w-3xl mx-auto">
                {/* Carousel Slider */}
                <Slider {...settings}>
                    {experiences.map((experience, index) => (
                        <div key={index} className="p-6">
                            <div className="box w-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                {/* Experience Image */}
                                <div
                                    className="h-64 sm:h-48 w-full bg-cover bg-center rounded-lg mb-4"
                                    style={{ backgroundImage: `url(${experience.imageUrl})` }}
                                ></div>

                                {/* Experience Title */}
                                <h3 className="text-2xl sm:text-xl font-bold text-center mb-2">{experience.title}</h3>

                                {/* Experience Position */}
                                <h5 className="text-lg sm:text-md font-bold text-center mb-4">{experience.position}</h5>

                                {/* Experience Descriptions as Bullet Points */}
                                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                                    {experience.descriptions.map((desc, idx) => (
                                        <li key={idx} className="text-sm sm:text-xs leading-relaxed">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Experience;
