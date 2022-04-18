import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true })
    }
    if (user1) {
        navigate(from, { replace: true })
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.error('Please Check your Mail');
        }
        else {
            toast.error('Please Enter Your Email')
        }
    }
    return (
        <div className="container">
            <ToastContainer />
            <div className="form__container">
                <div className="form__div">
                    <form onSubmit={handleUserSignIn}>
                        <div className="input__group">
                            <label htmlFor="email">Email*</label>
                            <input onBlur={handleEmailBlur} type="email" name="" id="email" required />
                        </div>
                        <div className="input__group">
                            <label htmlFor="password">Password*</label>
                            <input onBlur={handlePasswordBlur} type="password" name="" id="password" required />
                        </div>
                        <input className='login__button' type="submit" value="Login" />
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        <p>{error2?.message}</p>
                    </form>
                    <p>Don't have an account? <Link to="/registration">Sign Up</Link></p>
                    <p>Forget Password? <button onClick={resetPassword} className='link__button'>Reset Password</button></p>
                    <hr />
                    <button onClick={() => signInWithGoogle()} className="outline__button"><span className='button__content'>
                        <box-icon style={{ marginRight: '5px' }} type='logo' name='google'></box-icon> Google Sign In</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;