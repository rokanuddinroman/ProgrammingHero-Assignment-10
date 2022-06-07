import React, { useState, useEffect } from 'react';
import Service from '../../Service/Service';

const ServicesSection = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services__container'>
            <div className="container">
                <h1>Service Planlist</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur nisi ut dignissimos, mollitia autem repudiandae numquam fugiat dolor minima.</p>
                </div>
                <div className="services">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;