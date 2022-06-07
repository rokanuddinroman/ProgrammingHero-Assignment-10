import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import { BsCheck2Circle } from 'react-icons/bs';
const Service = (props) => {
    const navigate = useNavigate();
    const { packageName, price, image, feature1, feature2, feature3, featured, description } = props?.service;
    return (
        <div className={`card ${featured}`}>
            <h3>{packageName}</h3>
            {/* <img src={image} alt="" /> */}
            <h6>{description}</h6>
            <span>${price}</span>/month
            <ul>
                <li><BsCheck2Circle style={{ marginRight: "5px", fontWeight: "600" }} /> {feature1}</li>
                <li><BsCheck2Circle style={{ marginRight: "5px", fontWeight: "600" }} /> {feature2}</li>
                <li><BsCheck2Circle style={{ marginRight: "5px", fontWeight: "600" }} /> {feature3}</li>
            </ul>
            <button onClick={() => navigate('checkout')} className="checkout__button">Choose Plan</button>
        </div>
    );
};

export default Service;