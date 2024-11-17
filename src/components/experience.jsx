import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Custom arrow components with visible styling
function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

function Experience() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const experiences = [
        {
            title: 'NASA, Marshall Space Flight Center',
            position: 'Software Engineering Intern - Radio Frequency Communication Design',
            descriptions: [
                'Develop and implement scalable control system using Python on Raspberry Pi to manage XBee RF modules, improving remote communication capabilities and optimizing mission-critical operations.',
                'Design and built user-friendly graphical user interface (GUI) for seamless wireless communication and control of both command and end modules, enhancing user experience and operational efficiency.',
                'Create efficient algorithm in Python for validating 32-bit LFSR-generated sequences.',
                'Conduct comprehensive analyses and testing to ensure reliability and robustness of communication systems used in space missions, contributing to mission-critical software solutions.'
            ],
            imageUrl: 'https://via.placeholder.com/300', // Placeholder image URL
        },
        {
            title: 'Techwise Workforce Development Program',
            position: 'Student',
            descriptions: [
                'Successfully completed Google-supported TechWise Cohort 2 Program (2023-2024), earning a certificate in advanced software engineering. Focused on system design, algorithm optimization, and hands-on projects that solved real-world challenges.',
                'Engaged in diverse and inclusive learning environment aimed at bridging digital divide and promoting equity in tech industry.',
                'Completed projects and assignments that enhanced practical knowledge and prepared for real-world software development challenges.'
            ],
            imageUrl: 'https://via.placeholder.com/300', // Placeholder image URL
        },
        {
            title: 'Mercy University',
            position: 'Technical Support and Audio-Visual Assistant',
            descriptions: [
                'Provided technical support for desktop and audiovisual equipment.',
                'Conducted troubleshooting and repairs, maintaining documentation for efficient problem resolution.',
                'Assisted with hardware installation and setup, ensuring seamless operations of instructional spaces and events.'
            ],
            imageUrl: 'https://via.placeholder.com/300', // Placeholder image URL
        },
    ];

    return (
        <div className="container mx-auto py-5">
            <h2 className="text-3xl font-semibold mb-8 text-center">My Experience</h2>
            <div className="w-full max-w-3xl mx-auto">
                {/* Carousel Slider */}
                <Slider {...settings}>
                    {experiences.map((experience, index) => (
                        <div key={index} className="p-6">
                            <div className="box w-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                {/* Experience Image */}
                                <div 
                                    className="h-64 w-full bg-cover bg-center rounded-lg mb-4" 
                                    style={{ backgroundImage: `url(${experience.imageUrl})` }}
                                >
                                </div>

                                {/* Experience Title */}
                                <h3 className="text-2xl font-bold text-center">{experience.title}</h3>

                                {/* Experience Position */}
                                <h5 className="text-l font-bold text-center mb-4">{experience.position}</h5>

                                {/* Experience Descriptions as Bullet Points */}
                                <ul className="list-disc list-inside mb-4">
                                    {experience.descriptions.map((desc, idx) => (
                                        <li key={idx} className="text-gray-700 dark:text-gray-300">
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
