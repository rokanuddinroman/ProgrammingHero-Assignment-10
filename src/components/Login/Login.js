import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className="container">
            <div className="form__container">
                <div>
                    <form onSubmit={handleUserSignIn} className="form__div">
                        <div className="input__group">
                            <label htmlFor="email">Email*</label>
                            <input onBlur={handleEmailBlur} type="email" name="" id="email" required />
                        </div>
                        <div className="input__group">
                            <label htmlFor="password">Password*</label>
                            <input onBlur={handlePasswordBlur} type="password" name="" id="password" required />
                        </div>
                        <p>Don't have an account? <Link to="/registration">Sign Up</Link></p>
                        <input className='login__button' type="submit" value="Login" />
                        <p style={{ color: 'red' }}>{error.message}</p>
                        <hr />
                        <button className="outline__button">Google Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;