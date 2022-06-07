import React from 'react';
import Header from '../Header/Header';
import './About.css'
const About = () => {
    return (
        <div className=''>
            <Header color={"#000"}></Header>
            <div className="about__container container">
                <h1>About Me</h1>
                <div>
                    <img src="https://avatars.githubusercontent.com/u/88700880?v=4" alt="" />
                    <div><p>Hey, It is Rokan Uddin. I am a Student from Chittagong. My goal in next 3 months is Starting my Startup. I am currently working on it.Also Before end of 2022. I wanna secure a job as Web Developer.</p></div></div>
            </div>
        </div>
    );
};

export default About;