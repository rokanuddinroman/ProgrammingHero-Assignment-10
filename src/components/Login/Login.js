import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="container">
            <div className="form__container">
                <div>
                    <form className="form__div">
                        <div className="input__group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" name="" id="email" required />
                        </div>
                        <div className="input__group">
                            <label htmlFor="password">Password*</label>
                            <input type="password" name="" id="password" required />
                        </div>
                        <p>Don't have an account? <Link to="/registration">Sign Up</Link></p>
                        <input className='login__button' type="submit" value="Login" />
                        <hr />
                        <button className="outline__button">Google Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;