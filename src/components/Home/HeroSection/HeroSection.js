import React from 'react';
import Header from '../../Header/Header';

const HeroSection = () => {
    return (
        <div className='home__container'>
            <Header />
            <div className="banner container">
                <div className="banner__title">
                    <h1>JUMP FORWARD FOR</h1>
                    <h1>BETTER TOMORROW</h1>
                    <p>Your job is to focus on taking action each day and communicate about any challenges. Our job is to meet you where you are, make any necessary adjustments, and continue customizing your perfect plan over time.</p>
                    <div className="subscribe">
                        <input type="text" placeholder="user@gmail.com" />
                        <button>Subscribe</button>
                    </div>
                    <button className='primary__button'>Explore Services</button>
                </div>
                <div className="banner__image">
                    <img src="https://www.transparentpng.com/thumb/fitness/eIf2Ob-fitness-free-cut-out.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;