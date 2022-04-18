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
                    {/* <div className="card">
                        <h1>Daily Package</h1>
                        <span>$12</span>/daily
                        <p>Free Consultation</p>
                        <p>2 Hours Training</p>
                        <p>Tier 1 Equipment</p>
                        <button onClick={() => navigate('checkout')} className="checkout__button">Check Out</button>
                    </div>
                    <div className="card featured">
                        <h1>Weekly Package</h1>
                        <span>$75</span>/weekly
                        <p>Free Consultation</p>
                        <p>7 Hours Training</p>
                        <p>Tier 2 Equipment</p>
                        <button onClick={() => navigate('checkout')} className="checkout__button">Check Out</button>
                    </div>
                    <div className="card">
                        <h1>Monthly Package</h1>
                        <span>$340</span>/month
                        <p>Free Consultation</p>
                        <p>24 Hours Training</p>
                        <p>Full Equipment</p>
                        <button onClick={() => navigate('checkout')} className="checkout__button">Check Out</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;