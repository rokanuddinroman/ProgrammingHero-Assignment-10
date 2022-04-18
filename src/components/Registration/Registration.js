import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/checkout')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password Didnt Matched')
            return;
        }
        if (password.length < 6) {
            setError('Add atleast 6 characters')
            return;
        }
        createUserWithEmailAndPassword(email, password)
        toast.success('Verification Mail Sent')

    }



    return (
        <div className='container'>
            <ToastContainer />
            <div className="form__container">
                <div>
                    <form onSubmit={handleCreateUser} className="form__div">
                        <div className="input__group">
                            <label htmlFor="email">Email*</label>
                            <input onBlur={handleEmailBlur} type="email" name="" id="email" required />
                        </div>
                        <div className="input__group">
                            <label htmlFor="password">Password*</label>
                            <input onBlur={handlePasswordBlur} type="password" name="" id="password" required />
                        </div>
                        <div className="input__group">
                            <label htmlFor="confirmpassword">Confirm Password*</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="confirmpassword" required />
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <input className='login__button' type="submit" value="Sign Up" />
                        <p style={{ color: 'red' }}>{error}</p>
                        <hr />
                        <button className="outline__button"><span className='button__content'>
                            <box-icon style={{ marginRight: '5px' }} type='logo' name='google'></box-icon> Google Sign Up</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;