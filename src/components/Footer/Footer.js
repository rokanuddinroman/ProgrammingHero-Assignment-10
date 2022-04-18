import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='container footer__container'>
            <div className="footer__logo">
                <Link className='nav__logo' to="/">Max Fitness</Link>
                <p>i'm Max. A Fitness trainer since 2010.</p>
            </div>
            <button>Get in Touch</button>
        </div>
    );
};

export default Footer;