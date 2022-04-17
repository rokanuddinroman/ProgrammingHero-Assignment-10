import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='container home__container'>
            <div className="banner">
                <div className="banner__title">
                    <h1>JUMP FORWARD FOR</h1>
                    <h1>BETTER TOMORROW</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium nihil quidem nam. Inventore magnam ipsam quasi ratione quam mollitia?</p>
                    <button className='primary__button'>Explore</button>
                </div>
                <div className="banner__image">
                    <img src="https://browsecat.net/sites/default/files/chris-hemsworth-workout-wallpapers-66001-142067-8826053.png" alt="" />
                </div>
            </div>
            <div className="services__container">
                <h1>OUR PRICING PLANS</h1>
                <div className="services">
                    <div className="card">
                        <h1>Daily Package</h1>
                        <span>$12</span>/daily
                        <p>Free Consultation</p>
                        <p>2 Hours Training</p>
                        <p>Full Equipment</p>
                        <button className="checkout__button">Check Out</button>
                    </div>
                    <div className="card">
                        <h1>Weekly Package</h1>
                        <span>$75</span>/weekly
                        <p>Free Consultation</p>
                        <p>2 Hours Training</p>
                        <p>Full Equipment</p>
                        <button className="checkout__button">Check Out</button>
                    </div>
                    <div className="card">
                        <h1>Monthly Package</h1>
                        <span>$340</span>/month
                        <p>Free Consultation</p>
                        <p>2 Hours Training</p>
                        <p>Full Equipment</p>
                        <button className="checkout__button">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;