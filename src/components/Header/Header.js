import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navbar, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
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
        <div style={{ backgroundColor: `${color}`, position: "sticky", top: "0", width: "100%", zIndex: "999" }} className=''>
            <nav className="nav__menu container">
                <Link className="nav__logo" to='/'>Max Fitness</Link>
                <div className={menuBar && "nav"} style={{ display: "flex", alignItems: "center" }}>
                    <div className={`${menuBar && "active__nav"} nav__items`}>
                        <NavLink className='nav__link' to='/'>Home</NavLink>
                        <NavLink className='nav__link' to='/blogs'>Blogs</NavLink>
                        <NavLink className='nav__link' to='/about'>About Developer</NavLink>
                        <NavLink className='nav__link' to='/about-us'>About MaxFitness</NavLink>
                    </div>
                    <div className={`${menuBar && "active__nav"} nav__buttons`}>
                        {
                            user ?
                                <>
                                    <button className={`${menuBar && "active__nav"} blur__button`} onClick={handleSignOut}>Signout</button>
                                </>
                                :
                                <>
                                    <button style={{ marginRight: "1rem" }} className={`${menuBar && "active__nav"} blur__button`} onClick={() => navigate("/login")}>Login</button>
                                    <button className={`${menuBar && "active__nav"} blur__button`} onClick={() => navigate("/registration")}>Sign up</button>
                                </>
                        }
                    </div>
                </div>
                <div className='menu__icons'><span onClick={() => setMenuBar(!menuBar)}><HiOutlineMenuAlt4 className="menu__icon" /></span></div>
            </nav>
        </div>
    );
};

export default Header;