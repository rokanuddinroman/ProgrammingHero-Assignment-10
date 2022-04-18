import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Service from './Service/Service';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container home__container'>
            <div className="banner">
                <div className="banner__title">
                    <h1>JUMP FORWARD FOR</h1>
                    <h1>BETTER TOMORROW</h1>
                    <p>Your job is to focus on taking action each day and communicate about any challenges. Our job is to meet you where you are, make any necessary adjustments, and continue customizing your perfect plan over time.</p>
                    <button className='primary__button'>Explore</button>
                </div>
                <div className="banner__image">
                    <img src="https://browsecat.net/sites/default/files/chris-hemsworth-workout-wallpapers-66001-142067-8826053.png" alt="" />
                </div>
            </div>
            <div className="services__container">
                <h1>OUR PRICING PLANS</h1>
                <div className="services">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            <div className="contact__container">
                <div className="picture">
                    <img src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg?w=824&quality=70" alt="" />
                </div>
                <div className="contact__form">
                    <h1>Write your Message</h1>
                    {/* <label htmlFor="Name">Name</label> */}
                    <input type="text" name="Name" id="Name" placeholder='Name' />
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="Email" id="email" placeholder='Email' />
                    {/* <label htmlFor="Messages">Message</label> */}
                    <input className='big__message' type="text" name="Your Messages" id="Messages" placeholder='Message' />
                    <div className="button"><button style={{ margin: '0px' }} className='primary__button'>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Home;