import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLinks/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <nav className="nav__menu">
                <Link className="nav__logo" to='/'>Max Fitness</Link>
                <div className="nav__items">
                    <CustomLink className='nav__link' to='/'>Home</CustomLink>
                    <CustomLink className='nav__link' to='/blogs'>Blogs</CustomLink>
                    <CustomLink className='nav__link' to='/about'>About Me</CustomLink>
                </div>
                <div className="nav__buttons">
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;