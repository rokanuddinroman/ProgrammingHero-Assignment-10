import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection';
import './Home.css'
import ReviewsSection from './ReviewsSection/ReviewsSection';
import ServicesSection from './ServicesSection/ServicesSection';
import WorkoutsSection from './WorkoutsSection/WorkoutsSection';
const Home = () => {
    return (
        <div className=''>
            <HeroSection />
            <WorkoutsSection />
            <ServicesSection />
            <ReviewsSection />
        </div>
    );
};

export default Home;