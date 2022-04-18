import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container'>
            <h1>HEllo</h1>
            <div className="errorpage">
                <Link>Return Home</Link>
            </div>
        </div>
    );
};

export default NotFound;