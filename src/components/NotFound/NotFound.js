import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="errorpage">
                <img src="https://static.vecteezy.com/system/resources/previews/002/416/606/non_2x/404-error-and-page-not-found-illustration-vector.jpg" alt="" />
                <Link className='primary__button' to={'/'}>Return Home</Link>
            </div>
        </div>
    );
};

export default NotFound;