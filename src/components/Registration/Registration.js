import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
const Registration = () => {
    return (
        <div className='container'>
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
                        <div className="input__group">
                            <label htmlFor="confirmpassword">Confirm Password*</label>
                            <input type="password" name="" id="confirmpassword" required />
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <input className='login__button' type="submit" value="Sign Up" />
                        <hr />
                        <button className="outline__button">Google Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;