import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navbar, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLinks/CustomLink';
import './Header.css'
const Header = ({ color }) => {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    // menu 
    const [menuBar, setMenuBar] = useState(false)


    return (
        <div style={{ backgroundColor: `${color}` }} className=''>
            <nav className="nav__menu container">
                <Link className="nav__logo" to='/'>Max Fitness</Link>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className={menuBar ? "mobile__menu__items" : "nav__items"}>
                        <NavLink className='nav__link' to='/'>Home</NavLink>
                        <NavLink className='nav__link' to='/blogs'>Blogs</NavLink>
                        <NavLink className='nav__link' to='/about'>About Me</NavLink>
                    </div>
                    <div className={menuBar ? "mobile__menu__button" : "nav__buttons"}>
                        {
                            user ?
                                <>
                                    <button className='blur__button' onClick={handleSignOut}>Signout</button>
                                </>
                                :
                                <><button className='blur__button' onClick={() => navigate("/login")}>Login</button>
                                    <button style={{ marginLeft: "1rem" }} className='blur__button' onClick={() => navigate("/registration")}>Sign up</button></>
                        }
                    </div>
                </div>
                <div className="menu-icon"><span onClick={() => setMenuBar(!menuBar)}><box-icon name='menu'></box-icon></span></div>
            </nav>
        </div>
    );
};

export default Header;