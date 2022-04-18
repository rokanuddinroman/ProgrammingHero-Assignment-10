import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLinks/CustomLink';
import './Header.css'
const Header = () => {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    // menu 
    const [menuBar, setMenuBar] = useState(false)


    return (
        <div className='container'>
            <nav className="nav__menu">
                <Link className="nav__logo" to='/'>Max Fitness</Link>
                <div className={menuBar ? "mobile__menu__items" : "nav__items"}>
                    <CustomLink className='nav__link' to='/'>Home</CustomLink>
                    <CustomLink className='nav__link' to='/blogs'>Blogs</CustomLink>
                    <CustomLink className='nav__link' to='/about'>About Me</CustomLink>
                </div>
                <div className={menuBar ? "mobile__menu__button" : "nav__buttons"}>
                    {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <button className='blur__button' onClick={handleSignOut}>Signout</button>
                            </>
                            :
                            <><button className='blur__button' onClick={() => navigate("/login")}>Login</button>
                                <button className='blur__button' onClick={() => navigate("/registration")}>Sign up</button></>
                    }
                </div>
                <div className="menu-icon"><span onClick={() => setMenuBar(!menuBar)}><box-icon name='menu'></box-icon></span></div>
            </nav>
        </div>
    );
};

export default Header;