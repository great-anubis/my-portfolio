import React from 'react';
import NASAlogo from '../images/nasa_logo.png';
const About = () => {
    return (
        <div className="container mx-auto p-2">
            <div className=" w-[70%] mx-auto h-48 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center">
                <h2 className="text-med font-bold ">Who am I ?¿</h2>
                <p className=" text-center">Hey, I’m Great Osikhueme, a senior studying Computer Science. 
                    I love diving into new challenges and figuring things out, especially when it comes to tech. 
                    I’ve had the chance to intern at <img src={NASAlogo} alt="NASA Logo" className="inline h-3 w-9" />, 
                    working on some pretty cool stuff like spacecraft communication and RF technology. I’m always coming up with ideas, 
                    but I’m just as excited to jump on board with someone who’s got a great one. When I’m not buried in code, you’ll probably find me listening to music, 
                    watching anime (gojo only lost to the plot btw), playing soccer, getting more intuned with streetwear, 
                    i also love watching <a className='text-med underline hover:no-underline' href='https://www.youtube.com/@ApertureThinking'>Aperture</a> on YouTube.</p>
            </div>
        </div>
    );
};
export default About;