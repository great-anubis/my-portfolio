import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import nasa from '../images/nasa.webp';
import mercy from '../images/mercy.jpg';
import techwise from '../images/techwise.png';

function Experience() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 480, // For mobile devices only
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "10px",
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
        <div className="container mx-auto py-5 px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-black dark:text-white">My Experience</h2>
            <div className="w-full max-w-3xl mx-auto sm:max-w-xs"> {/* Restrict width on mobile */}
                <Slider {...settings}>
                    {experiences.map((experience, index) => (
                        <div key={index} className="p-6 sm:p-3"> {/* Reduce padding on mobile */}
                            <div className="box w-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 sm:p-3 rounded-lg">
                                <div
                                    className="h-64 sm:h-40 w-full bg-cover bg-center rounded-lg mb-4" 
                                    style={{ backgroundImage: `url(${experience.imageUrl})` }}
                                ></div>
                                <h3 className="text-2xl sm:text-lg font-bold text-center">{experience.title}</h3>
                                <h5 className="text-lg sm:text-md font-bold text-center mb-4">{experience.position}</h5>
                                <ul className="list-disc list-inside mb-4">
                                    {experience.descriptions.map((desc, idx) => (
                                        <li key={idx} className="text-sm sm:text-xs text-gray-700 dark:text-gray-300">
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
