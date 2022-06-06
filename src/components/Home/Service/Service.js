import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const navigate = useNavigate();
    const { packageName, price, image, feature1, feature2, feature3 } = props.service;
    return (
        <div className='card'>
            <h3>{packageName}</h3>
            <img src={image} alt="" />
            <span>${price}</span>/daily
            <p>{feature1}</p>
            <p>{feature2}</p>
            <p>{feature3}</p>
            <button onClick={() => navigate('checkout')} className="checkout__button">Check Out</button>
        </div>
    );
};

export default Service;