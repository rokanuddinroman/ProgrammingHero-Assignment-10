import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='container footer'>
                <div className="footer__logo">
                    <Link className='nav__logo' to="/">Max Fitness</Link>
                    <p>i'm Max. A Fitness trainer since 2010.</p>
                </div>
            </div>
            <div className="footer__column container">
                <div>
                    <ul>
                        <li>Services</li>
                        <li>Refund</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Services</li>
                        <li>Refund</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Services</li>
                        <li>Refund</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Services</li>
                        <li>Refund</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className="subscribe">
                    <input type="text" placeholder="user@gmail.com" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="copyright__warning container">
                <p>All right reserved to MaxFitness</p>
            </div>
        </div>
    );
};

export default Footer;