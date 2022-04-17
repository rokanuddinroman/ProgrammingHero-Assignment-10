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
        </div>
    );
};

export default Home;