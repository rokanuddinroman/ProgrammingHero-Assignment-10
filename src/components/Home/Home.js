import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import HeroSection from './HeroSection/HeroSection';
import './Home.css'
import ReviewsSection from './ReviewsSection/ReviewsSection';
import ServicesSection from './ServicesSection/ServicesSection';
import WorkoutsSection from './WorkoutsSection/WorkoutsSection';
const Home = () => {
    const [navbar, setNavbar] = useState(false)
    const handleScroll = () => {
        // const scrollY = window.scrollY
        // console.log(scrollY)
        if (window.scrollY >= 60) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    };
    window.addEventListener('scroll', handleScroll)
    return (
        <div>
            <div className={navbar ? 'navActive' : ''} style={{ position: "fixed", top: "0", width: "100%", zIndex: "999" }} >
                <Header />
            </div>
            <HeroSection />
            <WorkoutsSection />
            <ServicesSection />
            <ReviewsSection />
        </div>
    );
};

export default Home;